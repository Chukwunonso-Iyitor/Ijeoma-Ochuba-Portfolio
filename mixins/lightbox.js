// Lightbox Mixin

export const openLightbox = (e) => {
  let src = e.target.getAttribute("src");
  const lbox = document.getElementById("lightbox");
  const wrapper = document.querySelector(".img-wrapper");
  const limg = document.getElementById("lightbox-img");

  lbox.style.cssText = "visibility: visible; opacity: 1";
  wrapper.style.cssText = "scale: 1;";
  limg.setAttribute("src", src);
};
export const closeLightbox = () => {
  const lbox = document.getElementById("lightbox");
  const wrapper = document.querySelector(".img-wrapper");
  const limg = document.getElementById("lightbox-img");
  lbox.style.cssText = "visibility: hidden; opacity: 0; cursor: auto;";
  wrapper.style.cssText = "scale: .2;";
  limg.setAttribute("src", "");
};
