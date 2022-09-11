const people = {
    list: [
        { name: 'Oleg', surname: 'Oziava', salary: '1000', promotion: false, id: 0 },
        { name: 'Maks', surname: 'Mamariga', salary: '1500', promotion: false, id: 1 },
        { name: 'Tim', surname: 'Kutuzov', salary: '1060', promotion: false, id: 2 },
        { name: 'Bogdan', surname: 'Zhopodriga', salary: '2000', promotion: false, id: 3 },
        { name: 'Dima', surname: 'Kekyh', salary: '1050', promotion: false, id: 4 },
        { name: 'Ivan', surname: 'Omega', salary: '1120', promotion: false, id: 5 },
        { name: 'Kolia', surname: 'Lepochan', salary: '1590', promotion: false, id: 6 },
        { name: 'Alex', surname: 'Kulibin', salary: '1023', promotion: false, id: 7 },
        { name: 'Kiril', surname: 'Kuplinov', salary: '1670', promotion: false, id: 8 },
        { name: 'Vlad', surname: 'Lemberg', salary: '1055', promotion: false, id: 9 },
        { name: 'Gondon', surname: 'Yakimov', salary: '1340', promotion: false, id: 10 },
        { name: 'Mexicanec', surname: 'Lotos', salary: '1980', promotion: false, id: 11 },
        { name: 'Ricardo', surname: 'Milos', salary: '1120', promotion: false, id: 12 },
        { name: 'Mihail', surname: 'Kumeli', salary: '5400', promotion: false, id: 13 },
        { name: 'Alexey', surname: 'Pidrochan', salary: '6700', promotion: false, id: 14 }
    ],
    changeList: function (data) {
        this.list = data;
    },

    addHuman: function (human) {
        this.list.push(human);
    },

};

export default people;