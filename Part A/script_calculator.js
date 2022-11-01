// let addButton = document.getElementById("btn_add");
// let subtractButton = document.getElementById("btn_subtract");
// let multiplyButton = document.getElementById("btn_multiply");
// let divideButton = document.getElementById("btn_divide");
// console.log(resultTxt);

// addButton.addEventListener("click", () => {
//   calculate("+");
// });

// subtractButton.addEventListener("click", () => {
//   calculate("-");
// });

// multiplyButton.addEventListener("click", () => {
//   calculate("*");
// });

// divideButton.addEventListener("click", () => {
//   calculate("/");
// });

$(document).ready(function () {
  let num1;
  let num2;
  let resultTxt;

  $("#btn_add").click(function () {
    calculate("+");
  });

  $("#btn_subtract").click(function () {
    calculate("-");
  });

  $("#btn_multiply").click(function () {
    calculate("*");
  });

  $("#btn_divide").click(function () {
    calculate("/");
  });

  $('#name').html(localStorage.getItem("name"));

  const calculate = (operator) => {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    resultTxt = document.getElementById("result");

    // VALIDATION
    if (!isNumber(num1) || !isNumber(num2)) {
      if (!isNumber(num1)) {
        $("#num1check").show();
        $("#num1check").html("Please enter a number");
        $("#num1check").focus();
        $("#num1check").css("color", "red");
      } else {
        $("#num1check").hide();
      }

      if (!isNumber(num2)) {
        $("#num2check").show();
        $("#num2check").html("Please enter a number");
        $("#num2check").focus();
        $("#num2check").css("color", "red");
      } else {
        $("#num2check").hide();
      }

      resultTxt.value = "";

      return;
    } else {
      $("#num1check").hide();
      $("#num2check").hide();
    }

    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);

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
        result = num1 / num2;
        break;
      default:
        break;
    }

    resultTxt.value = result;
  };

  function isNumber(str) {
    return /^-?\d+$/.test(str);
  }
});
