/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_tDoqtdus.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_D4im5GDl.mjs';

const PonenciaUno = new Proxy({"src":"/_astro/ponencia1.BuvKu0lY.webp","width":700,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/assets/Imagenes/ponencia1.webp";
							}
							
							return target[name];
						}
					});

const PonenciaDos = new Proxy({"src":"/_astro/ponencia11.CvVOXG9h.webp","width":700,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/assets/Imagenes/ponencia11.webp";
							}
							
							return target[name];
						}
					});

const $$Ponencias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full py-16 md:py-20"> <div class="section-container flex flex-col gap-8"> <h1 class="font-semibold text-rojo text-3xl sm:text-4xl text-center tracking-wide
            uppercase mb-4 md:mb-12 text-pretty leading-snug">
Conoce nuestros próximos eventos
</h1> <div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-[4fr,3fr] gap-5 md:gap-10"> <div class="flex flex-col gap-5 md:gap-6 bg-blanco py-5 pr-0 md:pr-8 md:py-10
                text-center sm:text-start"> <h2 class="uppercase font-semibold tracking-wide">
Ema sección Lima 2024
</h2> <p class="tracking-wide text-wrap text-normal md:text-lg" style="line-height: 2">
Evento de inauguración para dar a conocer a la asociación y capacitar
          a los asistentes por medio de ponencias. Asimismo, difundir el
          congreso y realizar networking entre los asistentes. El cual se
          encuentra dirigido principalmente a Delegados, voluntarios y
          estudiantes interesados que deseen adquirir mayor información sobre
          Aneimera.
</p> <a href="https://www.facebook.com/share/p/Qhj6trkSVqa9owU6/" target="_blank" rel="noopener noreferrer" aria-label="Ir a la publicacion de Facebook de EMA" class="px-4 py-2 bg-red-700 text-white text-lg self-center sm:self-start mt-2
                hover:bg-red-800 transition-all duration-200 ease">
Mas información
</a> </div> <div class="w-full h-full flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": PonenciaUno, "alt": "ponencia-uno-image", "class": "object-cover h-96" })} </div> </div> <div class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-[3fr,4fr] gap-5 md:gap-10 mt-5"> <div class="order-2 md:order-1 w-full h-full flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": PonenciaDos, "alt": "ponencia-uno-image", "class": "object-cover h-96" })} </div> <div class="order-1 md:order-2 flex flex-col gap-6 md:gap-8 bg-blanco py-5 pl-0 md:pl-8 md:py-10
                    text-center sm:text-start"> <h2 class="uppercase font-semibold tracking-wide">Misión y Objetivo</h2> <p class="tracking-wide text-pretty leading-[1.9] text-normal md:text-lg" style="line-height: 2">
Promover un ambiente de colaboración y apoyo mutuo donde los miembros
          puedan compartir sus conocimientos y experiencias, fomentando el
          desarrollo de habilidades y el crecimiento profesional. Con el fin de
          fortalecer la comunidad Aneimera, en la cual se compartirá
          conocimientos y experiencias entre los miembros de la comunidad,
          impulsando el aprendizaje y el crecimiento profesional en Lima.
</p> <a href="https://www.facebook.com/profile.php?id=61556567363828" target="_blank" rel="noopener noreferrer" aria-label="Ir a la publicacion de Facebook de Aneimera UPC" class="px-4 py-2 bg-red-700 text-white text-lg mt-2 self-center sm:self-start
                hover:bg-red-800 transition-all duration-200 ease">
Mas información
</a> </div> </div> </div> </section>`;
}, "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/eventos/Ponencias.astro", void 0);

const $$file = "C:/UniversidadUPC-Trabajos/CAS-UPC/Landing-Page/proyecto/src/pages/eventos/Ponencias.astro";
const $$url = "/eventos/Ponencias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Ponencias,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Ponencias as $, _page as _ };
