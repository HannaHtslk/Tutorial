const form = document.querySelector('.feedback-form');
const userData = {};

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
    form.reset('');
}

form.addEventListener('input', onInputFill);
form.addEventListener('submit', onFormSubmit);


