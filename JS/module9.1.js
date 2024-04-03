// Створіть функцію, яка буде видаляти значення з localStorage за ключем 
// const userOne  = {
//     userName: 'Anna',
//     age: 24,
// }

// const userTwo = {
//  userName: 'John',
//     age: 26,
// }

// const userThree = {
//  userName: 'Olaf',
//     age: 40,
// }


// const userFour = {
//  userName: 'Ben',
//     age: 32,
// }

// Let's add an Item to the local storage using a function 

// const addAnItem = () => {
//     return localStorage.setItem('userOne', JSON.stringify(userOne))
// }
// console.log(addAnItem());

// // Let's remove an Item from the local storage using a function 
// const removeAnItem = () => {
//     return localStorage.removeItem('user');
// }
// console.log(removeAnItem());



// const getAnItem = () => {
//     return JSON.parse(localStorage.getItem('userOne'));
// }

// console.log(getAnItem())


const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;

const userData = localStorage.getItem('userData');
if (userData !== null && userData !== undefined) {
    textarea.value = userData;
} else {
    textarea.value = "";
}
const onFormSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.message.value);
    localStorage.removeItem('userData');
    form.reset();
}

form.addEventListener('submit', onFormSubmit)


// Для того щоб зберігалось те що вводить користувач потрібно створити ще одну подію 
// input і коли в її колбеку прописати логіку. До змінної записати значення textarea і цю змінну додати
// через setItem до local storage

form.addEventListener('input', (event) => {

    const userData = event.target.value;
    const savedData = localStorage.setItem('userData', userData);

})