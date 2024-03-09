/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/

// const number = Number(prompt('Enter any number'));
// if (number === 10) {
//     alert('Correct')
// } else {
//     alert('Not correct')
// }

// const number = Number(prompt('Enter any number'));
// number === 10 ? alert('Correct') : alert('Not correct');


/*
? Перевірте чи є гроші на балансі, якщо є то виведіть до консолі 'Positive', інакше 'Negative'.
*/

// function checkBalance(cash) {
//  const result = cash > 0 ? 'Positive' : 'Negative';
//     return result;
// }
// console.log(checkBalance(200));

/*
? В залежності від значення в змінній login, потрібно формувати відповідне повідомлення.
? Співробітник - Привіт
? Директор - Вітаю
? '' - Немає логіну
? В інших випадках повідомлення має бути порожнім.
*/
// const user = 2;

// switch (user) {
//     case 'Співробітник':
//         alert('Привіт');
//         break;
//     case 'Директор':
//         alert('Вітаю');
//         break;
//     case '':
//         alert('Немає логіну');
//         break;
//     default:
//         alert('');
    
// }

// const user = 'Співробітник';
// let message;

// if (user === 'Співробітник') {
//     message = 'Привіт';
// } else if (user === 'Директор') {
//    message = 'Вітаю';
// } else if (user === '') {
//     message = 'Немає логіну';
// } else {
//     message = '';
   
// }
// console.log(message);

/*
?  Перепишіть if..else за допомогою декількох тернарних операторів.
*/
// const user = 'Співробітник';
// let message = user === 'Співробітник' ? 'Привіт' : user === 'Директор' ? 'Вітаю' : user === '' ? 'Немає логіну' : '';

// console.log(message);

// Напишіть функцію isEven(number), яка приймає число і повертає рядок "Even", якщо число парне, і "Odd", якщо число непарне. 
// Використайте тернарний оператор.

// function isEven(number) {
//     let message = number % 2 ? 'odd' : 'even';
//     return message;
// }
// ;
// console.log(isEven(7));

// Напишіть функцію isPositive(number), яка приймає число і повертає рядок "Positive", 
// якщо число додатнє, і "Negative", якщо число від'ємне або нуль. Використайте тернарний оператор.

// function isPositive(number) {

//     let message = number >= 0 ? 'positive' : 'negative';
//     return message;
// }
// console.log(isPositive(-4));


// Напишіть функцію getGrade(score), яка приймає оцінку студента (від 0 до 100)
//  і повертає рядок з його оцінкою(A, B, C, D або F), використовуючи тернарний оператор.
// 0 - 20 = F
// 21 - 40 = D
// 41 - 60 = C
// 61 - 80 = B
// 81 - 100 = A

// function getGrade() {
//     const score = Number(prompt('Enter your score'));
//     if (score < 20) {
//         return 'F';
//     } else if (score >= 20 && score < 40) {
//         return 'D';
//     } else if (score >= 40 && score < 60) {
//         return 'C';
//     } else if (score >= 60 && score < 80) {
//         return 'B';
//     } else { return 'A' }
    
// }

// console.log(getGrade());



