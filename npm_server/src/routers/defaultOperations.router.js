import { Router } from "express";
import people from "../data/people.js";

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
    people.changeList(req.body);
    res.json({
        data: people.list
    });
    console.log('Updating successfully');
});

export default router;