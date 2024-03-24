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

    try {
      const response = await fetch("/api/estimated-weight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Falha ao calcular o peso");
      }

      const result = await response.json();
      result.calculatedWeight = parseFloat(result.calculatedWeight.toFixed(2));
      document.getElementById(
        "estimated-weight-result"
      ).textContent = `Peso estimado: ${result.calculatedWeight}`;
      console.log();
    } catch (error) {
      console.error(error);
      document.getElementById("estimated-weight-result").textContent =
        "Um erro aconteceu ao calcular o peso estimado.";
    }
  });

/*IMC*/

document
  .getElementById("weight-height")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const gener = document.getElementById("gener").value;
    const age = document.getElementById("age").value;

    try {
      const response = await fetch("/api/weight-height", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ weight, height,age, gener }),
      });

      if (!response.ok) {
        throw new Error(
          "Falha ao calcular o peso dividida pela altura ao quadrado"
        );
      }

      const result = await response.json();
      document.getElementById("weight-height-result").textContent = `IMC: ${result.result} - (${result.classification})`;
      document.getElementById("ideal-weight-result").textContent = `Peso ideal: ${result.idealmin}kg - ${result.ideal}kg`;
      console.log(result);
    } catch (error) {
      console.error(error);
      document.getElementById("weight-height-result").textContent =
        "Um erro aconteceu ao calcular a idade dividida pela altura ao quadrado.";
    }
  });

/*TMB*/

document
  .getElementById("tmb-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      gene: formData.get("gene"),
      idad: formData.get("idad"),
      pes: formData.get("pes"),
      alt: formData.get("alt"),
      activity: formData.get("activity"),
    };

    try {
      const response = await fetch("/api/tmb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Falha ao calcular a taxa");
      }

      const result = await response.json();
      const finalTMB = parseFloat(result.calculatedtmb.toFixed(2));
      const totalCaloricExpenditure = parseFloat(
        (finalTMB * result.activity).toFixed(2)
      );
      document.getElementById(
        "estimatedtmb-result"
      ).textContent = `Sua taxa metabólica basal é de ${finalTMB} calorias. Já o seu gasto calórico total é de ${totalCaloricExpenditure} calorias.`;
      console.log();
    } catch (error) {
      console.error(error);
      document.getElementById("estimatedtmb-result").textContent =
        "Um erro aconteceu ao calcular a taxa de matabolismo basal.";
    }
  });

/*Menu Celular*/


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
