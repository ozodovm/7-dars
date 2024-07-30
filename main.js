// 1.1 - misol
// let person = {
//     name:"Abdulloh",
//     age:19,
//     job:"Logistic company",
//     interest:"game",
//     hobby:"sleep",
//     number:"+998944683325",
//     username:"AU",
// }
// for (const [key, value] of Object.entries(person)) {
//     console.log(`${key} - ${value}`);
//   }

// 1.2 - misol
// const person1 = {
//     name:"Abdulloh",
//     age:19,
// }
// const person2 = {
//     hobby:"Volleybol",
//     interest:"Sleep",
// }
// const obj = Object.assign({}, person1, person2);
// console.log(obj);

// 1.3 - misol
// let arr = [1,2,3,4,5]
// arr[arr.length - 1] = arr.slice(-1)[0] + 1;
// console.log(arr);

// 1.4 - misol
// let size = Number(prompt("Arrayning sizeni kiriting"));
// let arr = new Array(size);

// for (let i = 0; i < size; i++) {
//   arr[i] = Number(prompt(`Arrayning ${i + 1}-elementini kiriting`));
// }
// function processArray(arr) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//       let num = arr[i];
//       if (num % 2 === 0) { 
//         newArray.unshift(num);
//       } else { 
//         newArray.push(num); 
//       }
//     }
//     return newArray;
//   }
// const processedArray = processArray(arr);
// console.log("Qayta ishlangan array:", processedArray);

// 1.5- misol
// const array = [1, 2, 3, 4, 5];
// function swapFirstAndLast(arr) {
//     if (arr.length < 2) {
//       return arr; 
//     }
//     let firstElement = arr[0];
//     let lastElement = arr[arr.length - 1];
//     arr[0] = lastElement;
//     arr[arr.length - 1] = firstElement;
//     return arr;
//   }
//   const updatedArray = swapFirstAndLast(array);
//   console.log(updatedArray); 
  
// 1.6- misol
// function getWords(count, arrWords) {
//     if (count >= 6) {
//       return arrWords;
//     }
//     let word = prompt(`So'z ${count + 1}-ni kiriting:`);
//     arrWords.push(word);
//     return getWords(count + 1, arrWords);
//   }
//   const arrWords = getWords(0, []);
//   console.log("Kiritilgan so'zlar:", arrWords);
  
// 1.7 - misol
// let languages = ["Java", "JavaScript", "Python"];
// let answersArr = [];

// for (let i = 0; i < languages.length; i++) {
//   let answer = prompt(`${languages[i]} qachon yaratilgan?`);
//   answersArr.push(`${languages[i]}: ${answer}`);
// }
// console.log(answersArr);

//---------------------------------------------------------------

// 2.1- misol
// tog'risi misolga uncha tushunmadm
// let str = prompt("Ixtiyoriy string kiriting:");
// let arr = [str]; 
// console.log(arr); 

// 2.2 - misol
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [3, 4, 5, 6, 7];
// let common = [];
// for (let i = 0; i < array1.length; i++) {
//   if (array2.includes(array1[i])) {
//     common.push(array1[i]);
//   }
// }
// array1.unshift(...common);
// console.log(array1); 

// 2.3 - misol
// let obj = {
//     name: "John",
//     age: "30",
//     job: "Mechanic",
//     study: "none",
//     travel: "US"
//   };
//   let keysArray = Object.keys(obj); 
//   let length = keysArray.length; 
//   console.log(keysArray); 
//   console.log(length);

// 2.4 - misol
// function sumNumbers() {
//     let sum = 0;
//     for (let i = 0; i < 4; i++) {
//       let number = Number(prompt(`Sonni kiriting (${i + 1}/4):`));
//       sum += number;
//     }
//     return sum;
//   }
//   let totalSum = sumNumbers();
//   console.log("Kiritilgan sonlar yig'indisi:", totalSum);
  
// 2.5 - misol
// let obj1 = {
//     name: "Abdulloh"
//   };
// let obj2 = {
//     age: 19
//   };
//   let mergedObject = { ...obj1, ...obj2 }; 
//   let valuesArray = Object.values(mergedObject); 
//   console.log(valuesArray);
  

