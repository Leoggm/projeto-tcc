const fastify = require('fastify')({ logger: true });

fastify.post('/api/weight-height', async (request, reply) => {
  const { weight, height, age, genero } = request.body;

  if (!weight || !height) {
    reply.status(400).send({ error: "Peso e Altura requeridos" });
    return;
  }
  let result1 = weight / (height * height);
  let result = result1 * 10000;
  result = parseFloat(result.toFixed(2));

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

  let ideal = ((25 * (height * height)) / 1000000) * 100;
  let idealmin = ((18.5 * (height * height)) / 1000000) * 100;
  ideal = parseFloat(ideal.toFixed());
  idealmin = parseFloat(idealmin.toFixed());

  reply.status(200).send({ result, classification, ideal, idealmin });
});

fastify.post('/api/estimated-weight', async (request, reply) => {
  const { aj, cb, idade, genero, etnia } = request.body;

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

  calculatedWeight =parseFloat(calculatedWeight.toFixed(2));
  reply.status(201).send({ calculatedWeight });
});

fastify.post('/api/tmb', async (request, reply) => {
  const { peso, altura, idade, sexo, atividade } = request.body;

  let _calculatedtmb;
  if (sexo === "Masculino") {
    _calculatedtmb = 88.362 + 13.397 * peso + 4.799 * altura - 5.677 * idade;
  } else if (sexo === "Feminino") {
    _calculatedtmb = 44.593 + 9.247 * peso + 3.098 * altura - 3.33 * idade;
  }

  let calculatedtmb = parseFloat(_calculatedtmb.toFixed(2));
  calculatedtmb *= atividade;
  reply.status(201).send({ calculatedtmb });
});

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});