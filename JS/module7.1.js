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

const title = document.createElement('h1');
title.textContent = 'Привіт, це перший мій створений елемент!';

title.style.color = 'hotpink';
title.style.textShadow = '2px 2px 3px purple';
title.classList.add('title');
document.body.prepend(title);

const nextButton = document.querySelector('.my-button');

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

const select = document.querySelector('.pizza-select');

const valueOutput = document.querySelector('.value-output');

const textOutput = document.querySelector('.text-output');

function setOutput(event) {
    const selectedOptionValue = event.currentTarget.value;
    const selectedOptionIndex = event.currentTarget.selectedIndex;
    const selectedOptionText =
        event.currentTarget.options[selectedOptionIndex].text;
}

select.addEventListener('change', setOutput)
event.currentTarget.options[selectedOptionIndex].text;

textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}



