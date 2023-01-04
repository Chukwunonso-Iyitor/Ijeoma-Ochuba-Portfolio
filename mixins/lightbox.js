"usestrict";

export const openLightbox = (e) => {
  let src = e.target.getAttribute("src");

  document.getElementById("lightbox").style.cssText =
    "visibility: visible; opacity: 1";
  document.querySelector(".img-wrapper").style.cssText = "scale: 1;";
  document.getElementById("lightbox-img").setAttribute("src", src);
};
export const closeLightbox = () => {
  document.getElementById("lightbox").style.cssText =
    "visibility: hidden; opacity: 0; cursor: auto;";
  document.querySelector(".img-wrapper").style.cssText = "scale: .2;";
  document.getElementById("lightbox-img").setAttribute("src", "");
};
