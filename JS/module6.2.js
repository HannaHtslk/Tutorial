/*
? Напиши клас Storage який створює об'єкти для керування складом товарів.
? При виклику отримуватиме один аргумент - початковий масив товарів і
? записуватиме його властивість items.
?
? Додай методи класу:
? - getItems() - повертає масив товарів.
? - addItem(item) - отримує новий товар і додає його до поточних.
? - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }


//     getItems() {
//         return this.items;
//     }
//     addItem(item) {
//         this.items.push(item);
//     }
//     removeItem(item) {
//         if (this.items.includes(item)) {
//             this.items.splice(this.items.indexOf(item), 1)
//         }
        
//     }
// }

// const supply = new Storage(['boooks', 'shelves', 'tables', 'mirrors']);

// console.log(supply.getItems());
// supply.addItem('sofas');
// console.log(supply.getItems());
// supply.removeItem('mirrors')
// console.log(supply.getItems());
/*
? Напиши клас User який створює об'єкт із властивостями login та email.
? Оголоси приватні властивості #login та #email, доступ до яких зроби через
? гетер та сетер login та email.
 */
// class User {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login
//     }
//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const user = new User('romashka', '@gmail.com')
// console.log(user);
// console.log(user.login);
// user.login = 'blueberry';
// console.log(user.login);

// console.log(user.email);
// user.email = '@hotmail.com';
// console.log(user.email);
/*
? Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
? - email - пошта, рядок
? - age - вік, число
? - numberOfPosts - кількість постів, число
? - topics - масив тем на яких спеціалізується блогер
?
? Клас чекає 4 параметри - email, age, numberOfPosts, topics.
?
? - Додай метод getInfo(), який, повертає рядок: Blogger ${email} is ${age} years old and has ${numPosts} posts.
? - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 */


// class Blogger {

//     constructor(email, age, numberOfPosts, topics) {
//         this.email = email;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo() {
//         return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//     }
//     updatePostCount(value) {
//         return this.numberOfPosts += value;
//     }
// }

// const blogger = new Blogger('@gmail.coom', 4, 52, ['car', 'shows']);

// console.log(blogger.getInfo());
// console.log(blogger.updatePostCount(5));

// Створіть клас Shape, який має властивість color і метод draw.
//Створіть клас Circle, який наслідується від Shape і має властивість radius
// та перезаписує метод draw для відображення кола.
// Створіть об'єкт myCircle класу Circle з радіусом 5 і коліром "red".
// const myCircle = new Circle('red', 5);
// myCircle.draw(); // Drawing a circle with radius 5
// console.log(myCircle.color); // "red"




//Створіть клас Animal, який має властивість name. 
// Створіть клас Dog, який наслідується від Animal і має властивість breed. 
// Створіть об'єкт myDog класу Dog з ім'ям Buddy і породою Labrador Retriever.

// Створіть клас Product, що містить властивості name, price, та discount. 
// Додайте метод getDiscountPrice(), який повертає ціну товару зі знижкою,
//  якщо така є (якщо властивість discount є ненульовим числом, знижка 
//     відсотків від ціни повинна бути застосована).
// const product1 = new Product('Phone', 500, 10);
// console.log(product1.getDiscountPrice()); // 450

// Нехай є базовий клас Person з властивостями name та age. Створіть підклас Employee, 
// який буде мати всі властивості базового класу, а також властивість position.
// const john = new Employee("John", 32, "programmer");
// console.log(john.getInfo()); // "John is a programmer and is 32 years old"


/*
? Фільтрація за діапазоном
?
? Напишіть функцію filterRange(numbers, a, b), яка приймає масив numbers, 
? шукає в ньому елементи більші-рівні min та менші-рівні max і віддає масив цих елементів.
*/

// const filterRange = (numbers, min, max) => {
//     return numbers.filter(num => {
//         return num >= min && num <= max;
//     });
    
// }
// console.log(filterRange([3, 6, 5, 1], 2, 10))

//? Відфільтруйте масив на унікальні значення.

// const users = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];
// const filteredUser = users.filter((username, idx, arr) => { 
//     return arr.indexOf(username) === idx;
// })

// const users = ['Andre', 'Lester', 'Andre', 'Lester', 'Louisa', 'Alex'];
// const filteredUser = [];

// users.forEach(username => {
//     if (!filteredUser.includes(username)) {
//         filteredUser.push(username)
//     }
// })

// console.log(users);
// console.log(filteredUser);

//? Відфільтруйте масив з користувачами на унікальні значення.

// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];
// const filtredUsers = [];

/*
? Відсортувати користувачів за віком
? 
? Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.
*/

// Повна версія
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];



/*
? Вирахувати середній вік
? Напишіть функцію getAverageAge(users), яка приймає масив об’єктів 
? з властивістю age та повертає середній вік.
*/

// Повна версія
// const allUsers = [
//   { firstName: 'Herbert', age: 25 },
//   { firstName: 'Todd', age: 30 },
//   { firstName: 'Lida', age: 29 },
// ];


/*
? Напиши клас Storage який створює об'єкти для керування складом товарів.
? При виклику отримуватиме один аргумент - початковий масив товарів і
? записуватиме його у властивість items.
?
? Додай методи класу:
? - getItems() - повертає масив товарів.
? - addItem(item) - отримує новий товар і додає його до поточних.
? - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */


/*
? Напиши клас Notes, який управляє колекцією нотаток у властивості items.
? Нотатка це об'єкт із властивостями text та priority.
? Додай класу статичну властивість Priority, в якій зберігатиметься об'єкт із пріоритетами.
?
? {
? LOW: 'low',
? NORMAL: 'normal',
? HIGH: 'high'
? }
?
? Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
*/
