const arr = [1, 1, 1, 1, 1];
let result = false;
for (let i = 0; i<arr.length; i++){
  if (arr[i] === arr[0]){
    result = true;
  }
  else {
    result = false;
    break
  }
};
console.log(result);
