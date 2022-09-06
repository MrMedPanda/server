export default function checkData(data, checkType = 'none') {
    if (checkType === 'none' || checkType === 'people-list') {
        if (data instanceof Array) {
            return data.every(el => {
                return checkObjContent(el);
            });
        }
        return false;

    } else if (checkType === 'human') {
        if (data instanceof Object) {
            return checkObjContent(data);
        }
        return false;

    } else
        return 'Wrong check type!';
}

function checkObjContent(obj) {
    let checkPromotion = obj.promotion || obj.promotion === false;
    let checkId = obj.id || obj.id === 0;

    if (obj.name && obj.surname && obj.salary && checkPromotion && checkId) {
        let pattern = /[^a-z]+/gi;

        let numCheck = Number.isInteger(+obj.salary);
        let idCheck = Number.isInteger(obj.id);

        let nameCheck = !pattern.test(obj.name);
        let surnameCheck = !pattern.test(obj.surname);

        return numCheck && nameCheck && surnameCheck;
    }
    return false;
}
