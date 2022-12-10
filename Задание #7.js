/* Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. */

const arr = [0, 1, 3, 5, 6, 8];
let zerosNumbers = 0;
let evenNumbers = 0;
let oddNumbers = 0;
for (let i = 0; i < arr.length; i++){
  if (typeof arr[i] === "number"){
    if (arr[i] === 0){
      zerosNumbers += 1;
    }
    else if ((arr[i] % 2) === 0) {
      evenNumbers += 1;
    }
    else{
      oddNumbers += 1;
    }
  }
}
console.log("Количество нулей = " + zerosNumbers,"Количество четных чисел = " + evenNumbers,"Количество нечетных чисел = " + oddNumbers);