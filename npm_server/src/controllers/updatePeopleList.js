import checkData from "../controllers/checkData.js";

export default function updatePeopleList(req, res) {
    if (checkData(req.body)) {
        people.changeList(req.body);
        res.json({
            data: people.list
        });
        console.log('Updating successfully');

    } else {
        res.json({
            message: 'Bad data!',
            data: people.list

        });
        console.log('Updating failed! Bad data.');
    }
}