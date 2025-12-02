const peliculas = [
  {
    nombre: "Inception",
    año: 2010,
    imagen: "https://picsum.photos/300/450?random=1",
    descripcion: "Un ladrón capaz de entrar en los sueños debe realizar la misión más difícil de su vida."
  },
  {
    nombre: "Interstellar",
    año: 2014,
    imagen: "https://picsum.photos/300/450?random=2",
    descripcion: "Un grupo de astronautas viaja más allá de la galaxia en busca de un nuevo hogar para la humanidad."
  },
  {
    nombre: "The Matrix",
    año: 1999,
    imagen: "https://picsum.photos/300/450?random=3",
    descripcion: "Un hacker descubre que la realidad es una simulación creada por máquinas."
  },
  {
    nombre: "Gladiator",
    año: 2000,
    imagen: "https://picsum.photos/300/450?random=4",
    descripcion: "Un general romano traicionado se convierte en gladiador para buscar justicia."
  },
  {
    nombre: "Avatar",
    año: 2009,
    imagen: "https://picsum.photos/300/450?random=5",
    descripcion: "Un soldado humano forma un vínculo inesperado con un pueblo alienígena en un planeta lejano."
  }
];

const divCarruselPelicula = document.getElementById('subContainer');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const foto = document.createElement('img');
let index = 0; 
mostrarImagen();
function mostrarImagen() {  
  foto.src = peliculas[index].imagen;
  divCarruselPelicula.appendChild(foto);
}

prevBtn.addEventListener('click', () => {
   index--;
  if (index < 0) {
    index = imagenes.length - 1; // ir a la última
  }
  mostrarImagen();
});

nextBtn.addEventListener('click', () => {
  index++;
  if (index >= peliculas.length) {
    index = 0; // volver a la primera
  }
  mostrarImagen();
});

const todasImg = document.querySelector('.subContainer img');


console.log(todasImg);

// todasImg.forEach((img) => {
//   console.log(img);  
// });



const btnAbrirModal = document.getElementById('btnAbrirModal');
const btnCerrarModal = document.getElementById('btnCerrarModal');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modalImg');

btnAbrirModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

todasImg.addEventListener('click', () => {
  console.log(index);
  modalImg.src = todasImg.src;
  modal.style.display = 'block';
  // const title = document.createElement('h2');

  // modal.appendChild(todasImg);
});

btnCerrarModal.addEventListener('click', () => {
  modal.style.display = 'none';
});






