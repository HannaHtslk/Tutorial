// Створіть функцію, яка буде видаляти значення з localStorage за ключем 
const user  = {
    userName: 'Anna',
    age: 24,
}

const localStorageData = localStorage.setItem('user', JSON.stringify(user))



// const removeDataFromLs = (key) => {
//     return localStorage.removeItem(key);

// }

// removeDataFromLs('user')

const clearLs = () => {
    localStorage.clear()
}