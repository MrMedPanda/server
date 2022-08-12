import addHuman, { dellHuman } from './posts.js';
import findHuman, { sortHuman } from './search.js';
import getData from './gets.js';
import showHumans from './output.js';

function setAaddEvent(btn) {
    btn.forEach(element => {
        element.addEventListener('click', () => {
            let name = document.querySelector('#name').value,
                surname = document.querySelector('#surname').value,
                money = document.querySelector('#money').value;
            if (name && surname && money) {
                addHuman(name, surname, money);
                getData();
            }
        })
    });
}

function setDellEvent(btn) {
    btn.forEach(element => {
        element.addEventListener('click', function () {
            dellHuman(element.id);
            getData();
        });
    });
}

function setFindEvent(btn, data) {
    btn.forEach(element => {
        element.addEventListener('input', function () {
            document.querySelector('.content').innerHTML = showHumans(findHuman(data));
        });
    });
    document.querySelectorAll('#ex').forEach(e => e.addEventListener('click', () => getData()));
}
function setFilterEvent(btn, data) {
    btn.forEach(element => {
        element.addEventListener('input', function () {
            document.querySelector('.content').innerHTML = showHumans(sortHuman(data));
        });
    });
}

export { setAaddEvent, setDellEvent, setFindEvent, setFilterEvent };
