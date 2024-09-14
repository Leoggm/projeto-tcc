/*Peso Estimado*/

document.getElementById("rcq-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    genero: formData.get("generor"),
    idade: parseInt(formData.get("idade-rcq")),
    cq: parseFloat(formData.get("cq")),
    cc: parseFloat(formData.get("cc")),
  };
  const resultado = data.cc / data.cq;

  let classificacao;
  if (data.genero === "Masculino") {
    if (data.idade >= 20 && data.idade <= 29) {
      if (resultado < 0.83) classificacao = "baixa", mensagi = "Seu índice de RQC indica um baixo risco de complicações cardiovasculares. Continue mantendo um estilo de vida saudável!";
      else if (resultado >= 0.83 && resultado <= 0.88) classificacao = "moderada", mensagi = "Seu índice de RQC sugere um risco moderado de complicações cardiovasculares. Considere ajustes na dieta e no exercício para melhorar sua saúde cardiovascular.";
      else if (resultado > 0.88 && resultado <= 0.94) classificacao = "alta", mensagi = "Seu índice de RQC indica um alto risco de complicações cardiovasculares. É importante consultar um profissional de saúde para avaliação e orientação adequada.";
      else classificacao = "muito alta", mensagi = "Seu índice de RQC mostra um risco muito alto de complicações cardiovasculares. Busque imediatamente aconselhamento médico para iniciar medidas preventivas e de tratamento.";
    } else if (data.idade >= 30 && data.idade <= 39) {
      if (resultado < 0.84) classificacao = "baixa", mensagi = "Seu índice de RQC indica um baixo risco de complicações cardiovasculares. Continue mantendo um estilo de vida saudável!";
      else if (resultado >= 0.84 && resultado <= 0.91) classificacao = "moderada", mensagi = "Seu índice de RQC sugere um risco moderado de complicações cardiovasculares. Considere ajustes na dieta e no exercício para melhorar sua saúde cardiovascular.";
      else if (resultado > 0.91 && resultado <= 0.96) classificacao = "alta", mensagi = "Seu índice de RQC indica um alto risco de complicações cardiovasculares. É importante consultar um profissional de saúde para avaliação e orientação adequada.";
      else classificacao = "muito alta", mensagi = "Seu índice de RQC mostra um risco muito alto de complicações cardiovasculares. Busque imediatamente aconselhamento médico para iniciar medidas preventivas e de tratamento.";
    } else if (data.idade >= 40 && data.idade <= 49) {
      if (resultado < 0.88) classificacao = "baixa", mensagi = "Seu índice de RQC indica um baixo risco de complicações cardiovasculares. Continue mantendo um estilo de vida saudável!";
      else if (resultado >= 0.88 && resultado <= 0.95) classificacao = "moderada", mensagi = "Seu índice de RQC sugere um risco moderado de complicações cardiovasculares. Considere ajustes na dieta e no exercício para melhorar sua saúde cardiovascular.";
      else if (resultado > 0.95 && resultado <= 1.00) classificacao = "alta", mensagi = "Seu índice de RQC indica um alto risco de complicações cardiovasculares. É importante consultar um profissional de saúde para avaliação e orientação adequada."; 
      else classificacao = "muito alta", mensagi = "Seu índice de RQC mostra um risco muito alto de complicações cardiovasculares. Busque imediatamente aconselhamento médico para iniciar medidas preventivas e de tratamento.";
    } else if (data.idade >= 50 && data.idade <= 59) {
      if (resultado < 0.90) classificacao = "baixa", mensagi = "Seu índice de RQC indica um baixo risco de complicações cardiovasculares. Continue mantendo um estilo de vida saudável!";
      else if (resultado >= 0.90 && resultado <= 0.96) classificacao = "moderada", mensagi = "Seu índice de RQC sugere um risco moderado de complicações cardiovasculares. Considere ajustes na dieta e no exercício para melhorar sua saúde cardiovascular.";
      else if (resultado > 0.96 && resultado <= 1.02) classificacao = "alta", mensagi = "Seu índice de RQC indica um alto risco de complicações cardiovasculares. É importante consultar um profissional de saúde para avaliação e orientação adequada."; 
      else classificacao = "muito alta", mensagi = "Seu índice de RQC mostra um risco muito alto de complicações cardiovasculares. Busque imediatamente aconselhamento médico para iniciar medidas preventivas e de tratamento.";
    } else if (data.idade >= 60 && data.idade <= 69) {
      if (resultado < 0.91) classificacao = "baixa", mensagi = "Seu índice de RQC indica um baixo risco de complicações cardiovasculares. Continue mantendo um estilo de vida saudável!";
      else if (resultado >= 0.91 && resultado <= 0.98) classificacao = "moderada", mensagi = "Seu índice de RQC sugere um risco moderado de complicações cardiovasculares. Considere ajustes na dieta e no exercício para melhorar sua saúde cardiovascular.";
      else if (resultado > 0.98 && resultado <= 1.03) classificacao = "alta", mensagi = "Seu índice de RQC indica um alto risco de complicações cardiovasculares. É importante consultar um profissional de saúde para avaliação e orientação adequada."; 
      else classificacao = "muito alta", mensagi = "Seu índice de RQC mostra um risco muito alto de complicações cardiovasculares. Busque imediatamente aconselhamento médico para iniciar medidas preventivas e de tratamento.";
    }
  } else if (data.genero === "Feminino") {
    if (data.idade >= 20 && data.idade <= 29) {
      if (resultado < 0.71) classificacao = "baixa", mensagi = "Seu índice de RQC indica um baixo risco de complicações cardiovasculares. Continue mantendo um estilo de vida saudável!";
      else if (resultado >= 0.71 && resultado <= 0.77) classificacao = "moderada", mensagi = "Seu índice de RQC sugere um risco moderado de complicações cardiovasculares. Considere ajustes na dieta e no exercício para melhorar sua saúde cardiovascular.";
      else if (resultado > 0.77 && resultado <= 0.82) classificacao = "alta", mensagi = "Seu índice de RQC indica um alto risco de complicações cardiovasculares. É importante consultar um profissional de saúde para avaliação e orientação adequada."; 
      else classificacao = "muito alta", mensagi = "Seu índice de RQC mostra um risco muito alto de complicações cardiovasculares. Busque imediatamente aconselhamento médico para iniciar medidas preventivas e de tratamento.";
    } else if (data.idade >= 30 && data.idade <= 39) {
      if (resultado < 0.72) classificacao = "baixa", mensagi = "Seu índice de RQC indica um baixo risco de complicações cardiovasculares. Continue mantendo um estilo de vida saudável!";
      else if (resultado >= 0.72 && resultado <= 0.78) classificacao = "moderada", mensagi = "Seu índice de RQC sugere um risco moderado de complicações cardiovasculares. Considere ajustes na dieta e no exercício para melhorar sua saúde cardiovascular.";
      else if (resultado > 0.78 && resultado <= 0.84) classificacao = "alta", mensagi = "Seu índice de RQC indica um alto risco de complicações cardiovasculares. É importante consultar um profissional de saúde para avaliação e orientação adequada."; 
      else classificacao = "muito alta", mensagi = "Seu índice de RQC mostra um risco muito alto de complicações cardiovasculares. Busque imediatamente aconselhamento médico para iniciar medidas preventivas e de tratamento.";
    } else if (data.idade >= 40 && data.idade <= 49) {
      if (resultado < 0.73) classificacao = "baixa", mensagi = "Seu índice de RQC indica um baixo risco de complicações cardiovasculares. Continue mantendo um estilo de vida saudável!";
      else if (resultado >= 0.73 && resultado <= 0.79) classificacao = "moderada", mensagi = "Seu índice de RQC sugere um risco moderado de complicações cardiovasculares. Considere ajustes na dieta e no exercício para melhorar sua saúde cardiovascular.";
      else if (resultado > 0.79 && resultado <= 0.87) classificacao = "alta", mensagi = "Seu índice de RQC indica um alto risco de complicações cardiovasculares. É importante consultar um profissional de saúde para avaliação e orientação adequada."; 
      else classificacao = "muito alta", mensagi = "Seu índice de RQC mostra um risco muito alto de complicações cardiovasculares. Busque imediatamente aconselhamento médico para iniciar medidas preventivas e de tratamento.";
    } else if (data.idade >= 50 && data.idade <= 59) {
      if (resultado < 0.74) classificacao = "baixa", mensagi = "Seu índice de RQC indica um baixo risco de complicações cardiovasculares. Continue mantendo um estilo de vida saudável!";
      else if (resultado >= 0.74 && resultado <= 0.81) classificacao = "moderada", mensagi = "Seu índice de RQC sugere um risco moderado de complicações cardiovasculares. Considere ajustes na dieta e no exercício para melhorar sua saúde cardiovascular.";
      else if (resultado > 0.81 && resultado <= 0.88) classificacao = "alta", mensagi = "Seu índice de RQC indica um alto risco de complicações cardiovasculares. É importante consultar um profissional de saúde para avaliação e orientação adequada."; 
      else classificacao = "muito alta", mensagi = "Seu índice de RQC mostra um risco muito alto de complicações cardiovasculares. Busque imediatamente aconselhamento médico para iniciar medidas preventivas e de tratamento.";
    } else if (data.idade >= 60 && data.idade <= 69) {
      if (resultado < 0.76) classificacao = "baixa", mensagi = "Seu índice de RQC indica um baixo risco de complicações cardiovasculares. Continue mantendo um estilo de vida saudável!";
      else if (resultado >= 0.76 && resultado <= 0.83) classificacao = "moderada", mensagi = "Seu índice de RQC sugere um risco moderado de complicações cardiovasculares. Considere ajustes na dieta e no exercício para melhorar sua saúde cardiovascular.";
      else if (resultado > 0.83 && resultado <= 0.91) classificacao = "alta", mensagi = "Seu índice de RQC indica um alto risco de complicações cardiovasculares. É importante consultar um profissional de saúde para avaliação e orientação adequada."; 
      else classificacao = "muito alta", mensagi = "Seu índice de RQC mostra um risco muito alto de complicações cardiovasculares. Busque imediatamente aconselhamento médico para iniciar medidas preventivas e de tratamento.";
    }
  }
  document.getElementById("recq-result").textContent = `Sua relação cintura-quadril é ${classificacao}`;
  document.getElementById("recq-messagi").textContent = `${mensagi}`
  console.log(resultado, classificacao)

  const open = document.getElementById("open");
  const modal_container = document.getElementById("modal_container");
  const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
});

/*IMC*/

document
  .getElementById("weight-height")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    
  let weight = document.getElementById("weight").value.replace(',', '.');
  let height = document.getElementById("height").value.replace(',', '.');

  weight = parseFloat(weight);
  height = parseFloat(height);

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

    const openAgeHeight = document.getElementById("open-weight-height");
    const modalContainerAgeHeight = document.getElementById("modal_container_weight-height");
    const closeAgeHeight = document.getElementById("close-weight-height");
    
    openAgeHeight.addEventListener("click", () => {
    modalContainerAgeHeight.classList.add("show");
});

   closeAgeHeight.addEventListener("click", () => {
   modalContainerAgeHeight.classList.remove("show");
});

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

const openTmb = document.getElementById("open-tmb");
const modalContainerTmb = document.getElementById("modal_container_tmb");
const closeTmb = document.getElementById("close-tmb");

openTmb.addEventListener("click", () => {
  modalContainerTmb.classList.add("show");
});

closeTmb.addEventListener("click", () => {
  modalContainerTmb.classList.remove("show");
});
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
    const targetSection = document.querySelector("#recomendada");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
document
  .querySelector(".mobile-menu a.nav-menu#bct4")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#recomendada");
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
      dodo = ""
      dede = ""
      didi = ""
      trata = ""
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
      trat = "Para tratar a desnutrição, é importante aumentar a ingestão de alimentos ricos em calorias, proteínas, vitaminas e minerais. Recomendações incluem consumir mais proteínas magras (como peixes, frango, ovos), carboidratos complexos (como grãos integrais), frutas, vegetais e gorduras saudáveis (como as encontradas em abacates e nozes). Consultar um nutricionista é fundamental para um plano personalizado."
      dodo = "assets/desnutri.png"
      dede = "assets/desnutri2.png"
      didi = "assets/desnutri3.png"
      trata = "TRATAMENTO"
      sobre = "SOBRE"
      break;
    case "diabetes":
      message = "Diabetes mellitus tipo 2 é uma doença metabólica crônica caracterizada por valores elevados de glicose no sangue; a hiperglicemia. A doença se desenvolve pelo comprometimento progressivo da produção de insulina pelas células pancreáticas tipo beta e pela resistência a ação do hormônio em órgãos como fígado e músculo. O tratamento da doença é de extrema importância, pois a hiperglicemia, a longo prazo, pode ocasionar complicações, principalmente cardiovasculares, renais, comprometimento neurológico e ocular."
      trat = "Para o tratamento da diabetes, recomenda-se evitar frituras e alimentos ricos em gordura saturada e trans; Alimentos ricos em sódio (sal); Doces, balas, bolos, sorvetes e produtos ricos em açúcar. A atividade física pode melhorar seus níveis de glicose, baixar a pressão, melhorar o fluxo sanguíneo e ajuda a manter o peso. Outros pontos importantes são: sono adequado, reduzir estresse e ter atividades de lazer com frequência."
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
      message = "Hipertensão (pressão alta) é uma doença não transmissível e está relacionada com a força que o sangue faz contra as paredes das artérias para conseguir circular por todo o corpo. O estreitamento das artérias aumenta a necessidade de o coração bombear com mais força para impulsionar o sangue e recebê-lo de volta. Como consequência, a hipertensão dilata o coração e danifica as artérias. Por esse motivo, modificações no estilo de vida são importantes para o tratamento, diminuição dos riscos e na prevenção da hipertensão."
      trat = "Consuma diariamente frutas, verduras, legumes e a quantidade de água adequada; prefira aves e peixes ao invés de carne vermelha. também é muito importante evitar tabagismo, bebidas alcoólicas, alimentos embutidos. Além disso, é muito importante Manter uma rotina de atividade física com orientação profissional."
      trata = "TRATAMENTO"
      sobre = "SOBRE"
      dodo = "assets/hiper1.png"
      dede = "assets/hiper2.png"
      didi = "assets/hiper3.png"
    break;
    case "hipo":
      message = "O hipotireoidismo é um problema na tireoide (glândula que regula a função de órgãos importantes como o coração, o cérebro, o fígado e os rins), que se caracteriza pela queda na produção dos hormônios T3 (triiodotironina) e T4 (tiroxina). É mais comum em mulheres, mas pode acometer qualquer pessoa. Isso pode levar a uma variedade de sintomas, incluindo fadiga, ganho de peso, sensação de frio, pele seca e constipação."
      trat = "É fundamental manter uma dieta balanceada e saudável, priorizando os alimentos fonte de fibras, antioxidantes e minerais, como iodo, selênio, zinco e cobre, incluindo: Alimentos fonte de iodo, como algas marinhas, sal iodado, frutos do mar, leite e derivados."
      trata = "TRATAMENTO"
      sobre = "SOBRE"
      dodo = "assets/tireoide1.png"
      dede = "assets/tireoide3.png"
      didi = "assets/tireoide2.png"
      break;
    case "cardio":
      message = "As doenças cardiovasculares abrangem uma série de condições que afetam o coração e os vasos sanguíneos. Ataques cardíacos e acidentes vasculares cerebrais são frequentemente causados por bloqueios que impedem o fluxo sanguíneo para o coração ou cérebro, sendo o acúmulo de depósitos de gordura nas paredes dos vasos sanguíneos uma das principais razões para isso. Fatores de risco incluem tabagismo, dieta inadequada, obesidade, sedentarismo, uso nocivo do álcool, hipertensão, diabetes e hiperlipidemia."
      trat = "É muito importante estarmos cientes dos riscos e complicações relacionados às doenças cardiovasculares. Manter um estilo de vida saudável, com a prática regular de exercícios físicos, e uma alimentação balanceada, evitando frituras, industrializados, doces em excessos e  o consumo diário de verduras, legumes e frutas podem contribuir para uma alimentação mais saudável. Além disso, é fundamental realizar check- ups médicos regularmente para monitorar a saúde do coração e dos vasos sanguíneos."
      trata = "TRATAMENTO"
      sobre = "SOBRE"
      dodo = "assets/cardio1.png"
      dede = "assets/cardio2.png"
      didi = "assets/cardio3.png"
      break;
    case "obesi":
      message = "A obesidade é definida como o acúmulo excessivo ou anormal da gordura ou tecido adiposo no corpo, é considerada fator de risco para uma série de outros problemas, como doenças cardiovasculares, diabetes e hipertensão. Uma dieta desbalanceada e o sedentarismo estão relacionados com o desenvolvimento dessa doença. Infelizmente, a obesidade está aumentando cada vez mais e permeando todas as idades, se tornando uma verdadeira crise de saúde em todo o mundo. Para isso, é necessário mais cuidado e modificações no estilo de vida, para previnir ou tratar o desenvolvimento da obesidade."
      trat = "Mudar hábitos alimentares é fundamental para perder e manter seu peso, por isso, é recomendado o consumo diário de frutas, verduras e legumes; evite alimentos e bebidas que tenham açúcar, alimentos ultraprocessado e pratique regularmente atividade física, com orientação de um profissional. É muito importante também entender os fatores que te trouxeram até seu estado atual e buscar ajuda de outros profissionais, como médicos e psicólogos."
      trata = "TRATAMENTO"
      sobre = "SOBRE"
      dodo = "assets/obesidade1.png"
      dede = "assets/obesidade2.png"
      didi = "assets/obesidade3.png"
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
  