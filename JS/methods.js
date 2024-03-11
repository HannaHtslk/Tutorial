// Отримати перші N символів рядка:
// Напишіть функцію, яка приймає рядок та ціле число N і повертає новий рядок, який містить перші N символів вихідного рядка.

// function getSymbols(string, number) {
//     const newString = string.slice(0, number);
//     return newString;
// }

// console.log(getSymbols('Bahamas', 3));

// Отримати підрядок між двома позиціями:
// Напишіть функцію, яка приймає рядок та два цілих числа, що представляють індекси початку та кінця підрядка, 
// і повертає новий рядок, який містить підрядок між цими індексами.

// function getSub(string, num1, num2) {
//      const subString = string.slice(num1, num2);
//     return subString;
// }

// console.log(getSub('Prosopagnosia', 3, 10));

// Функція checkCase(str, mode) має перевіряти та повертати рядок str в певному регістрі в залежності від параметра mode:

// Якщо mode дорівнює "upper", то функція повертає копію рядка str у верхньому регістрі.
// В іншому випадку, функція повертає копію рядка str у нижньому регістрі.

// function checkCase(str, mode) {
//     if (mode === 'upper') {
//         return str.toUpperCase();
//     } else {
//         return str.toLowerCase();
//     }
// }

// console.log(checkCase('GREAT NEws', 'lower'));


// Функція trimWhitespace(str, mode) має обрізати пробіли з початку і кінця рядка str в залежності від параметра mode:

// Якщо mode дорівнює "trim", то функція повертає копію рядка str без пробілів на початку і в кінці.
// У всіх інших випадках, функція повертає рядок str без змін.

// function trimWhitespace(str, mode) {
//     if (mode === 'trim') {
//         return str.trim();
//     } else { 
//         return str;
//     }
// }

// console.log(trimWhitespace(' Blueberry    ', 'trim'));

// Функція checkForSubstring(mainString, subString) отримує два параметри:

// mainString - рядок, який містить основний текст.
// subString - рядок, який представляє собою підрядок для перевірки його входження в основний текст.
// Ця функція повертає значення true або false в залежності від того, чи міститься рядок subString у рядку mainString.

// Умови задачі:

// Перевірити, чи міститься рядок subString у рядку mainString.
// Перед порівнянням рядки subString та mainString перетворити їх у однаковий регістр символів.
// Якщо subString міститься у mainString, повернути значення true.
// Якщо subString не міститься у mainString, повернути значення false.

// function checkForSubstring(mainString, subString) {
//     const subStringNorm = subString.toLowerCase();
//    const mainStringNorm = mainString.toLowerCase();
//     const hasSub = mainStringNorm.includes(subStringNorm);
//     if (hasSub === false) {
//         return 'false';
//     } else { return 'true'; }
// }

// console.log(checkForSubstring('Prosopagnosia2020', 'blabla'));

// Функція checkEmailDomain(email, domain) приймає два параметри:

// email - рядок, що містить електронну адресу користувача.
// domain - рядок, що містить домен, який потрібно перевірити.
// Доповни код функції так, щоб:

// Якщо домен електронної адреси email збігається з доменом, зазначеним у параметрі domain, то функція повертала рядок "Domain matches".
// В іншому випадку, функція повертала рядок "Domain does not match".

// function checkEmailDomain(email, domain) {
//     if (email.endsWith(domain)) {
//         return 'Domain matches';
//     } else { return 'Domain does not match';  }
// }

// console.log(checkEmailDomain('hannah.htslk@gmail.com', 'hotmail.com'));

// Функція checkPasswordLength(password, minLength) приймає два параметри:

// password - рядок, що містить пароль користувача.
// minLength - ціле число, яке визначає мінімальну довжину пароля.
// Доповни код функції так, щоб:

// Якщо довжина пароля password більша або дорівнює minLength, то функція повертала рядок "Password length meets requirements".
// В іншому випадку, функція повертала рядок "Password length does not meet requirements".

// function checkPasswordLength(password, minLength) {
//     if (password.length >= minLength) {
//         return "Password length meets requirements";
//     } else {
//         return "Password length does not meet requirements";
//     }
// }

// console.log(checkPasswordLength('blabla', 16));




// Використовуючи метод .indexOf(), знайти і вивести в консоль позицію, 
// на якій знаходиться пробіл між ім'ям та прізвищем


// const string = 'Daniel Redkliff'

// console.log(string.indexOf(' '));
// console.log(string.startsWith('D'));
// console.log(string.includes('Dan'));


// ? Напишіть код, який запитуватиме:
// ? 'Яка «офіційна» назва JavaScript?'
// ? Якщо користувач вводить ECMAScript,
// ? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!»
// */

// const answer = 'ECMAScript'.toLowerCase();
// const userInput = prompt('Яка «офіційна» назва JavaScript?').toLowerCase().trim();
// switch (userInput) {
//     case answer:
//         console.log('Вірно!');
//         break;
//     default:
//         console.log('Не знаєте? ECMAScript!');
        
// }
/*
? Форматування посилання (endsWith)
?
? Напиши скрипт який перевіряє чи закінчується значення
?  змінної link символом /. Якщо ні, додай до кінця
?  значення link цей символ.
? Використовуй конструкцію if...else.
*/

// let link = 'https://www.edu.goit.global/uk/learn/21769527/18936918/19420981/homework/';

// if (!link.endsWith('/')) {
//     link += '/';
  
// }
//   console.log(link);


/*
? Форматування посилання (includes та логічне «І»)
? Напиши скрипт який перевіряє чи закінчується значення
? змінної link символом /. Якщо ні, додай до кінця
? значення link цей символ, але тільки в тому випадку,
? якщо в link є підрядок "my-site".
? Використовуй конструкцію if...else або тернарний оператор.
*/

// let link = 'https://www.edu.goit.global/uk/my-sitelearn/21769527/18936918/19420981/homework';

// if (!link.endsWith('/') && link.includes('my-site')) {
//     link += '/';
// }

// console.log(link);

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

/*
? Напиши цикл for, який виводить у консоль браузера
? числа за зростанням від a до b, але тільки якщо число кратне 5.
*/
// const a = 10;
// const b = 200;
// for (let i = a; i <= b; i++) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
// }

/*
? Напиши скрипт, який підраховує суму всіх парних чисел,
? які входять в діапазон чисел у змінних від min до max.
? Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
*/

// const min = 3;
// const max = 89;

// let total = 0;
// for (let i = min; i <= max; i++) {

// }

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// Вивести на екран таблицю множення числа 7.
// for (let i = 1; i <= 10; i++) {
//     const result = i * 7;
//     console.log(result);
// }
    
// Порахуйте суму чисел від 12 до 27
// let total = 0;
// for (let i = 12; i <= 27; i++) {
//     total += i;
//     console.log(total);
// }

// Знайдіть добуток непарних числен від 3 до 9

// let total = 1;

// for (let i = 3; i <= 9; i++) {
//     if (i % 2 !== 0) {
//         total = total * i;
//         console.log(total);
//     }
// }

// Створити змінну, яка містить рядок з вашим ім'ям. Використовуючи метод .replace(), 
// замінити першу літеру вашого імені на символ "@" та вивести результат в консоль.

// const userName = 'Anna'.replace('A', '@');

// console.log(userName);


// Знайдіть число 49  у проміжку чисел від 1 до 100 та вийдіть з циклу.

for (let i = 1; i <= 100; i++) {
    if (i === 49) {
        console.log(i);
            break;
    }

}


// Напиши скрипт який підраховує загальну вартість покупки.
// Кількість товарів зберігається в змінній goods.
// Ціна кожного товару це випадкове число від 500 до 5000.
//  Записати суму в змінну totalPrice і вивести в консолі. Math.floor(Math.random() * (max - min + 1)) + min

// let goods = 10;
// let totalPrice = 0;

// for (let i = 0; i < goods; i++) {
//     let price = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
//     totalPrice += price;
// }
// console.log(totalPrice);