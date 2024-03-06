import { c as create_ssr_component, d as add_attribute, a as subscribe } from './ssr-Ba-tolyT.js';
import { w as writable } from './index-CL6TwAyb.js';

const CTAs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dark } = $$props;
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  return `<div class="flex items-center gap-4"><button${add_attribute("class", "specialBtn" + (dark ? "bg-[#181b34]" : ""), 0)}><p class="text-base sm:text-lg md:text-xl" data-svelte-h="svelte-1fzq3zu">Contact Us</p></button> <button class="specialBtnDark" data-svelte-h="svelte-zt19f8"><p class="text-base sm:text-lg md:text-xl">Get Started <i class="fa-solid fa-arrow-right"></i></p></button></div>`;
});
const openModal = writable(false);
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_openModal;
  $$unsubscribe_openModal = subscribe(openModal, (value) => value);
  $$unsubscribe_openModal();
  return `<header class="flex flex-col relative z-20"><div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6"><a href="/" data-svelte-h="svelte-1lhma3y"><h1 class="font-semibold">Swoley <span class="text-indigo-400">Moley</span></h1></a> <button class="md:hidden grid place-item-center" data-svelte-h="svelte-1istbm9"><i class="fa-solid fa-bars"></i></button> <nav class="hidden md:flex item-center gap-4 lg:gap-6" data-svelte-h="svelte-1ovg6n3"><a class="duration-200 hover:text-indigo-400 cursor-pointer" href="#product">Products</a> <a class="duration-200 hover:text-indigo-400 cursor-pointer" href="#review">Reviews</a> <a class="duration-200 hover:text-indigo-400 cursor-pointer" href="#faqs">FAQs</a> <button class="specialBtn"><p>Start free today</p></button></nav></div></header>`;
});

export { CTAs as C, Header as H, openModal as o };
//# sourceMappingURL=Header-7p0WYHNM.js.map
