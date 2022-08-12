export default function findHuman(data) {
    const fName = document.querySelector('#search_name').value;
    return fName === '' ? data : data.filter(({ name }) => !name.search(fName));
}

function sortHuman(data) {
    const max = +document.querySelector('#max').value;
    const min = +document.querySelector('#min').value;
    if (!max && !min)
        return data;
    else if (!max)
        return data.filter(({ money }) => money >= min);
    else if (!min)
        return data.filter(({ money }) => money <= max);
    else
        return data.filter(({ money }) => money <= max && money >= min);
}

export { sortHuman };