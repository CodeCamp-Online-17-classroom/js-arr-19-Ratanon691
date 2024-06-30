function checkEmptyObj(obj){
  if(typeof obj !== `object` || obj == null || Array.isArray(obj)){
  return false
  }
  return Object.keys(obj).length == 0
}

console.log(checkEmptyObj({})); // true
console.log(checkEmptyObj({ name: "John", age: 30 })); // false
console.log(checkEmptyObj(null)); // false
console.log(checkEmptyObj([])); // false
console.log(checkEmptyObj(123)); // false
