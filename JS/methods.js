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

// Функція checkURL(url) приймає один параметр:

// url - рядок, що містить URL-адресу. URL може містити шлях до ресурсу, параметри запиту тощо.
// Доповни код функції таким чином, щоб:

// Вона перевіряла наявність параметрів запиту в URL-адресі.
// Якщо URL містить параметри запиту, функція повертала новий рядок, який містить URL-адресу без параметрів.
// В іншому випадку функція повертала незмінний рядок.


// Використовуючи метод .indexOf(), знайти і вивести в консоль позицію, 
// на якій знаходиться пробіл між ім'ям та прізвищем

const string = 'Daniel Redkliff'

console.log(string.indexOf(' '));
console.log(string.startsWith('D'));
console.log(string.includes('Dan'));