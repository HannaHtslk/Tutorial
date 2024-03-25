// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// const showBooks = library.logBookCount.bind(library);
// console.log(showBooks())


// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}



// class User {
//   #email;
//   #login;
//   constructor() {
//     this.#email = 'anna@gmail.com',
//       this.#login = 'qwerty123',
//       this.phone = 32445;
//   }
  
//   get email() {
//     return this.#email
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const admin = new User()
// admin.name = 'Tony'

// console.log(admin.email)
// console.log(admin.email = 'netty@gmail.com')



// console.log(admin.name, admin.login);

// Створіть клас Rectangle, що містить властивості width та height. Додайте метод getArea(), який повертає площу прямокутника.
// 

class Rectangle {

  constructor(width, height) {
   this.width = width;
    this.height = height;
  }

  // getArea() {
  //   return this.width * this.height;
  // }
  get 
}



const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.getArea()); // 50