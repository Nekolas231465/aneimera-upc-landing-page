/* empty css                                            */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_wgLUvNuf.mjs';
import { $ as $$Hero } from '../chunks/Hero_xFFTEwYP.mjs';
import { $ as $$AboutUs } from '../chunks/AboutUs_LUCBi1LT.mjs';
import { $ as $$Goal } from '../chunks/Goal_Bw6y0Hkf.mjs';
import { $ as $$ContactSection } from '../chunks/ContactSection_CW1Lm0TB.mjs';
import { $ as $$Questions } from '../chunks/Questions_BLr1SdHG.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aneimera UPC" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$AboutUs, {})} ${renderComponent($$result2, "Goal", $$Goal, {})} ${renderComponent($$result2, "Contact", $$ContactSection, {})} ${renderComponent($$result2, "FAQ", $$Questions, {})} ` })}`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/src/pages/index.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
