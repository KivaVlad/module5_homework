/* Задание 3.
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

function reverseString(str) {
    console.log(str.split("").reverse().join(""));
  };
  
reverseString("Hello");