const arrayGatos = [
  {
    name: "Renata",
    img: "images/cards1-img.PNG",
    shortDesc: "Tiene 1 año, le gusta perseguir mariposas, se lleva bien con ninios, gatos y perros.",
    longDesc: "Temporibus quam id inventore laboriosam repudiandae modi blanditiis porro sint ullam, distinctio commodi, accusantium aut! Voluptatem totam, dolor doloribus id distinctio obcaecati inventore velit temporibus architecto quis.",
    color: ["gris"],
    sexo: "F"
  },
  {
    name: "Beto",
    img: "images/cards2-img.png",
    shortDesc: "Tiene 2 años, le gusta perseguir mariposas, se lleva bien con ninios, gatos y perros.",
    longDesc: "Temporibus quam id inventore laboriosam repudiandae modi blanditiis porro sint ullam, distinctio commodi, accusantium aut! Voluptatem totam, dolor doloribus id distinctio obcaecati inventore velit temporibus architecto quis.",
    color: ["naranja"],
    sexo: "M"
  },
  {
    name: "Mecha",
    img: "images/cards3-img.png",
    shortDesc: "Tiene 1 año, le gusta perseguir mariposas, se lleva bien con ninios, gatos y perros.",
    longDesc: "Temporibus quam id inventore laboriosam repudiandae modi blanditiis porro sint ullam, distinctio commodi, accusantium aut! Voluptatem totam, dolor doloribus id distinctio obcaecati inventore velit temporibus architecto quis.",
    color: ["blanco", "negro"],
    sexo: "F"
  },
  {
    name: "Silvestre",
    img: "images/cards4-img.png",
    shortDesc: "Tiene 2 años, le gusta perseguir mariposas, se lleva bien con ninios, gatos y perros.",
    longDesc: "Temporibus quam id inventore laboriosam repudiandae modi blanditiis porro sint ullam, distinctio commodi, accusantium aut! Voluptatem totam, dolor doloribus id distinctio obcaecati inventore velit temporibus architecto quis.",
    color: ["atigrado"],
    sexo: "M"
  },
  {
    name: "Blackie",
    img: "images/cards5-img.png",
    shortDesc: "Tiene 2 años, le gusta perseguir mariposas, se lleva bien con ninios, gatos y perros.",
    longDesc: "Temporibus quam id inventore laboriosam repudiandae modi blanditiis porro sint ullam, distinctio commodi, accusantium aut! Voluptatem totam, dolor doloribus id distinctio obcaecati inventore velit temporibus architecto quis.",
    color: ["negro"],
    sexo: "M"
  }
];

const cardGatos = document.querySelector('section');

let nuevoHTML = "";

for (let i = 0; i < arrayGatos.length; i++) {

  nuevoHTML = nuevoHTML + `
    <div class="card">
      <div class="cardImg">
      <img src=${arrayGatos[i].img}> <alt=${arrayGatos[i].name}>
        </div>
      <div class="cardInfo">
        <div id="cardTitle">
          <h2>${arrayGatos[i].name.toUpperCase()}</h2>
        </div>
        <div id="cardDescription">
        <p>${arrayGatos[i].shortDesc}</p>
        </div>
        <div class="verMas"><button>ver mas</button></div>
      </div>
    </div>
  `
};

cardGatos.innerHTML = nuevoHTML;

const botonVerMas = document.getElementsByClassName('verMas');
const modalContainer = document.getElementById('modalCard');
const cards = document.getElementsByClassName('cardImg');
const cardsInvert = document.getElementsByClassName('card');

for (let i = 0; i < botonVerMas.length; i++) {

  botonVerMas[i].onclick = () => {

    modalContainer.innerHTML = `
      <div id="modalCard">
        <div id="modalTitle">
          <h1>${arrayGatos[i].name.toUpperCase()}</h1>
        </div>
        <div id="modalImg">
          <img src=${arrayGatos[i].img}> <alt=${arrayGatos[i].name}>
        </div>
        <div id="modalDescription">
          <p>${arrayGatos[i].longDesc}</p>
        </div>
        <div><button id="cerrarModal">cerrar</button></div>
      </div>
    `
    const modal = document.getElementById('modalCard');
    modal.classList.remove('noMostrar');

    const botonCerrarModal = document.getElementById('cerrarModal');

    botonCerrarModal.onclick = () => {
      modal.classList.add('noMostrar');
    };
  };
};

for (let i = 0; i < cardsInvert.length; i++) {

  cardsInvert[i].onmouseenter = () => {
    cardsInvert[i].classList.add('invertido', 'cardImgInvertido');
  };

  cardsInvert[i].onmouseleave = () => {
    cardsInvert[i].classList.remove('invertido', 'cardImgInvertido');
  };


};

const formularios = document.forms;

const formColor = formularios[0];

const checkboxColor = document.querySelectorAll("input[type='checkbox']");

const checkboxColorValue = [];

let nuevoHTMLFiltro = "";

formColor.onsubmit = e => {

  e.preventDefault();

  for (let i = 0; i < checkboxColor.length; i++) {

    if (checkboxColor[i].checked) {
      checkboxColorValue.push(checkboxColor[i].value);
    };
  };

  for (let i = 0; i < checkboxColorValue.length; i++) {

    for (let j = 0; j < arrayGatos.length; j++) {

      if (checkboxColorValue[i] === arrayGatos[j][4]) {

        nuevoHTMLFiltro = nuevoHTMLFiltro + `
        <div class="card">
          <div class="cardImg">
            <img src=${arrayGatos[j].img}> <alt=${arrayGatos[j].name}>
          </div>
          <div class="cardInfo">
            <div id="cardTitle">
              <h2>${arrayGatos[j].name.toUpperCase()}</h2>
            </div>
            <div id="cardDescription">
              <p>${arrayGatos[j].shortDesc}</p>
            </div>
            <div class="verMas"><button>ver mas</button></div>
          </div>
        </div>`
      };
    };
    cardGatos.innerHTML = nuevoHTMLFiltro;  
  };
};