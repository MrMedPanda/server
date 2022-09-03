function addBtn(cl, name, id) {
    return `<button class="${cl}" id="${id}">${name}</button>`
}

function addInp() {
    return `<input type="text" class="set" id="name" placeholder="Name">
    <input type="text" class="set" id="surname" placeholder="Surname">
    <input type="number" class="set" id="money" placeholder="Money"> `
}

function addSeak() {
    return `<div class="find">
                <input type="text" class="find_inp" id="search_name" placeholder="Surname">
                <button id="ex">X</button>
            </div>`
}

function addFilter() {
    return `<div class="sort_block">
                <input type="number" class="sort" id="min" placeholder="Min cash">
                <input type="number" class="sort" id="max" placeholder="Max cash">
                <button id="ex">X</button>
            </div>`
}

export { addBtn, addInp, addSeak, addFilter };