import { addBtn } from './interaction.js';
export default function showHumans(humans) {
    return humans.reduce((prev, curr) => {
        return `${prev}<li class="list">${curr.surname} ${curr.name}: ${curr.money} USD ${addBtn('dell_bth', 'Remove', curr.id)}</li>`;
    }, `<div class="title">Humans:</div>`)
}