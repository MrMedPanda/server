import checkData from "../controllers/checkData.js";
import people from '../data/people.js';

export default function addHuman(req, res) {
    if (checkData(req.body, 'human')) {
        people.addHuman(req.body);
        res.json({
            data: people.list
        });
        console.log('Updating successfully');

    } else {
        res.json({
            message: 'Bad data!',
            data: people.list

        });
        console.log('Adding failed! Bad data.');
    }
}