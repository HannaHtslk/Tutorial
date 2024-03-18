/*
? Напиши скрипт, який для об'єкта user, послідовно:
? - додає поле mood зі значенням 'happy'
? - замінює значення hobby на 'skydiving'
? - замінює значення premium на false
? - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/


//? Зведіть у квадрат кожен елемент цього об'єкта. //

// const obj = { x: 2, y: 3, z: 4 }; //

/*
? У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
? підсумовування всіх зарплат і збережіть результат у змінній sum.
? Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/


// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок,
//  та метод "withdraw", який дозволяє знімати гроші з рахунку.
//  Методи повинні спрацьовувати при натисканні на кнопки “поповнити рахунок”
// та отримати ‘готівку’ відповідно.Після проведення операції виводити повідомлення про залишок на рахунку.



//  Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed".
//  Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія.
//  Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки



// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина".
//Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини
//та ширини.


//Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.


// Створіть об’єкт "user", який буде мати властивості "name", "email", "password".
//  метод "login", який буде перевіряти правильність введеного email та password.
// Використайте інпути для запису значень властивостей в об’єкт


// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, 
// та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку.


// Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

// const basket = [
//     { fruit: 'Mango', price: 10, quantity: 15, },
//     { fruit: 'Apple', price: 20, quantity: 6,},
//     { fruit: 'Banana', price: 30, quantity: 7,}
// ]

// function calculateTotal(basket) {
//     let total = 0;
//     for (const basket1 of basket) {
//         total += basket1.price * basket1.quantity;
//     }
//     return total;
// }

// console.log(calculateTotal(basket));

// Створіть масив об'єктів "книг" з властивостями "назва", "автор" та "рік видання". Напишіть функцію "findBooksByAuthor",
//яка буде повертати масив книг відповідного автора.
// const books = [
//   { title: "Війна і мир", author: "Лев Толстой", year: 1869 },
//   {
//     title: "Преступление и наказание",
//     author: "Федор Достоевский",
//     year: 1866,
//   },
//   {
//     title: "Гаррі Поттер і філософський камінь",
//     author: "Джоан Роулінг",
//     year: 1997,
//   },
//   { title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967 },
//   { title: "1984", author: "Джордж Оруелл", year: 1949 },
//   { title: "test book", author: "Михаил Булгаков", year: 1987 },
// ];