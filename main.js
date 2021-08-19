// Exercise 1
// const listShop = [];
// let btn = document.getElementById("btn");
// let theInput = document.getElementById("theInput");

// btn.addEventListener("click", function () {
//   for (let i = 0; i < listShop.length; i++) {
//     if (listShop[i] == theInput.value) {
//       listShop.push(theInput.value);
//       console.log(listShop);
//     }
//   }
// });
// console.log(listShop);

// Exercise 2
// let btn1Result = document.getElementById("btn1");

// function sum(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// btn1Result.addEventListener("click", function () {
//   return sum(1, 4);
// });

// let number1 = document.getElementById("number1");
// let number2 = document.getElementById("number2");
// let result = document.getElementById("result");
// let allSum = document.getElementById("allSum");
// btn1Result.addEventListener("click", function () {
//   let sum = number1 + number2;
//   result.innerText = sum;
//   return result;
// });

// function sumOfNumber(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// console.log(sumOfNumber(number1, number2));

// Exercise 3

// let theBtn = document.getElementById("forRandom");
// let theRandomofNumber = document.getElementById("theRandomNumber");

// function rendomNumber() {
//   theRandomofNumber.innerText = Math.random()*40;
//   return theRandomofNumber;
// }
// Exercise 4
// let arrayNumber = [];
// let myInput = document.getElementById("myInput");
// let myBtn = document.getElementById("myBtn");
// myBtn.onclick = function () {
//   arrayNumber.push(myInput.value);
//   console.log(arrayNumber);
// };
// Exercise 5
// let h1 = document.getElementById("h1");
// let btn = document.getElementById("btn");
// let day = new Date()
// btn.addEventListener("click", function () {
//   h1.innerHTML = day;
//   h1.innerHTML = day.getMonth()+1;

// });
// Exercise 6
// let btn = document.getElementById("btn");
// let par = document.getElementById("par");
// let hours = new Date();

// btn.addEventListener("click", function () {
//   par.innerText =
//     hours.getHours() + ":" + hours.getMinutes() + ":" + hours.getSeconds();
// });
// Exercise 7

// let btn = document.getElementById("btn");
// let par = document.getElementById("par");
// let date = new Date();
// let inputUser = document.getElementById("inputUser");

// btn.onclick = function bothYear() {
//   par.innerHTML = date.getFullYear() - inputUser.value;
// };

// Exercise 8
// let myArray = [15, 18, 15, 12];
// let btn = document.getElementById("btn");
// let par = document.getElementById("par");
// let inPut = document.getElementById("inPut");
// btn.onclick = function findSimilar() {
//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] == inPut.value) {
//       par.innerText = `found "${myArray[i]}" in my array`;
//       break;
//     }
//     par.innerText = "not found";
//   }
// };

// Exercise 9
// let inputUser = document.getElementById("inputUser");
// let par1 = document.getElementById("par1");
// let par2 = document.getElementById("par2");
// let botn = document.getElementById("btn");
// let space = " ";

// botn.onclick = function () {
//   par1.innerText = inputUser.value.substr(0, space);
//   par2.innerText = inputUser.value.substr(space);
// };

// Exercise 10

// let inp1 = document.getElementById("inp1");
// let inp2 = document.getElementById("inp2");
// let btn = document.getElementById("btn");
// let par = document.getElementById("par");

// btn.onclick = function btnFun() {
//   if (inp1.value.length > inp2.value.length) {
//     par.innerText = `the "${inp1.value}" is long`;
//   } else if (inp1.value.length < inp2.value.length){
//     par.innerText = `the "${inp2.value}" is long`;

//   }
// };

// Exercise 12
// let inputFullName = document.getElementById("inputFullName");
// let inputEmail = document.getElementById("inputEmail");
// let inputAge = document.getElementById("inputAge");
// let btun = document.getElementById("btun");
// const person = [{}];
// btun.onclick = function () {
//   person.push([
//     {
//       fullName: inputFullName.value,
//       email: inputEmail.value,
//       age: inputAge.value,
//     },
//   ]);
//   console.log(person);
// };

// console.log(person);
