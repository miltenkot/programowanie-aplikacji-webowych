import { App } from './app';
import './main.scss';

const inputText: HTMLInputElement = document.querySelector("#inputText");
const submitButton: HTMLButtonElement = document.querySelector("#button");

const app = new App()

submitButton.addEventListener('click', () => {
    let text = inputText.value;
     app.bindInputEvents(text);
});


