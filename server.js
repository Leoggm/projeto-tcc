
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