// node reverseStr.js
function reverseString(str) {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
    
  }
  return temp;
}

const result = reverseString("Manju");
console.log("Reverse of String is :  ", result);


const str2="manju";

let output=str2.split('').reverse().join('');

console.log(output);