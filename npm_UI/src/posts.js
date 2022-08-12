export default function addHuman(name, surname, money) {
    postData('http://127.0.0.1:3000/ret/add', {
        'name': name,
        'surname': surname,
        'money': money
    }).then(data => console.log(data)).catch(e => console.log('Fail Add', e));
}

async function dellHuman(id) {
    await postData('http://127.0.0.1:3000/ret/dell', { 'id': id }).then(data => console.log(data))
        .catch(e => console.log('Fail Dell', e));
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.status;
}

export { dellHuman };