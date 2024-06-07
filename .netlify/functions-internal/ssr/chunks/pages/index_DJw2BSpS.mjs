/* empty css                          */
import { f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, e as createAstro, i as renderComponent, j as renderHead } from '../astro_QqYukZXa.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav class="bg-black fixed w-full z-20 top-0 start-0 border-b"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:p-1"> <a href="#Top" class="hidden lg:flex items-center space-x-3 rtl:space-x-reverse"> <img src="/bikes-White.png" class="w-10 lg:w-20" alt="Flowbite Logo"> </a> <div class="lg:flex hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> <!-- Botón de WhatsApp --> <a href="https://wa.me/4771801951" target="_blank" class="text-white mx-3 bg-gray-800 hover:bg-green-600 py-3 px-5 rounded-full"> <i class="fab fa-whatsapp"></i> </a> <!-- Botón de Facebook --> <a href="https://www.facebook.com/triciclosbikes" target="_blank" class="text-white mr-5 bg-gray-800 hover:bg-blue-600 py-3 px-5 rounded-full"> <i class="fab fa-facebook-f"></i> </a> </div> <div class="items-center justify-between w-full md:flex md:w-auto md:order-1"> <ul class="flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"> <li> <a href="#top" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Inicio</a> </li> <li> <a href="#services" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Nuestros Servicios</a> </li> <li> <a href="#about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sobre Nosotros</a> </li> <li> <a href="#contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacto</a> </li> </ul> </div> </div> </nav> </header>`;
}, "C:/Users/hayab/Dev/Astro/bikes/src/components/Header.astro", void 0);

const SITE_TITLE = "Triciclos Bikes León";
const SITE_DESCRIPTION = "Taller Mecánico de Bicicletas";
const AVAILABLE_SERVICES = [
  {
    "title": "Ensamblaje de piezas",
    "description": "Montaje y ajuste de todas las piezas de tu bicicleta para asegurar un funcionamiento óptimo."
  },
  {
    "title": "Armado de Bicicletas",
    "description": "Armado completo de bicicletas nuevas a partir de piezas sueltas o kit de montaje."
  },
  {
    "title": "Ajuste de Cambios",
    "description": "Ajuste preciso de los sistemas de cambio de marchas para un cambio suave y eficiente."
  },
  {
    "title": "Balanceo de Aros",
    "description": "Equilibrado de las ruedas para mejorar la estabilidad y el rendimiento en la conducción."
  },
  {
    "title": "Armado de Aros",
    "description": "Construcción y ajuste de aros para garantizar una rueda duradera y de alto rendimiento."
  },
  {
    "title": "Parches",
    "description": "Reparación de pinchazos y daños menores en las cámaras de aire de las ruedas."
  },
  {
    "title": "Lavado y Engrasado",
    "description": "Limpieza completa de la bicicleta y lubricación de todas las partes móviles para un mantenimiento adecuado."
  },
  {
    "title": "Cotizaciones",
    "description": "Estimaciones detalladas de costos para reparaciones y servicios personalizados de bicicletas."
  }
];

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hero text-white w-full mt-20 lg:min-h-screen" id="top" data-astro-cid-bbe6dxrz> <div style="backdrop-filter: blur( 1px); background-color: rgba(0, 0, 0, 0.65);" class="p-5 lg:min-h-screen" data-astro-cid-bbe6dxrz> <div class="text-center mt-5 max-w-2xl mx-auto" data-astro-cid-bbe6dxrz> <h1 class="text-4xl lg:text-6xl" data-astro-cid-bbe6dxrz>${SITE_TITLE}</h1> <img src="/bikes-White.png" class="w-24 lg:w-48 mx-auto" alt="Flowbite Logo" data-astro-cid-bbe6dxrz> <h1 class="text-xl lg:text-3xl my-5" data-astro-cid-bbe6dxrz>
Manten tu bicicleta en perfectas condiciones con nuestro
                servicio de mecánica especializado
</h1> <h1 class="text-lg lg:text-2xl my-5" data-astro-cid-bbe6dxrz>
En nuestro taller de bicicletas, ofrecemos servicios de mecánica
                de alta calidad para todo tipo de bicicletas. Confía en nosotros
                para mantener tu bicicleta siempre lista para rodar.
</h1> </div> </div> </div> `;
}, "C:/Users/hayab/Dev/Astro/bikes/src/components/Hero.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="text-white border-t"> <div class="flex flex-col text-center text-sm p-3"> <p>
Designed & Developed By <a href="https://edgarpureco.netlify.app" target="_blank" class="underline">Edgar Pureco.</a> </p> <p>&copy; ${today.getFullYear()} All rights reserved.</p> </div> </footer>`;
}, "C:/Users/hayab/Dev/Astro/bikes/src/components/Footer.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-white w-full lg:min-h-screen" id="about"> <div class="p-5 lg:min-h-screen grid grid-cols-1 lg:grid-cols-2"> <div> <h1 class="text-3xl lg:text-5xl ">¿Quienes Somos?</h1> <div class="px-3 py-5 text-justify"> <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
Somos más que una simple agencia de bicicletas; somos tu
                    socio de confianza en el mundo del ciclismo. En nuestro
                    taller, nos apasiona mantener tu bicicleta en perfectas
                    condiciones para que disfrutes de cada pedaleo sin
                    preocupaciones. Ofrecemos una amplia gama de servicios de
                    mecánica para todo tipo de bicicletas, desde bicicletas de
                    montaña y carretera hasta bicicletas eléctricas y urbanas.
</p> <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
Nuestro equipo de expertos mecánicos está comprometido con
                    la excelencia y la atención al detalle. Nos especializamos
                    en diagnósticos precisos y reparaciones eficientes,
                    utilizando las mejores herramientas y repuestos del mercado.
                    Ya sea que necesites un ajuste fino, una revisión completa,
                    o una reparación urgente, estamos aquí para ayudarte.
</p> <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
Además, nos enorgullecemos de ofrecer un servicio
                    personalizado y cercano. Entendemos que cada bicicleta es
                    única, y cada ciclista tiene necesidades diferentes. Por
                    eso, nos tomamos el tiempo para conocer a nuestros clientes
                    y sus bicicletas, asegurándonos de proporcionar soluciones a
                    medida que superen sus
</p> </div> </div> <div class="fb-page mx-auto" data-href="https://www.facebook.com/triciclosbikes?mibextid=ZbWKwL" data-tabs="timeline" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"> <blockquote cite="https://www.facebook.com/triciclosbikes?mibextid=ZbWKwL" class="fb-xfbml-parse-ignore"> <a href="https://www.facebook.com/triciclosbikes?mibextid=ZbWKwL">Triciclos bikes</a> </blockquote> </div> </div> </div>`;
}, "C:/Users/hayab/Dev/Astro/bikes/src/components/About.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-white w-full mt-10 lg:min-h-screen" id="services"> <div class="p-5 lg:min-h-screen"> <h1 class="text-3xl lg:text-5xl">Nuestros Servicios</h1> <div class="text-center mt-5 w-full p-5 mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-4"> ${AVAILABLE_SERVICES.map((service, index) => renderTemplate`<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"> <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"${addAttribute(`/${index + 1}.jpg`, "src")} alt=""> <div class="flex flex-col justify-between p-4 leading-normal"> <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> ${service.title} </h5> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> ${service.description} </p> </div> </a>`)} </div> </div> </div> </div>`;
}, "C:/Users/hayab/Dev/Astro/bikes/src/components/Services.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/png" href="/bikes-White.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Icons -->`;
}, "C:/Users/hayab/Dev/Astro/bikes/src/components/BaseHead.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-white w-full lg:min-h-screen" id="contact"> <div class="p-5 lg:min-h-screen grid grid-cols-1 lg:grid-cols-2"> <div> <h1 class="text-3xl lg:text-5xl">Contáctanos</h1> <div class="lg:px-3 py-5 text-justify"> <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
Ven y descubre por qué somos el taller de bicicletas de
                    referencia en la comunidad. Confía en nosotros para mantener
                    tu bicicleta en las mejores condiciones, permitiéndote
                    disfrutar de una experiencia de ciclismo segura y
                    placentera. ¡Te esperamos para brindarte el mejor servicio
                    de mecánica para tu bicicleta!
</p> <div class="mx-auto flex flex-col min-w-full items-center"> <!-- Botón de WhatsApp --> <a href="https://wa.me/4771801951" target="_blank" class="text-white mx-auto my-3 bg-gray-800 hover:bg-green-600 p-3 rounded-full"> <i class="fab fa-whatsapp"></i>
477-1801-951
</a> <!-- Botón de Facebook --> <a href="https://www.facebook.com/triciclosbikes" target="_blank" class="text-white mx-auto my-3 bg-gray-800 hover:bg-blue-600 p-3 rounded-full"> <i class="fab fa-facebook-f"></i>
@triciclosbikes
</a> <!-- Botón de Correo --> <a href="mailto:abcdefghikb@gmail.com" class="text-white mx-auto my-3 bg-gray-800 hover:bg-red-600 p-3 rounded-full" title="abcdefghikb@gmail.com"> <i class="fas fa-envelope"></i>
abcdefghikb@gmail.com
</a> </div> </div> </div> <div> <a href="#" class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> <div class="mx-auto rounded-lg w-full max-w-md"> <h2 class="text-2xl font-bold mb-4 text-center">
Horarios de Atención
</h2> <ul class="space-y-2"> <li class="flex justify-between"> <span class="font-medium">Lunes</span> <span>10:30 a.m. - 7:00 p.m.</span> </li> <li class="flex justify-between"> <span class="font-medium">Martes</span> <span>10:30 a.m. - 7:00 p.m.</span> </li> <li class="flex justify-between"> <span class="font-medium">Miércoles</span> <span>10:30 a.m. - 7:00 p.m.</span> </li> <li class="flex justify-between"> <span class="font-medium">Jueves</span> <span>10:30 a.m. - 7:00 p.m.</span> </li> <li class="flex justify-between"> <span class="font-medium">Viernes</span> <span>10:30 a.m. - 7:00 p.m.</span> </li> <li class="flex justify-between"> <span class="font-medium">Sábado</span> <span>12:00 p.m. - 4:00 p.m.</span> </li> <li class="flex justify-between"> <span class="font-medium">Domingo</span> <span class="text-red-500">CERRADO</span> </li> </ul> </div> <iframe class="mx-auto w-full pt-5 min-h-9" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.6018017365142!2d-101.683777528815!3d21.127359112159564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf827e4559b7%3A0x5f56eaac302bd19f!2sTaller%20de%20Bicicletas%20%22Triciclos%20Bikes%22!5e0!3m2!1ses-419!2smx!4v1717732074895!5m2!1ses-419!2smx" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </a> </div> </div> </div>`;
}, "C:/Users/hayab/Dev/Astro/bikes/src/components/Contact.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head>', "", '</head> <body class="bg-black"> <div id="fb-root"></div> <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v20.0" nonce="FfyK4dZk"><\/script> ', " ", " ", " ", " ", " ", " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": "Taller | Triciclos Bikes Le\xF3n", "description": SITE_DESCRIPTION }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Hero", $$Hero, {}), renderComponent($$result, "Services", $$Services, {}), renderComponent($$result, "About", $$About, {}), renderComponent($$result, "Contact", $$Contact, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/hayab/Dev/Astro/bikes/src/pages/index.astro", void 0);

const $$file = "C:/Users/hayab/Dev/Astro/bikes/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
