# Daniel Zhou — Portfolio

A light, responsive, multi-page portfolio covering software engineering, data analytics, financial technology, and interactive systems.

## Preview

Use Node.js 20 or later. No installation or third-party packages are needed.

```sh
npm run build
npm run check
npm run dev
```

Open http://127.0.0.1:4173/Portfolio/. The same server also serves the site at its root. All generated HTML is committed, so GitHub Pages can serve this repository directly from the root of the `main` branch. Deployment settings are managed separately in GitHub.

## Pages

- Home, Projects, About, Experience, Resume, and Contact each have their own URL.
- Eight dedicated project pages include context, implementation details, architecture, and source links where available.
- Project filters cover full-stack, data & finance, games, and AI & automation.
- The Resume page previews and downloads the original Software Engineering and FinTech PDFs.
- Contact uses the owner's verified email and social links. It does not simulate form submission.

## Editing

- `scripts/build.mjs`: shared layout and page content.
- `scripts/projects.mjs`: project descriptions, categories, and source repositories.
- `css/styles.css`: responsive visual design and motion.
- `js/main.js`: mobile navigation, project filters, PDF preview selection, and email copy.
- `assets/resumes/`: the two original PDFs supplied by the owner.

Run `npm run build` after changing page or project content and commit the generated HTML along with the sources. CSS and browser JS changes do not need a build. `npm run check` checks all local links, metadata, page titles, nested navigation, and PDF signatures.

## Content and visual notes

Biographical details and experience come from the owner's October 2026 resumes and profile notes. Project descriptions are grounded in those resumes and public repository documentation. Student Success Analytics is a course project without a linked public source repository. No trading performance, deployment status, or commercial usage is claimed.

The former placeholder portrait has been removed. An original DZ monogram represents Daniel until a preferred photo is provided. Project artwork consists of labeled original schematics, not screenshots or live data.

Cross-document View Transitions enhance page navigation in supporting browsers; standard navigation works elsewhere. Scroll reveals and hover effects respect reduced-motion preferences. Navigation, content, source links, contact links, and downloads remain available without JavaScript. The PDF preview selector and filtering are progressive enhancements.

`404.html` uses the `/Portfolio/` GitHub Pages base path. Update that prefix in the generator if the repository is renamed or moved to a custom domain root.
