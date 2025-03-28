// Pegando os elementos do HTML que não mudam
const calculateIMC = document.getElementById("calculateIMC");
const displayContent = document.getElementById("displayContent");
const resultText = document.getElementById("resultText");
const resultMessage = document.getElementById("resultMessage");

// Minha função para calcular o IMC ao clicar no botão de calcular.
const newCalculate = () => {
  // Pegando os valores do input dentro da função
  const name = document.getElementById("inputName").value.trim();
  const weight = parseFloat(document.getElementById("inputPeso").value);
  const height = parseFloat(document.getElementById("inputAltura").value);

  // Verificando se os campos estão vazios
  if (!name || isNaN(weight) || isNaN(height))
    return alert("Insira corretamente os dados!");

  // Calculando o IMC
  const finalCalculate = weight / (height * height);
  //console.log(finalCalculate);

  // Valores do IMC
  if (finalCalculate <= 18.5) {
    resultText.innerHTML = `${name}, seu IMC é ${finalCalculate.toFixed(
      2
    )}. Você está abaixo do peso.`;
    resultMessage.innerHTML = "Considere consultar um médico para orientações.";
  } else if (finalCalculate <= 24.9) {
    resultText.innerHTML = `${name}, seu IMC é ${finalCalculate.toFixed(
      2
    )}. Você está com peso normal.`;
    resultMessage.innerHTML = "Parabéns! Mantenha um estilo de vida saudável.";
  } else if (finalCalculate <= 29.9) {
    resultText.innerHTML = `${name}, seu IMC é ${finalCalculate.toFixed(
      2
    )}. Você está com sobrepeso.`;
    resultMessage.innerHTML =
      "Tente adotar hábitos mais saudáveis para perder peso.";
  } else if (finalCalculate <= 34.9) {
    resultText.innerHTML = `${name}, seu IMC é ${finalCalculate.toFixed(
      2
    )}. Você tem obesidade grau 1.`;
    resultMessage.innerHTML =
      "Consulte um médico para obter ajuda no controle de peso.";
  } else if (finalCalculate <= 39.9) {
    resultText.innerHTML = `${name}, seu IMC é ${finalCalculate.toFixed(
      2
    )}. Você tem obesidade grau 2.`;
    resultMessage.innerHTML = "É importante procurar orientação médica.";
  } else {
    resultText.innerHTML = `${name}, seu IMC é ${finalCalculate.toFixed(
      2
    )}. Você tem obesidade grau 3.`;
    resultMessage.innerHTML =
      "Procure um médico imediatamente para iniciar um plano de tratamento.";
  }

  // Exibindo o resultado
  displayContent.hidden = false;
};

calculateIMC.addEventListener("click", newCalculate);
