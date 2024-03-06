import { c as create_ssr_component, a as subscribe, v as validate_component } from './ssr-Ba-tolyT.js';
import { o as openModal, C as CTAs, H as Header } from './Header-7p0WYHNM.js';
import './index-CL6TwAyb.js';

const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="py-16 sm:py-20 md:py-24 px-4 md:px-8" data-svelte-h="svelte-1jx0n1b"><div class="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-base"><div class="flex flex-col gap-4 md:col-span-2"><h1 class="font-semibold">Swoley<span class="text-indigo-400">Moley</span></h1> <p>2023 SOWLEY MOLEY LTD. All rights reserved.</p></div> <div class="flex flex-col gap-4"><p class="font-bold poppins text-base sm:text-lg">Support</p> <a href="" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200">Contact Us</a></div> <div class="flex flex-col gap-4"><p class="font-bold poppins text-base sm:text-lg">Research</p> <a href="" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200">Read the science</a></div> <div class="flex flex-col gap-4"><p class="font-bold poppins text-base sm:text-lg">Follow Us</p> <a href="" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200"><i class="fa-brands fa-instagram"></i>
                Instagram</a> <a href="" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200"><i class="fa-brands fa-youtube"></i>
                Youtube</a> <a href="" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200"><i class="fa-brands fa-facebook"></i>
                Facebook</a> <a href="" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200"><i class="fa-brands fa-twitter"></i>
                Twitter</a></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let outerHeight;
  let $openModal, $$unsubscribe_openModal;
  $$unsubscribe_openModal = subscribe(openModal, (value) => $openModal = value);
  let y;
  outerHeight = 0;
  $$unsubscribe_openModal();
  return `${$openModal ? `<div class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 p-5 px-8 md:hidden"><div class="flex items-center justify-between gap-4 border-b pb-2"><h1 class="font-semibold" data-svelte-h="svelte-e8oaw8">Swolly
        <span class="text-indigo-400">Molly</span></h1> <button class="outline-none border-none" data-svelte-h="svelte-1lkt9ol"><i class="fa-solid fa-xmark text-2xl"></i></button></div> <div class="flex flex-col gap-4"><button class="border-none outline-none p-2 group duration-200 cursor-pointer text-left" data-svelte-h="svelte-m456k9"><p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">Product
          <i class="fa-solid fa-chevron-right text-xl pl-4"></i></p></button> <button class="border-none outline-none p-2 group duration-200 cursor-pointer text-left" data-svelte-h="svelte-eywy9q"><p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">Reviews
          <i class="fa-solid fa-chevron-right text-xl pl-4"></i></p></button> <button class="border-none outline-none p-2 group duration-200 cursor-pointer text-left" data-svelte-h="svelte-17zfgk1"><p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">FAQs
          <i class="fa-solid fa-chevron-right text-xl pl-4"></i></p></button></div> ${validate_component(CTAs, "CtAs").$$render($$result, {}, {}, {})}</div>` : ``} ${y > outerHeight ? `<div class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 px-4 fadeIn">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div>` : ``} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}  `;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-Dshtfl9_.js.map
