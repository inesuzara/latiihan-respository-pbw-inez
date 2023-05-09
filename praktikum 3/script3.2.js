const calculate = (operator) => {
      const number1 = parseFloat(document.getElementById("number1").value);
      const number2 = parseFloat(document.getElementById("number2").value);
      let result;

      switch (operator) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
        case '*':
          result = number1 * number2;
          break;
        case '/':
          result = number1 / number2;
          break;
        case '%':
          result = number1 % number2;
          break;
        default:
          break;
      }

      document.getElementById("result").value = result;
    }