function iniciarApp(){navegacionFija(),scrollNav(),crearGaleria()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival"),t=document.querySelector("body");window.addEventListener("scroll",(function(){n.getBoundingClientRect().bottom<0?(e.classList.add("fijo"),t.classList.add("body-scroll")):(e.classList.remove("fijo"),t.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("picture");t.innerHTML=`\n    <source srcset="build/img/thumb/${n}.avif" type="image/avif" />\n    <source srcset="build/img/thumb/${n}.webp" type="image/webp" />\n    <source\n      srcset="\n        build/img/thumb/${n}.png  1x,\n        build/img/thumb/${n}.webp 2x\n      "\n      media="(min-width: 768px)"\n    />\n    <img\n      src="build/img/thumb/${n}.jpg"\n      alt="Imagen Galeria ${n}"\n      width="200"\n      height="300"\n      loading="lazy"\n    />\n    \n    `,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)}}function mostrarImagen(e){const n=document.createElement("picture");n.innerHTML=`\n    <source srcset="build/img/grande/${e}.avif" type="image/avif" />\n    <source srcset="build/img/grande/${e}.webp" type="image/webp" />\n    <source\n      srcset="\n        build/img/grande/${e}.png  1x,\n        build/img/grande/${e}.webp 2x\n      "\n      media="(min-width: 768px)"\n    />\n    <img\n      src="build/img/grande/${e}.jpg"\n      alt="Imagen Galeria ${e}"\n      width="200"\n      height="300"\n      loading="lazy"\n    />\n    \n    `;const t=document.createElement("div");t.appendChild(n),t.classList.add("overlay2"),t.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()};const i=document.createElement("p");i.textContent="X",i.classList.add("btn-cerrar"),i.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(i);const c=document.querySelector("body");c.appendChild(t),c.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));