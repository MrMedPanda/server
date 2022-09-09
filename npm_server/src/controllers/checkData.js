import people from "../data/people.js";

export default function checkData(data, checkType = 'none') {
    if (checkType === 'none' || checkType === 'people-list') {
        if (data instanceof Array) {
            return data.every(el => {
                return checkObjContent(el, data);
            });
        }
        return false;

    } else if (checkType === 'human') {
        if (data instanceof Object) {
            return checkObjContent(data, people.list, 1);
        }
        return false;

    } else return 'Wrong check type!';
}

function checkObjContent(obj, additionalData, checker = 0) {
    let checkPromotion = obj.promotion || obj.promotion === false;
    let checkId = obj.id || obj.id === 0;

    if (obj.name && obj.surname && obj.salary && checkPromotion && checkId) {
        let pattern = /[^a-z]+/gi;

        let numCheck = Number.isInteger(+obj.salary);

        let idCheck = Number.isInteger(obj.id);

        for (let targeObj of additionalData) {
            if (targeObj.id === obj.id) {
                checker++;
                if (checker == 2) {
                    idCheck = false;
                    break;
                }
            }
        }

        let nameCheck = !pattern.test(obj.name);
        let surnameCheck = !pattern.test(obj.surname);

        return numCheck && nameCheck && surnameCheck && idCheck;
    }
    return false;
}
