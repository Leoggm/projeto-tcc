
// PARA QUE O SITE FUNCIONE COM TODAS AS DEPENDÊNCIAS

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

app.post("/api/weight-height", async (req, res) => {
  const { weight, height, age, gener } = req.body;

  if (!weight || !height) {
    res.status(400).json({ error: "Peso e Altura requeridos" });
    return;
  }
  let result1 = weight / (height * height);
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

let ideal;
if (age <= 2) {
  if (gener === "Feminino" && height <= 93) {
    ideal = "Peso Ideal: 9 - 15kg";
  } else if (gener === "Masculino" && height <= 94) {
    ideal = "Peso Ideal: 9.7 - 15.3kg";
  }
} else {
  if (gener === "Feminino") {
    if (height <= 104) {
      ideal = "Peso Ideal: 14 - 18kg";
    } else if (height <= 112) {
      ideal = "Peso Ideal: 16 - 21kg";
    } else if (height <= 119) {
      ideal = "Peso Ideal: 18 - 23kg";
    } else if (height <= 125) {
      ideal = "Peso Ideal: 21 - 26kg";
    } else if (height <= 132) {
      ideal = "Peso Ideal: 23- 30kg";
    } else if (height <= 137) {
      ideal = "Peso Ideal: 26 - 35kg";
    } else if (height <= 143) {
      ideal = "Peso Ideal: 28 - 40kg";
    } else if (height <= 157) {
      ideal = "Peso Ideal: 31 - 46kg";
    } else if (height <= 164) {
      ideal = "Peso Ideal: 35 - 51kg";
    } else if (height <= 168) {
      ideal = "Peso Ideal: 39 - 57kg";
    } else if (height <= 170) {
      ideal = "Peso Ideal: 44 - 64kg";
    } else if (height <= 171) {
      ideal = "Peso Ideal: 49 - 68kg";
    } else if (height <= 172) {
      ideal = "Peso Ideal: 51 - 70kg";
    } if (height > 172) {
      ideal = "Peso Ideal: 53 - 72kg";
    }
  } else if (gener === "Masculino") {
    if (height <= 103) {
      ideal = "Peso Ideal: 14 - 17kg";
  } else if (height <= 110) {
      ideal = "Peso Ideal: 16 - 20kg";
  } else if (height <= 117) {
      ideal = "Peso Ideal: 18 - 22kg";
  } else if (height <= 126) {
      ideal = "Peso Ideal: 21 - 27kg";
  } else if (height <= 133) {
      ideal = "Peso Ideal: 24 - 31kg";
  } else if (height <= 140) {
      ideal = "Peso Ideal: 27 - 36kg";
  } else if (height <= 145) {
      ideal = "Peso Ideal: 29 - 40kg";
  } else if (height <= 150) {
      ideal = "Peso Ideal: 32 - 45kg";
  } else if (height <= 154) {
      ideal = "Peso Ideal: 35 - 50kg";
  } else if (height <= 161) {
      ideal = "Peso Ideal: 38 - 56kg";
  } else if (height <= 168) {
      ideal = "Peso Ideal: 42 - 62kg";
  } else if (height <= 177) {
      ideal = "Peso Ideal: 48 - 68kg";
  } else if (height <= 181) {
      ideal = "Peso Ideal: 54 - 73kg";
  } else if (height <= 185) {
      ideal = "Peso Ideal: 60 - 80kg";
  } else if (height > 185){
      ideal = "Peso Ideal: 63 - 85kg";
  }
}}
  res.status(200).json({ result, classification, ideal });
  console.log(result, classification, ideal);
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