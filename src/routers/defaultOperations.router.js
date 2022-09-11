import { Router } from "express";
import people from "../data/people.js";
import addHuman from "../controllers/addHuman.js";
import updatePeopleList from "../controllers/updatePeopleList.js";

const router = Router();

router.get('/get-people', (req, res) => {
    res.send(people.list);
    console.log('People list has been sent!');
});

router.post('/update-people-list', updatePeopleList);

router.post('/add-human', addHuman);

export default router;