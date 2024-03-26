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

