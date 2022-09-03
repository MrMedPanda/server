import { addBtn } from './interaction.js';
export default function showHumans(humans) {
    return humans.reduce((prev, curr) => {
        return `${prev}
        <li class="list">
        <p>${curr.surname}</p> <p>${curr.name}</p> <p class="end">${curr.money}</p> ${addBtn('dell_bth', 'Remove', curr.id)}
        </li>`;
    }, `<li class="top_list">
        <p>Name</p> <p>Surname</p> <p>Money</p>
        </li>`)
}