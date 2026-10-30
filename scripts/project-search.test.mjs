import test from 'node:test';
import assert from 'node:assert/strict';
import { readProjectState, matchesProject } from '../js/project-search.js';
import { projects } from './projects.mjs';

const matching = state => projects.filter(p=>matchesProject({ categories:p.filters, search:[p.name,p.category,p.summary,...p.stack,...p.filters].join(' ') }, state)).map(p=>p.slug);

test('combines category and all search words without case sensitivity', () => {
  assert.deepEqual(matching({ category:'Full-stack', query:'FASTAPI postgres' }),['evhunter']);
  assert.deepEqual(matching({ category:'Games', query:'typescript' }),[]);
  assert.deepEqual(matching({ category:'Full-stack', query:'Python' }),['evhunter']);
  assert.deepEqual(matching({ category:'All work', query:'  d3.js  ' }),['student-success']);
});
test('parses a shared URL and falls back safely for an unknown category', () => {
  assert.deepEqual(readProjectState('?category=Data+%26+finance&q=TypeScript'),{category:'Data & finance',query:'TypeScript'});
  assert.deepEqual(readProjectState('?category=invalid'),{category:'All work',query:''});
  assert.equal(readProjectState(`?q=${'x'.repeat(300)}`).query.length,160);
});
test('an empty search restores the complete collection or selected category', () => {
  assert.equal(matching({category:'All work',query:''}).length,8);
  assert.deepEqual(matching({category:'Games',query:''}),['night-shift']);
});
