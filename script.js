let magicalNumber = 15;
let number = prompt("Введите число", "25");

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const game = function (magicalNumber) {
  const ask = function () {
    let number = prompt("Введите число");
    if (isNumber(number) && number != null) {
      return number;
    } else {
      ask();
    }
  };

  const isWin = function (number) {
    if (number == magicalNumber) {
      let answer = confirm("Поздравляю, Вы угадали!!!, Хотите сыграть еще?");
      if (answer == true) {
        isWin(ask());
      }
    } else if (number > magicalNumber) {
      alert("Загаданное число меньше");
      isWin(ask());
    } else if (number < magicalNumber) {
      alert("Загаданное число больше");
      isWin(ask());
    }
  };

  isWin(number);
};

game(magicalNumber);
