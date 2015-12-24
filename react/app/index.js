import './main.scss';
import generateText from './sub';

let app = document.createElement('h1');
const myPromise = Promise.resolve(42);

myPromise.then((number) => {
    app.textContent = 'promise result is'+ number + 'now is';
    document.body.appendChild(app);
    document.body.appendChild(generateText());
});