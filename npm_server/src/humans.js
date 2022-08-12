let humani = [
    { name: 'Oleg', surname: 'Oziava', money: '1000', id: 0 },
    { name: 'Maks', surname: 'Mamariga', money: '1500', id: 1 },
    { name: 'Tim', surname: 'Kutuzov', money: '1060', id: 2 },
    { name: 'Bogdan', surname: 'Zhopodriga', money: '2000', id: 3 },
    { name: 'Dima', surname: 'Kekyh', money: '1050', id: 4 },
    { name: 'Ivan', surname: 'Omega', money: '1120', id: 5 },
    { name: 'Kolia', surname: 'Lepochan', money: '1590', id: 6 },
    { name: 'Alex', surname: 'Kulibin', money: '1023', id: 7 },
    { name: 'Kiril', surname: 'Kuplinov', money: '1670', id: 8 },
    { name: 'Vlad', surname: 'Lemberg', money: '1055', id: 9 },
    { name: 'Gondon', surname: 'Yakimov', money: '1340', id: 10 },
    { name: 'Mexicanec', surname: 'Lotos', money: '1980', id: 11 },
    { name: 'Ricardo', surname: 'Milos', money: '1120', id: 12 },
    { name: 'Mihail', surname: 'Kumeli', money: '5400', id: 13 },
    { name: 'Alexey', surname: 'Pidrochan', money: '6700', id: 14 }
];

function showHumans(humans) {
    return humans.reduce((prev, curr) => {
        return `${prev}<li>${curr.surname} ${curr.name}: ${curr.id}</li>`;
    }, `Humans:`)
}

export { humani, showHumans };