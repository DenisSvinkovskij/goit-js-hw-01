let input;
let total = 0;

while (input !== null) {
  input = prompt();
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  input = input;
  total += Number(input);
}
alert(`Общая сумма чисел равна ${total}`);
