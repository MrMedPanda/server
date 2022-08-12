import { addBtn, addInp, addSeak, addFilter } from './interaction.js';
import showHumans from './output.js';
import { setAaddEvent, setDellEvent, setFindEvent, setFilterEvent } from './events.js';

let inner = document.querySelector('#hi');

export default async function getData() {
    return await fetch('http://127.0.0.1:3000/humans').then((response) => {
        return response.json();
    }).then(data => {
        inner.innerHTML = addSeak() + addFilter() + '<div class="content">' + showHumans(data) + '</div>' +
            '<div class="footer">' + addInp() + addBtn('add_btn', 'Add') + '</div>';
        setAaddEvent(document.querySelectorAll('.add_btn'));
        setDellEvent(document.querySelectorAll('.dell_bth'));
        setFindEvent(document.querySelectorAll('#search_name'), data);
        setFilterEvent(document.querySelectorAll('.sort'), data);
    });
}

// async function getData(id) {
//     return await fetch(`http://127.0.0.1:3000/humans/${id}`).then((response) => {
//         return response.json();
//     }).then((data) => {
//         inner.innerHTML = `<div>${showHumans(data)}</div>`;
//     });
// }
