let i = 0;
const data = [
  {
    image: "./assets/img/006.jpg",
    lead1:
      "'Mi idea puede cambiar al mundo pero no sé cómo llevarla a la práctica'. Deja de soñar y empieza a construir",
    lead2:
      "En Silicon River Academy harás tu idea realidad y formarás parte de una comunidad internacional de emprendimiento",
    position: "right"
  },
  {
    image: "./assets/img/002.jpg",
    lead1:
      "¿Acabas la universidad y quieres probar tu idea de negocio antes de empezar tu vida profesional?",
    lead2:
      "En Silicon River Academy te ayudaremos para que puedas llevar tu negocio al mercado de la forma más expedita",
    position: "left"
  },
  {
    image: "./assets/img/007.jpg",
    lead1:
      "¿Sientes que ya has aprendido en tu trabajo todo lo que necesitabas aprender para desarrollar tu idea de negocio",
    lead2:
      "En Silicon River Academy te daremos las herramientas para que lleves tu idea a la práctica",
    position: "right"
  },
  {
    image: "./assets/img/005.jpg",
    lead1:
      "¿Ese proyecto con el cual has soñado toda tu vida pero que por cuestiones de trabajo nunca has podido desarrollar ?",
    lead2: "Con Silicon River Academy puedes hacerlo una realidad",
    position: "left"
  }
];

const carrusel = document.getElementById("carrusel");
function repaint() {
  carrusel.innerHTML = `<div class="carrusel-container"> 
        <img name="carrusel" class="carrusel-img" src="${data[i].image}">
      <div class="hero-text-container ${data[i].position}" >
        <div class="dark-box">
          <p class="medium" >${data[i].lead1}</p>
          <p class="large">${data[i].lead2}</p>
          </div>
          <a href="" class="button">Más información</a>
      </div>
      <img id="ui-arrow-left" src="./assets/img/ui/ui-arrow-left.svg" alt="ui-arrow-left">
      <img id="ui-arrow-right" src="./assets/img/ui/ui-arrow-right.svg" alt="">

    </div>
          `;
  let uiArrowLeft = document.getElementById("ui-arrow-left");
  let uiArrowRight = document.getElementById("ui-arrow-right");
  uiArrowLeft.addEventListener("click", clickLeft);
  uiArrowRight.addEventListener("click", clickRight);
}

const time = 3000;

let clickLeft = () => {
  if (i == 0) {
    i = data.length - 1;
  } else {
    i--;
  }
  repaint();
  console.log(data.length - 1);
  console.log(i);
};
let clickRight = () => {
  if (i < data.length - 1) {
    i++;
  } else {
    i = 0;
  }
  repaint();
  console.log(data.length - 1);
  console.log(i);
};

repaint();
