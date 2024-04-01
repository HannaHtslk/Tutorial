// const list = document.querySelector('.menu');
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const lastlistItem = list.lastElementChild;
// console.log(lastlistItem);


// const prelastListItem = lastlistItem.previousElementSibling;
// console.log(prelastListItem);

// const link = document.querySelector('.link')
// console.log(link.href);

// // link.href = "instagram.com";
// // console.log(link.href);
// const instagramLink = document.querySelector('[href="goit.com"]');
// console.log(instagramLink);

// const image = document.querySelector('img');
// console.log(image)

// // image.src = 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/03/30/ovehead-cup-of-coffee-with-milk.jpg.rend.hgtvcom.1280.1280.suffix/1648675206726.jpeg';
// // console.log(image);
// // image.alt = 'a cup of coffee';
// // image.width = '250';


// const button = document.querySelector('button[data-action="save"]');
// console.log(button);

// console.log(button.dataset.action)


// Створити заголовок з текстом 'Привіт, це перший мій створений елемент!'
// та додати до нього клас “title”, заздалегідь створений в style.css.
// Додати заголовок на сторінку

// const title = document.createElement('h1');
// title.textContent = 'Привіт, це перший мій створений елемент!';

// title.style.color = 'hotpink';
// title.style.textShadow = '2px 2px 3px purple';
// title.classList.add('title');
// document.body.prepend(title);

// const nextButton = document.querySelector('.my-button');

// const nextButtonHandler = (event) => {
//     console.log('you clicked');
// }

// nextButton.addEventListener('click', nextButtonHandler);
// // nextButton.removeEventListener('click', nextButtonHandler);

// const handleClick = event => {
//     console.log(event);
// }

// nextButton.addEventListener('click', handleClick);


// document.addEventListener('keydown', event => {
//     console.log(event.key);
//     console.log(event.code);
// })

// document.addEventListener('keydown', event => {
//     if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//         console.log('you pressed Command + S')
//     }
// })

// const form = document.querySelector('.form');

// form.addEventListener('submit', event => {
//     console.dir(event);
// })

// form.addEventListener('submit', event => {
//     event.preventDefault()
// })

// const select = document.querySelector('.pizza-select');

// const valueOutput = document.querySelector('.value-output');

// const textOutput = document.querySelector('.text-output');

// function setOutput(event) {
//     const selectedOptionValue = event.currentTarget.value;
//     const selectedOptionIndex = event.currentTarget.selectedIndex;
//     const selectedOptionText =
//         event.currentTarget.options[selectedOptionIndex].text;
// }

// select.addEventListener('change', setOutput)
// event.currentTarget.options[selectedOptionIndex].text;

// textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;

// Потрібно створити колекцію карток з зображеннями та додати їх на сторінку 
/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

// const pictures = [
//   {
//     width: 700,
//     height: 460,
//     url: 'https://picsum.photos/id/0/700/460',
//     alt: 'laptop',
//   },
//   {
//     width: 700,
//     height: 460,
//     url: 'https://picsum.photos/id/1/700/460',
//     alt: 'developer',
//   },
//   {
//     width: 700,
//     height: 460,
//     url: 'https://picsum.photos/id/10/700/460',
//     alt: 'forest',
//   },
//   {
//     width: 700,
//     height: 460,
//     url: 'https://picsum.photos/id/100/700/460',
//     alt: 'beach',
//   },
//   {
//     width: 700,
//     height: 460,
//     url: 'https://picsum.photos/id/1000/700/460',
//     alt: 'mountain',
//   },
// ];

// const createCardTemplate = collection => {
//   return `
//   <li class="gallery-item">
//   <a href="#">
//     <img src="${collection.url}" alt="${collection.alt}" width="${collection.width}" height="${collection.height}">
//   </a>
// </li>
//   `
// };

// const cardsArray = pictures.map(picture => {
//   return createCardTemplate(picture);
// });

// const gallery = document.querySelector('.js-gallery');

// gallery.innerHTML = cardsArray.join('');


// const createCardTemplate = collection => {

//   const listItem = document.createElement('li');
//   listItem.classList.add('gallery-item');


//   const link = document.createElement('a');
//   link.href = '#';

//   listItem.prepend(link);

//   const image = document.createElement('img');

//   image.src = collection.url;
//   image.alt = collection.alt;
//   image.width = collection.width;
//   image.height = collection.height;

//   link.append(image);

//   return listItem;
// }

// const cardsArray = pictures.map((picture) => {
//   return createCardTemplate(picture);
// })

// const gallery = document.querySelector('.js-gallery');

// gallery.append(...cardsArray);

// const listItem = document.querySelectorAll('.item');
// console.log(`Categories: ${listItem.length}`);

// listItem.forEach(item => {
//   const title = item.firstElementChild.textContent;

//   const numberOfCategories = item.querySelectorAll('ul li').length;

//   console.log(`${title} : ${numberOfCategories}`)
// })

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];


// const createCardTemplate = collection => {
//   return `
//  <li class="gallery-item">
//     <img src="${collection.url}" alt="${collection.alt}">
// </li>
//   `
// }

// const cardsArray = images.map(image => {
//   return createCardTemplate(image);
// })

// const gallery = document.querySelector('.gallery');

// gallery.insertAdjacentHTML('beforeend', cardsArray.join(''));


// MODULE 7.02


/*
? Натискаючи на кнопку "Click me" змусь
? червоний квадратик зміщуватись на 50px по діагоналі
*/

// 1)знайшли елементи, з якими працюватимемо в DOM дереві 
// const clickBtn = document.querySelector('.js-click');
// const resetBtn = document.querySelector('.js-reset');
// const box = document.querySelector('.js-box');

// 2) створюємо іменну колбек функцію, яка буде хендлити нашу подію і в ній прописуємо,
// що має відбуватись коли користувач буде взаємодіяти з інтерактивним елементом
// let step = 0;

// const onBtnClick = () => {
// step += 50;
//   if (step > 250) {
//     clickBtn.removeEventListener('click', onBtnClick);
//     return
//   }
//   box.style.transform = `translate(${step}px, ${step}px)`
// }

// вішаємо слухача на інтерактивні елементи
// тут в тілі колбекфункції для кнопки "reset" додали знову слухача події для того 
// щоб код міг виконатися знову і знову 
// clickBtn.addEventListener('click', onBtnClick);

// resetBtn.addEventListener('click', () => {
//   step = 0;

//   box.style.transform = `translate(0px, 0px)`;
//   clickBtn.addEventListener('click', onBtnClick);
// })


/*
? Виводь в консоль все що користувач вводить в input
*/

// const input = document.querySelector('.js-user-name');

// const onInputFill = () => {
//   console.log(input.value);
// }

// input.addEventListener('input', onInputFill)

/*
? Користувач вводить в input своє ім'я після втрати
? фокусу отримує alert з повідомленням-привітанням
 */
// const input = document.querySelector('.js-user-name');

// const onInputBlur = () => {
//   const username = input.value;
//   alert(`Welcome ${username}`)

// }

// input.addEventListener('blur', onInputBlur)


/*
? Після того, як користувач активує чекбокс, виводиться alert
*/

// const checkBox = document.querySelector('[type="checkbox"]');

// const onChecked = () => {
//   if (checkBox.checked) {
//     alert('checked')
//     return
//   }
// }

// checkBox.addEventListener('change', onChecked)

// const userInput = document.querySelector('#name-input');
// const userName = document.querySelector('#name-output');

// const onInputFill = () => {
//   const trimmedInputValue = userInput.value.trim();

//   if (trimmedInputValue === '') {
//     return userName.textContent = 'Anonymous';
//   }
//   return userName.textContent = trimmedInputValue;
// }

// userInput.addEventListener('input', onInputFill)

// const form = document.querySelector('.login-form');

// const onFormSubmit = event => {
//   event.preventDefault();

//   const formData = {
//     [form.elements.email.name]: form.elements.email.value.trim(),
//     [form.elements.password.name]: form.elements.password.value.trim(),
//   }
  

//   if (formData.email === '' || formData.password === '') {
//     alert('All form fields must be filled in')
//   }

//   console.log(formData);
//   form.reset()
// }

// form.addEventListener('submit', onFormSubmit);


