const calc = document.forms["calc"];

const buttons = document.querySelectorAll(".button").forEach(function (button) {
  button.addEventListener("click", function () {
    const buttonText = this.innerText;

    if (buttonText === "C") {
      calc.txt.value = "";
    } else if (buttonText === "⌫") {
      calc.txt.value = calc.txt.value.slice(0, -1);
    } else if (buttonText === "=") {
      try {
        calc.txt.value = eval(calc.txt.value);
      } catch {
        calc.txt.value = "Error";
      }
    }
  });
});

document
  .querySelectorAll(".calculator span:not(.clear):not(.equal):not(.delete)")
  .forEach(function (button) {
    button.addEventListener("click", function () {
      if (calc.txt.value === "Error" || calc.txt.value === "undefined" || calc.txt.value === "0") {
        calc.txt.value = "";
      }
      calc.txt.value += this.innerText;
    });
  });
