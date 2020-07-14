function add(first, second) {
  return first + second;
}
function subtract(first, second) {
  return first - second;
}
function multiply(first, second) {
  return first * second;
}
function divide(first, second) {
  if (second == 0) {
    return "Can't devide by zero";
  } else {
    return first / second;
  }
}
function operate(first, operator, second) {
  if (operator == "+") {
    return add(first, second);
  } else if (operator == "-") {
    return subtract(first, second);
  } else if (operator == "*") {
    return multiply(first, second);
  } else if (operator == "/") {
    return divide(first, second);
  }
}
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const plus = document.querySelector("#add");
const minus = document.querySelector("#substract");
const times = document.querySelector("#multiply");
const by = document.querySelector("#divide");
const equal = document.querySelector("#equal");

const display = document.querySelector(".display");

let displayValue = 0;
display.textContent = displayValue;

one.addEventListener("click", function (e) {
  changeDisplay(1);
});
two.addEventListener("click", function (e) {
  changeDisplay(2);
});
three.addEventListener("click", function (e) {
  changeDisplay(3);
});
four.addEventListener("click", function (e) {
  changeDisplay(4);
});
five.addEventListener("click", function (e) {
  changeDisplay(5);
});
six.addEventListener("click", function (e) {
  changeDisplay(6);
});
seven.addEventListener("click", function (e) {
  changeDisplay(7);
});
eight.addEventListener("click", function (e) {
  changeDisplay(8);
});
nine.addEventListener("click", function (e) {
  changeDisplay(9);
});
zero.addEventListener("click", function (e) {
  changeDisplay(0);
});

clear.addEventListener("click", function (e) {
  displayValue = 0;
  display.textContent = displayValue;
});

function changeDisplay(number) {
  if (displayValue == 0) {
    displayValue = number;
  } else {
    displayValue = displayValue + `${number}`;
  }
  display.textContent = displayValue;
}
window.addEventListener("keydown", function (e) {
  if (`${e.keyCode}` >= 28 && `${e.keyCode}` <= 57) {
    changeDisplay(`${e.key}`);
  }
});

plus.addEventListener("click", function (e) {
  calculate("+");
});
minus.addEventListener("click", function (e) {
  calculate("-");
});
times.addEventListener("click", function (e) {
  calculate("*");
});
by.addEventListener("click", function (e) {
  calculate("/");
});

let operator = undefined;

function calculate(sign) {
  if (operator !== undefined) {
    itEquals();
  }
  first = displayValue;
  displayValue = 0;
  operator = sign;
}

equal.addEventListener("click", function (e) {
  itEquals();
});
function itEquals() {
  if (first == undefined || operator == undefined) {
    return;
  } else {
    displayValue = `${operate(
      parseInt(first),
      operator,
      parseInt(displayValue)
    )}`;
    display.textContent = displayValue;
    first = undefined;
    operator = undefined;
  }
}
