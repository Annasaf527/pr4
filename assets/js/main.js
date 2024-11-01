'use strict';
// let i = 1;
// while(i<=3){
//     alert(i);
//     i++;
// }

// let i = 3;
// while(i){
//     alert(i);
//     i--;
// }

// let i = 1;
// do{
//     alert(i);
//     i++;
//     while(i<=3)
// }

// for(let i = 1; i<=3;i++){
//     alert(i);
// }

// let sum = 0;

// while(true){
//     let num = +prompt('Введите число'); 
//     if(!num) break;
//     sum += num;
// }
// alert( `Сумма равна ${sum}`);

// showMessage('пока');
// function showMessage(message){
//     alert(message)
// }
// showMessage('Hello');
// showMessage('пока');

// let massage = 'Собщение';
// function showMessage(){
//     alert(message)
// }
// showMessage();

// function getMasage(author, text){
//     alert(`${author}: ${text}`)
// }
// getMasage('Мария', 'привет как дела?')
// getMasage('Павел', 'привет нормально')
// getMasage('Никита')
// function sum(num1, num2){
//     let sum = num1+num2;
// }
// // alert(sum(4,6));
// let result1 = sum(100,50);
// let result2 = sum (60,60);
// alert(result1-result2)

let sum = (num1,num2) => num1+num2;
sum(4,7);
let sum = (num1,num2) => {
   let result = num1+num2;
   return result;
}