/*Peso Estimado*/

document
  .getElementById("estimated-weight-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      genero: formData.get("genero"),
      etnia: formData.get("etnia"),
      idade: formData.get("idade"),
      aj: formData.get("aj"),
      cb: formData.get("cb"),
    };

    let calculatedWeight;
    if (data.idade >= 18 && data.idade <= 60) {
      if (data.etnia === "Branco(a)" && data.genero === "Masculino") {
        calculatedWeight = data.aj * 1.19 + data.cb * 3.21 - 86.82;
      } else if (data.etnia === "Negro(a)" && data.genero === "Masculino") {
        calculatedWeight = data.aj * 1.09 + data.cb * 3.14 - 83.72;
      } else if (data.etnia === "Branco(a)" && data.genero === "Feminino") {
        calculatedWeight = data.aj * 1.01 + data.cb * 2.81 - 60.04;
      } else if (data.etnia === "Negro(a)" && data.genero === "Feminino") {
        calculatedWeight = data.aj * 1.24 + data.cb * 2.97 - 82.48;
      }
    } else {
      if (data.etnia === "Branco(a)" && data.genero === "Masculino") {
        calculatedWeight = data.aj * 1.1 + data.cb * 3.07 - 75.81;
      } else if (data.etnia === "Negro(a)" && data.genero === "Masculino") {
        calculatedWeight = data.aj * 0.44 + data.cb * 2.86 - 39.21;
      } else if (data.etnia === "Branco(a)" && data.genero === "Feminino") {
        calculatedWeight = data.aj * 1.09 + data.cb * 2.68 - 65.51;
      } else if (data.etnia === "Negro(a)" && data.genero === "Feminino") {
        calculatedWeight = data.aj * 1.5 + data.cb * 2.58 - 85.22;
      }
    }

    calculatedWeight = parseFloat(calculatedWeight.toFixed(2));
    document.getElementById("estimated-weight-result").textContent = `Peso estimado: ${calculatedWeight}`;
    console.log(calculatedWeight)
});

/*IMC*/

document
  .getElementById("weight-height")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;
    const gener = document.getElementById("gener").value;

    if (!weight || !height) {
      document.getElementById("weight-height-result").textContent =
        "Peso e altura são necessários.";
      return;
    }

    let result1 = weight / (height * height);
    let result = result1 * 10000;
    result = result.toFixed(2);

    let classification;

    if (result < 18.4) {
      classification = "Magreza";
    } else if (result <= 24.9) {
      classification = "Peso Ideal";
    } else if (result <= 29.9) {
      classification = "Sobrepeso";
    } else if (result <= 34.9) {
      classification = "Obesidade Grau 1";
    } else if (result <= 39.9) {
      classification = "Obesidade Grau 2";
    } else {
      classification = "Obesidade Grau 3";
    }

    let recomend;
    if (classification === "Magreza") {
      recomend = "É importante aumentar a ingestão calórica e proteica, incorporando alimentos densos em nutrientes e frequentemente dividindo as refeições ao longo do dia para aumentar a ingestão calórica total.";
    }  else if (classification === "Peso Ideal") {
      recomend = "Mantenha uma dieta equilibrada com uma variedade de alimentos, incluindo frutas, vegetais, grãos integrais, proteínas magras e gorduras saudáveis. Beba água regularmente e pratique exercícios físicos.";
    }  else if (classification === "Sobrepeso") {
      recomend = "A abordagem deve incluir modificações na dieta e no estilo de vida para alcançar uma redução de peso saudável, enfatizando alimentos integrais, frutas, vegetais, proteínas magras e limitando alimentos processados e açucarados.";
    } else if (classification === "Obesidade Grau 1") {
     recomend = "Aumente o consumo de alimentos ricos em fibras, como frutas, vegetais e grãos integrais, para promover a saciedade e regularidade intestinal. Reduza a ingestão calórica total, limitando alimentos ricos em gordura e açúcar.";
    }  else if (classification === "Obesidade Grau 2") {
      recomend = "Consulte um nutricionista para desenvolver um plano alimentar personalizado que leve em consideração as necessidades específicas de saúde e as preferências alimentares. Faça modificações na dieta para reduzir a ingestão calórica, possivelmente através de uma dieta com restrição calórica supervisionada.";
    }  else if (classification === "Obesidade Grau 3") {
      recomend = "Consulte um nutricionista para desenvolver um plano alimentar personalizado que leve em consideração as necessidades específicas de saúde e as preferências alimentares. Faça modificações na dieta para reduzir a ingestão calórica, possivelmente através de uma dieta com restrição calórica supervisionada.";
    }
    let ideal = ((25 * (height * height)) / 1000000) * 100;
    let idealmin = ((18.5 * (height * height)) / 1000000) * 100;
    ideal = ideal.toFixed();
    idealmin = idealmin.toFixed();

    document.getElementById("weight-height-result").textContent = `IMC: ${result} - (${classification})`;
    document.getElementById("ideal-weight-result").textContent = `Peso Ideal: ${idealmin}kg - ${ideal}kg`;
    document.getElementById("recomendasao").textContent = `${recomend}`;
});


/*TMB*/


  document
  .getElementById("tmb-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      pes: parseFloat(formData.get("pes")),
      alt: parseFloat(formData.get("alt")),
      idad: parseFloat(formData.get("idad")),
      gene: formData.get("gene"),
      activity: parseFloat(formData.get("activity")),
    };

    let calculatedtmb;
    if (data.gene === "Masculino") {
      calculatedtmb = 88.362 + 13.397 * data.pes + 4.799 * data.alt - 5.677 * data.idad;
    } else if (data.gene === "Feminino") {
      calculatedtmb = 44.593 + 9.247 * data.pes + 3.098 * data.alt - 3.33 * data.idad;
    }

    calculatedtmb = parseFloat(calculatedtmb.toFixed(2));
    const finalact = parseFloat((calculatedtmb * data.activity).toFixed(2));

    document.getElementById("estimatedtmb-result").innerHTML = `Sua taxa de Metabolismo Basal é de: <u>${calculatedtmb}</u> calorias e seu gasto é de <u>${finalact}</u> calorias em média.`;
    console.log(calculatedtmb);
  });

/*Menu Celular*/



function clickmenu() {
  if (menu.style.display === "block") {
      menu.style.display = "none"
  } else {
      menu.style.display = "block"
  }
}
function exibir() {
  if (mais.style.display === "block") {
      mais.style.display = "none"
  } else {
      mais.style.display = "block"
  }
}
document
  .querySelector(".nav-item a.nav-link#bct")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#squares");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".mobile-menu a.nav-menu#bct2")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#squares");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".nav-item a.nav-link#bct3")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#foot");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".mobile-menu a.nav-menu#bct4")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#foot");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".nav-item a.nav-link#bct5")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#estim");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".mobile-menu a.nav-menu#bct6")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#estim");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".nav-item a.nav-link#bct7")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#tmb");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".mobile-menu a.nav-menu#bct8")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#tmb");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });

/*POP UP DOS RESULTADOS*/

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

const openTmb = document.getElementById("open-tmb");
const modalContainerTmb = document.getElementById("modal_container_tmb");
const closeTmb = document.getElementById("close-tmb");

openTmb.addEventListener("click", () => {
  modalContainerTmb.classList.add("show");
});

closeTmb.addEventListener("click", () => {
  modalContainerTmb.classList.remove("show");
});
const openAgeHeight = document.getElementById("open-weight-height");
const modalContainerAgeHeight = document.getElementById(
  "modal_container_weight-height"
);
const closeAgeHeight = document.getElementById("close-weight-height");

openAgeHeight.addEventListener("click", () => {
  modalContainerAgeHeight.classList.add("show");
});

closeAgeHeight.addEventListener("click", () => {
  modalContainerAgeHeight.classList.remove("show");
});

//BOTÃO DE LER MAIS

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[id*='read_button']");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = this.closest(".card");
      card.classList.toggle("active");

      if (card.classList.contains("active")) {
        return (button.textContent = "Ler menos");
      }
      button.textContent = "Ler mais";
    });
  });
});

// BOTÃO DE SUBIR

window.addEventListener('scroll', function() {
  let scroll = this.document.querySelector('.scrollTop')
      scroll.classList.toggle('active', this.window.scrollY > 450)
})

function backTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
