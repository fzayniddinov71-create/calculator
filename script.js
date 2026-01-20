function calculate(operator) {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const resultText = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultText.textContent = "❌ Ikkala sonni kiriting";
    resultText.style.color = "#ff6b6b";
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultText.textContent = "❌ 0 ga bo‘lib bo‘lmaydi";
        resultText.style.color = "#ff6b6b";
        return;
      }
      result = num1 / num2;
      break;
  }

  resultText.textContent = ✅ Natija: ${result.toFixed(2)};
  resultText.style.color = "#7CFC98";
}
