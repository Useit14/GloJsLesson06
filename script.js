let magicalNumber = Math.round(Math.random() * 100);

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const game = function (magicalNumber) {
  const gameOver = function () {
    alert("Игра окончена");
  };

  const getRandomNumber = function () {
    return Math.round(Math.random() * 100);
  };

  const ask = function () {
    let number = prompt("Введите число", "25");
    if (number == null) {
      return null;
    } else if (isNumber(number)) {
      return number;
    } else {
      return ask();
    }
  };

  const isWin = function (number) {
    if (number == magicalNumber) {
      let answer = confirm("Поздравляю, Вы угадали!!!, Хотите сыграть еще?");
      if (answer == true) {
        game(getRandomNumber());
      } else {
        gameOver();
      }
    } else if (number > magicalNumber) {
      alert("Загаданное число меньше");
      let number = ask();
      if (number == null) {
        gameOver();
      } else {
        isWin(number);
      }
    } else if (number < magicalNumber) {
      alert("Загаданное число больше");
      let number = ask();
      if (number == null) {
        gameOver();
      } else {
        isWin(number);
      }
    }
  };

  let number = ask();
  if (number == null) {
    gameOver();
  } else {
    isWin(number);
  }
};

game(magicalNumber);
