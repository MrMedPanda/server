import { Router } from "express";
import people from "../data/people.js";
import checkData from "../controllers/checkData.js";

const router = Router();

router.get('/get-people', (req, res) => {
    res.send(people.list);
    console.log('People list has been sent!');
});

router.get('/get-people/:id', (req, res) => {
    res.send(people.list[req.params.id]);
    console.log('Human info has been sent!');
});

router.post('/update-people-list', (req, res) => {
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
});

router.post('/add-human', (req, res) => {
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
});

export default router;