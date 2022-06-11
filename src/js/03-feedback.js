import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

const LS_KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('submit', onSubmitForm);

form.addEventListener('input', throttle(onInputsValues, 500));

populateFormsFields();

function onSubmitForm(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(LS_KEY);
  formData = {};
}

function onInputsValues(e) {
  const key = e.target.name;
  const inputValue = e.target.value;

  formData[key] = inputValue;
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
  //   console.log(formData);
}

function populateFormsFields() {
  const saveValues = localStorage.getItem(LS_KEY);

  if (saveValues) {
    const { email, message } = JSON.parse(saveValues);
    formData = { email, message };

    if (email === undefined) {
      input.value = '';
    } else {
      input.value = email;
    }
    // input.value = email;

    if (message === undefined) {
      textArea.value = '';
    } else {
      textArea.value = message;
    }
    // textArea.value = message;
  }
}
