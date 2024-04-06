const form = document.querySelector('.feedback-form');
const userData = {};
const delay = 3000;
let timerId = null;
const notification = document.querySelector('.notification')

const formFieldsAutofill = () => {
    try {
        const savedData = JSON.parse(localStorage.getItem('user'));

        if (savedData === null) {
            return;
        }

        for (const key in savedData) {
            form.elements[key].value = savedData[key];
        }

    } catch (error) {
        console.log(error);
    }

}
formFieldsAutofill();


const onInputFill = event => {
    const { target: clickedElement } = event;

    const inputName = clickedElement.name;
    const inputValue = clickedElement.value;

    userData[inputName] = inputValue;
    localStorage.setItem('user', JSON.stringify(userData));
}




const onFormSubmit = event => {
    event.preventDefault();

    for (const element of form.elements) {
        if (element.value.trim() === '') {
            return;
        }
    }
    
    
   
    localStorage.removeItem('user');
    form.reset();

    showNotification();
    
}

const showNotification = () => {
    
    notification.classList.add('is-visible');
    timerId = setTimeout(() => { notificationClose() }, delay);
}


const notificationClose = () => {
    notification.classList.remove('is-visible');
}


const onNotificationClick = () => {
    notificationClose();
    clearTimeout(timerId);
}
    
notification.addEventListener('click', onNotificationClick);



form.addEventListener('input', onInputFill);
form.addEventListener('submit', onFormSubmit);


