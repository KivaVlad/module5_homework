let value = +prompt("Введите число");

if(typeof(value) === 'number'){
  if(isNaN(value)){
    console.log('Упс, кажется вы ошиблись');
  } else if((value % 2) === 0){
    console.log('Четное число')
  } else{
    console.log('Нечетное число')
  }
};
