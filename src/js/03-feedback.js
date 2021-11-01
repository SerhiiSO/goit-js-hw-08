import throttle from 'lodash.throttle';

const storageKey = 'feedback-form-state';

const dataRef = {
    form: document.querySelector('.feedback-form'),
    mail: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};

function onInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
}

function onSubmit(event) {
    event.preventDefault();
    event.target.reset();
    console.log('feedback-form-state', JSON.parse(localStorage.getItem(storageKey)));
    localStorage.removeItem(storageKey);
};

function textareaSavedData() {
    const savedMessage = JSON.parse(localStorage.getItem(storageKey));

    if (savedMessage && savedMessage.message) {
    dataRef.textarea.value = savedMessage.message;
    };
    
    if (savedMessage && savedMessage.email) {
    dataRef.mail.value = savedMessage.email;
    };
};

dataRef.form.addEventListener('submit', onSubmit);
dataRef.form.addEventListener('input', throttle(onInput, 500));

textareaSavedData();

