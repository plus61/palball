import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BrzuAv4W.mjs';
import { manifest } from './manifest_a59HzImD.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/api/personal.astro.mjs');
const _page3 = () => import('./pages/concept.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/facility.astro.mjs');
const _page6 = () => import('./pages/fitness.astro.mjs');
const _page7 = () => import('./pages/guide.astro.mjs');
const _page8 = () => import('./pages/kids_dance.astro.mjs');
const _page9 = () => import('./pages/kids_swimming.astro.mjs');
const _page10 = () => import('./pages/personal.astro.mjs');
const _page11 = () => import('./pages/topics/_slug_.astro.mjs');
const _page12 = () => import('./pages/topics.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/api/personal.ts", _page2],
    ["src/pages/concept.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/facility.astro", _page5],
    ["src/pages/fitness.astro", _page6],
    ["src/pages/guide.astro", _page7],
    ["src/pages/kids_dance.astro", _page8],
    ["src/pages/kids_swimming.astro", _page9],
    ["src/pages/personal.astro", _page10],
    ["src/pages/topics/[slug].astro", _page11],
    ["src/pages/topics/index.astro", _page12],
    ["src/pages/index.astro", _page13]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "09e813d3-a635-44d6-8485-e147a904e162",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
