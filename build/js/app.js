document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});

function iniciarApp() {
  crearGaleria();
}

function crearGaleria() {
  const galeria = document.querySelector('.galeria-imagenes');

  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement('picture');

    imagen.innerHTML = `
    <source srcset="build/img/thumb/${i}.avif" type="image/avif" />
    <source srcset="build/img/thumb/${i}.webp" type="image/webp" />
    <source
      srcset="
        build/img/thumb/${i}.png  1x,
        build/img/thumb/${i}.webp 2x
      "
      media="(min-width: 768px)"
    />
    <img
      src="build/img/thumb/${i}.jpg"
      alt="Imagen Galeria ${i}"
      width="200"
      height="300"
      loading="lazy"
    />
    
    `;

    imagen.onclick = function () {
      mostrarImagen(i);
    };

    galeria.appendChild(imagen);
  }
}

function mostrarImagen(id) {
  const imagen = document.createElement('picture');

  imagen.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="image/avif" />
    <source srcset="build/img/grande/${id}.webp" type="image/webp" />
    <source
      srcset="
        build/img/grande/${id}.png  1x,
        build/img/grande/${id}.webp 2x
      "
      media="(min-width: 768px)"
    />
    <img
      src="build/img/grande/${id}.jpg"
      alt="Imagen Galeria ${id}"
      width="200"
      height="300"
      loading="lazy"
    />
    
    `;

  // Crear overlay
  const overlay = document.createElement('div');
  overlay.appendChild(imagen);
  overlay.classList.add('overlay2');
  overlay.onclick = function () {
    const body = document.querySelector('body');

    body.classList.remove('fijar-body');
    overlay.remove();
  };

  // Cuando se da click, cerrar la imagen
  const cerrarImagen = document.createElement('p');
  cerrarImagen.textContent = 'X';
  cerrarImagen.classList.add('btn-cerrar');
  cerrarImagen.onclick = function () {
    const body = document.querySelector('body');

    body.classList.remove('fijar-body');
    overlay.remove();
  };

  overlay.appendChild(cerrarImagen);

  // Añadir en el HTML
  const body = document.querySelector('body');
  body.appendChild(overlay);
  body.classList.add('fijar-body');
}
