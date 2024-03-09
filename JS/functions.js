/*
? Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника.
? Сторони прямокутника будуть переденні до параметрів sideA та sideB.
*/
// function getrectArea(sideA, sideB) {
//     console.log(sideA * sideB);
// }

// // getrectArea(10, 15);


/*
 ? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 ? маси тіла людини. Для цього необхідно розділити вагу на
 ? квадрат висоти.
 ?
 ? Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 ? бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 ? частини може бути кома.
 ?
 ? Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */
// function calcBMI(weight, height) {
    // weight = Number(prompt('Enter your weight').replace(',', '.'));
    // height = Number(prompt('Enter your height').replace(',', '.'));

    // const result = weight / (height ** 2);
    // return result.toFixed(1);
// }
// console.log(calcBMI());




// Напишіть функцію checkUserChoice, яка приймає один параметр choice - це рядок, 
// що представляє вибір користувача.Функція повинна перевірити вибір користувача і 
// повернути рядок з повідомленням про результат. 
// Наприклад, якщо choice рівний "rock", "paper" або "scissors", поверніть рядок "Valid choice". 
// В іншому випадку поверніть рядок "Invalid choice".

// function checkUserChoice(choice) {
//     if (choice === 'rock' || choice === 'scissors' || choice === 'paper') {
//         return `Valid choice`;
//     } else {
//         return 'Invalid choice';
//     }
// }
// console.log(checkUserChoice('car'));

// Напишіть функцію compareNumbers, яка приймає два параметри a і b. 
// Функція повинна порівняти ці числа і повернути одне з трьох повідомлень: "a > b", "a < b" або "a === b".
// Не забудьте перевірити типи даних, щоб уникнути непередбачуваних результатів порівняння.
// Спробуйте створити функції для цих задач і перевірити їх коректність. 
// Це допоможе вам отримати практику з умовними операторами та роботою зі строками та числами в JavaScript.


// function compareNumbers(a, b) {
//     if (a > b) {
//         return 'a > b';
//     } else if (a < b) {
//         return 'a < b';
//     } else { 
//         return 'a === b';
//     }
// }

// console.log(compareNumbers(21, 21));