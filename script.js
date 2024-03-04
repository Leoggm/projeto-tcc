/*Peso Estimado*/

const express = require("express");
const path = require("path");

const app = express();
const pathh = path.join(__dirname, "");

app.use(express.static(pathh));
app.use(express.json());

app.get("/", (req, res) => {
  const htmlFilePath = path.join(pathh, "index.html");

  res.sendFile(htmlFilePath);
});

//PESO ESTIMADO

app.post("/api/estimated-weight", async (req, res) => {
  console.log("post");
  const { aj, cb, idade, genero, etnia } = req.body;

  let calculatedWeight;
  if (idade >= 18 && idade <= 60) {
    if (etnia === "Branco(a)" && genero === "Masculino") {
      calculatedWeight = aj * 1.19 + cb * 3.21 - 86.82;
    } else if (etnia === "Negro(a)" && genero === "Masculino") {
      calculatedWeight = aj * 1.09 + cb * 3.14 - 83.72;
    } else if (etnia === "Branco(a)" && genero === "Feminino") {
      calculatedWeight = aj * 1.01 + cb * 2.81 - 60.04;
    } else if (etnia === "Negro(a)" && genero === "Feminino") {
      calculatedWeight = aj * 1.24 + cb * 2.97 - 82.48;
    }
  } else {
    if (etnia === "Branco(a)" && genero === "Masculino") {
      calculatedWeight = aj * 1.1 + cb * 3.07 - 75.81;
    } else if (etnia === "Negro(a)" && genero === "Masculino") {
      calculatedWeight = aj * 0.44 + cb * 2.86 - 39.21;
    } else if (etnia === "Branco(a)" && genero === "Feminino") {
      calculatedWeight = aj * 1.09 + cb * 2.68 - 65.51;
    } else if (etnia === "Negro(a)" && genero === "Feminino") {
      calculatedWeight = aj * 1.5 + cb * 2.58 - 85.22;
    }
  }

  calculatedWeight = parseFloat(calculatedWeight.toFixed(2));
  res.status(201).json({ calculatedWeight });
  console.log(calculatedWeight);
});

// IMC

app.post("/api/age-height", async (req, res) => {
  const { age, height } = req.body;

  if (!age || !height) {
    res.status(400).json({ error: "Peso e Altura requeridos" });
    return;
  }
  let result1 = age / (height * height);
  let result = result1 * 10000;
  result = result.toFixed(2);

  let classification;
  if (result < 18.5) {
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

  res.status(200).json({ result, classification });
  console.log(result, classification);
});

// TAXA DE METABOLISMO BASAL

app.post("/api/tmb", async (req, res) => {
  console.log("post");
  const { pes, alt, idad, gene, activity } = req.body;

  let calculatedtmb;
  if (gene == "Masculino") {
    calculatedtmb = 88.362 + 13.397 * pes + 4.799 * alt - 5.677 * idad;
  } else if (gene == "Feminino") {
    calculatedtmb = 44.593 + 9.247 * pes + 3.098 * alt - 3.33 * idad;
  }

  calculatedtmb = parseFloat(calculatedtmb.toFixed(2));
  res.status(201).json({ calculatedtmb, activity });
  console.log(calculatedtmb);
});

// MOSTRAR QUE O SITE ESTÁ LIGADO

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

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
  .getElementById("age-height")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;

    try {
      const response = await fetch("/api/age-height", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ age, height }),
      });

      if (!response.ok) {
        throw new Error(
          "Falha ao calcular a idade dividida pela altura ao quadrado"
        );
      }

      const result = await response.json();
      document.getElementById(
        "age-height-result"
      ).textContent = `Resultado: ${result.result} - (${result.classification})`;
      console.log(result);
    } catch (error) {
      console.error(error);
      document.getElementById("age-height-result").textContent =
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

function clickmenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function exibir() {
  if (mais.style.display === "block") {
    mais.style.display = "none";
  } else {
    mais.style.display = "block";
  }
}

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src =
      "https://cdn.glitch.global/6af1468b-cb11-4a91-ae86-6c41c33a11e0/download.png?v=1706309428369";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src =
      "https://cdn.glitch.global/6af1468b-cb11-4a91-ae86-6c41c33a11e0/download%20(1).png?v=1706309434007";
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
const openAgeHeight = document.getElementById("open-age-height");
const modalContainerAgeHeight = document.getElementById(
  "modal_container_age-height"
);
const closeAgeHeight = document.getElementById("close-age-height");

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