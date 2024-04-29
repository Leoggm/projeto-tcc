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
    const targetSection = document.querySelector("#recomend");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".mobile-menu a.nav-menu#bct4")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#recomend");
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


function showRecommendation(doenca) {
  var message;
  var trat;
  var dodo;
  var dede;
  var didi;
  var trata;
  var sobre;
  switch (doenca) {
    case "nada":
      sobre = "Selecione uma doença para ver sobre. "
      message = "As informações sobre as doenças foram obtidas a partir dos renomados livros da coleção Sanar de nutrição."
      trat = "Esta coleção é conhecida por sua abordagem abrangente e baseada em evidências sobre diversos aspectos da nutrição, incluindo doenças relacionadas à alimentação e suas terapias correspondentes."
      dodo = " "
      dede = " "
      didi = " "
      trata = " "
      break;
    case "anemia":
      message = "A anemia é a falta de hemoglobina no sangue. A hemoglobina, por sua vez, é uma proteína que compõe os glóbulos vermelhos, conhecidos também como hemácias. É ela a responsável pelo transporte de oxigênio no sangue, que chega até os órgãos e tecidos do corpo todo. Em uma pessoa com anemia, alguma disfunção do organismo ou fator externo fazem com que a produção de hemoglobina fique abaixo do considerado normal.";
      trat = "Como a anemia se manifesta de diversas maneiras e por variadas causas, o principal aspecto de um bom tratamento é identificar o que gera a queda do nível de hemoglobina no sangue. Com a causa clara, parte-se para a ação."
      dodo = "assets/anemia.png"
      dede = "assets/vitam.png"
      didi = "assets/anemia2.png"
      trata = "TRATAMENTO"
      sobre = "SOBRE"
      break;
    case "desnutri":
      message = "A desnutrição é caracterizada pela deficiência de energia, proteína e outros nutrientes, resultando em alterações físicas, teciduais, funcionais e clínicas. Isso abrange tanto a falta de energia e proteínas quanto a carência de micronutrientes e outros nutrientes essenciais. A progressão da desnutrição pode envolver mudanças físicas, hormonais e hematológicas, além de complicações graves que podem levar à morte.";
      trat = "Na terapia nutricional para desnutrição, um aumento de 500 a 1000 kcal é recomendado. Na terapia enteral, começa-se com 20 kcal/h no primeiro dia, aumentando gradualmente para atender às necessidades diárias. A realimentação agressiva pode levar à Síndrome da Realimentação, uma condição potencialmente fatal de desequilíbrio ao ganhar peso. Na fase de reabilitação, administra-se 3 a 4mg/kg de peso/dia do mineral por via oral para evitar complicações, como o agravamento de infecções."
      dodo = "assets/desnutri.png"
      dede = "assets/desnutri2.png"
      didi = "assets/desnutri3.png"
      trata = "TRATAMENTO"
      sobre = "SOBRE"
      break;
    case "diabetes":
      message = "Diabetes mellitus tipo 2 é uma doença metabólica crônica caracterizada por valores elevados de glicose no sangue; a hiperglicemia. A doença se desenvolve pelo comprometimento progressivo da produção de insulina pelas células pancreáticas tipo beta e pela resistência a ação do hormônio em órgãos como fígado e músculo. "
      trat = "O tratamento da doença é de extrema importância, pois a hiperglicemia, a longo prazo, pode ocasionar complicações, principalmente cardiovasculares, renais, comprometimento neurológico e ocular. Para tratar a diabetes é necessário uso de medicamentos que auxiliam no controle da glicemia e ter um estilo de vida saudável, baseado na prática regular de exercícios físicos e alimentação balanceada. Outros pontos importantes são: sono adequado, reduzir estresse e ter atividades de lazer com frequência. É fundamental também a vigilância e controle intensivo de outros fatores como o colesterol e a pressão arterial."
      trata = "TRATAMENTO"
      sobre = "SOBRE"
      dodo = "assets/diabetes1.png"
      dede = "assets/diabetes2.png"
      didi = "assets/diabetes3.png"
    break;
    case "diarreia":
      message = "A diarreia é caracterizada pela frequente evacuação de fezes líquidas, geralmente três ou mais evacuações ao dia, acompanhada de perda excessiva de líquidos e eletrólitos, especialmente sódio e potássio."
      trat = "O tratamento nutricional tem como objetivo remover ou minimizar a causa, repor liquidos e eletrólitos e fornecer uma alimentação adequada. É indicado ofertar líquidos e eletrólitos suficientes para repor as perdas, normalmente leite e derivados devem ser evitados. Recomenda-se, ainda, aumentar o aporte de fibras, priorizando alimentos ricos em fibras solúveis, como aveia e cevada, e evitar alimentos fermentativos, como feijão, repolho e folhas em geral."
      trata = "TRATAMENTO"
      sobre = "SOBRE"
      dodo = "assets/diarreia1.png"
      dede = "assets/diarreia2.png"
      didi = "assets/diarreia3.png"   
       break;
    case "gastrite":
      message = "A gastrite é a inflamação da mucosa que reveste a parede do estômago, podendo ser provocada por infecção bacteriana, uso de medicamentos, consu- mo de bebida alcoólica, alimentação inadequada ou doença autoimune e tem como sintoma dor e/ou queimação na 'boca do estômago', perda de apetite, náuseas e vômitos."
      trat = "O tratamento da gastrite envolve cuidados com a alimentação, como fazer 5 a 6 refeições diárias, mastigar bem os alimentos e evitar comidas gordurosas e ricas em carboidratos simples. Também é importante evitar bebidas alcoólicas, refrigerantes, café, chás e condimentos. Prefira alimentos com menos gordura e opte por chás como erva doce, camomila, cidreira e hortelã. Evite líquidos durante as refeições, não deite ou faça exercícios imediatamente após comer, e evite alimentos em conserva. Não se automedique; busque orientação médica e consulte um nutricionista para uma dieta adequada."
      trata = "TRATAMENTO"
      sobre = "SOBRE"
      dodo = "assets/gastrite1.png"
      dede = "assets/gastrite2.png"
      didi = "assets/gastrite3.png"
    break;
    case "hiper":
      message = "Hipertensão (pressão alta) é uma doença democrática que acomete crianças, adultos e idosos, homens e mulheres de todas as classes sociais e condições financeiras. Popularmente conhecida como “pressão alta”, está relacionada com a força que o sangue faz contra as paredes das artérias para conseguir circular por todo o corpo. O estreitamento das artérias aumenta a necessidade de o coração bombear com mais força para impulsionar o sangue e recebê-lo de volta. Como consequência, a hipertensão dilata o coração e danifica as artérias."
      trat = "O objetivo do tratamento deve ser não deixar a pressão ultrapassar os valores de 12 por 8. Nos casos de hipertensão leve, com a mínima entre 9 e 10, tenta-se primeiro o tratamento não medicamentoso, que é muito importante e envolve mudanças nos hábitos de vida. A pessoa precisa praticar exercícios físicos, não exagerar no sal e na bebida alcoólica, controlar o estresse e o peso, levar vida saudável."
      trata = "TRATAMENTO"
      sobre = "SOBRE"
      dodo = "assets/hiper1.png"
      dede = "assets/hiper2.png"
      didi = "assets/hiper3.png"
    break;
    default:
      message = "Selecione uma doença para ver a recomendação.";
    
  }
  document.getElementById("recommendation-message").innerHTML = message;
  document.getElementById("tratament-message").innerHTML = trat;
  document.getElementById("recomendat").innerHTML = sobre;
  document.getElementById("tratam").innerHTML = trata;
  document.getElementById("imag").src = dodo;
  document.getElementById("imag2").src = dede;
  document.getElementById("imag3").src = didi;
  }

