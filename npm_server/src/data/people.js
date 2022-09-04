const people = {
    list: [
        { name: 'Oleg', surname: 'Oziava', money: '1000', promotion: false, id: 0 },
        { name: 'Maks', surname: 'Mamariga', money: '1500', promotion: false, id: 1 },
        { name: 'Tim', surname: 'Kutuzov', money: '1060', promotion: false, id: 2 },
        { name: 'Bogdan', surname: 'Zhopodriga', money: '2000', promotion: false, id: 3 },
        { name: 'Dima', surname: 'Kekyh', money: '1050', promotion: false, id: 4 },
        { name: 'Ivan', surname: 'Omega', money: '1120', promotion: false, id: 5 },
        { name: 'Kolia', surname: 'Lepochan', money: '1590', promotion: false, id: 6 },
        { name: 'Alex', surname: 'Kulibin', money: '1023', promotion: false, id: 7 },
        { name: 'Kiril', surname: 'Kuplinov', money: '1670', promotion: false, id: 8 },
        { name: 'Vlad', surname: 'Lemberg', money: '1055', promotion: false, id: 9 },
        { name: 'Gondon', surname: 'Yakimov', money: '1340', promotion: false, id: 10 },
        { name: 'Mexicanec', surname: 'Lotos', money: '1980', promotion: false, id: 11 },
        { name: 'Ricardo', surname: 'Milos', money: '1120', promotion: false, id: 12 },
        { name: 'Mihail', surname: 'Kumeli', money: '5400', promotion: false, id: 13 },
        { name: 'Alexey', surname: 'Pidrochan', money: '6700', promotion: false, id: 14 }
    ],
    changeList: function (data) {
        this.list = data;
    }
};

export default people;