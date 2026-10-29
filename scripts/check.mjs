import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { projects } from './projects.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const files = [...(await readdir(root)).filter(f=>f.endsWith('.html')), ...(await readdir(join(root,'projects'))).filter(f=>f.endsWith('.html')).map(f=>`projects/${f}`)];
let checkedLinks=0;
for (const file of files) {
  const html=await readFile(join(root,file),'utf8');
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${file}: expected one page title`);
  assert.match(html,/<title>[^<]+<\/title>/,`${file}: missing title`);
  assert.match(html,/<meta name="description" content="[^"]+">/,`${file}: missing description`);
  assert.match(html,/<html lang="en">/);
  assert.match(html,/<main id="main"/);
  assert(!/onclick=|cdn\.tailwindcss|profile\.jpg|daniel@plasmazero|Signal Daytrade/.test(html),`${file}: legacy placeholder content`);
  const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(match=>match[1]);
  assert.equal(new Set(ids).size,ids.length,`${file}: duplicate IDs`);
  for (const [,link] of html.matchAll(/(?:href|src|data)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(link)) continue;
    assert.notEqual(link,'#',`${file}: empty link`);
    const [pathname,hash]=link.split('#');
    const target=pathname.startsWith('/Portfolio/')?join(root,pathname.slice(11)):resolve(dirname(join(root,file)),pathname||file.split('/').at(-1));
    assert((await stat(target)).isFile(),`${file}: missing ${link}`);
    if(hash){ const contents=await readFile(target,'utf8'); assert(contents.includes(`id="${hash}"`),`${file}: missing fragment ${link}`); }
    checkedLinks++;
  }
  if(file.startsWith('projects/')) assert.match(html,/href="\.\.\/projects\.html" aria-current="page"/);
}
assert.equal(files.length,projects.length+7);
for (const edition of ['Software_Engineering','FinTech']) {
  const path=join(root,`assets/resumes/Daniel_Zhou_${edition}_Resume.pdf`);
  const bytes=await readFile(path);
  assert.equal(bytes.subarray(0,5).toString(),'%PDF-');
  console.log(`${edition} PDF: ${bytes.length} bytes; SHA256 ${createHash('sha256').update(bytes).digest('hex')}`);
}
console.log(`Verified ${files.length} pages and ${checkedLinks} local links/assets, page metadata, navigation, and resume PDFs.`);
