function sortString(str) {
  str = str.toLowerCase().split("");
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] < str[j]) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
    }
  }

  console.log(str);
}

const name = "JaVa";
sortString(name);


/*
let sortString=(str) => {
    return str.split('').sort().join('');
}

console.log("Sorting in alphabetical order :  ",sortString("xyabpqzcr"));
*/