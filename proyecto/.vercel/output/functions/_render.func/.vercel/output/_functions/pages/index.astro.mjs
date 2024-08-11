/* empty css                                            */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BCUAjs3Z.mjs';
import { $ as $$Hero } from '../chunks/Hero_D2lAp8LQ.mjs';
import { $ as $$AboutUs } from '../chunks/AboutUs_Bs3fsZ7E.mjs';
import { $ as $$Goal } from '../chunks/Goal_CZWITcJX.mjs';
import { $ as $$ContactSection } from '../chunks/ContactSection_DuGjYLNa.mjs';
import { $ as $$Questions } from '../chunks/Questions_CL9wPtmf.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aneimera UPC" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$AboutUs, {})} ${renderComponent($$result2, "Goal", $$Goal, {})} ${renderComponent($$result2, "Contact", $$ContactSection, {})} ${renderComponent($$result2, "FAQ", $$Questions, {})} ` })}`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/index.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
