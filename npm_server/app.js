import { humani, showHumans } from "./src/humans.js";
import Express from "express";
import cors from 'cors';

let humans = humani;
let app = Express();

app.use(cors());
app.use(Express.json());

app.get('/', (req, res) => {
    res.send(`<div>${showHumans(humans)}</div>`)
});
app.get('/humans', (req, res) => {
    res.send(humans);
});

app.get('/humans/:id', (req, res) => {
    res.send(humans[req.params.id]);
});

app.post('/ret/add', (req, res) => {
    let id = humans.push(req.body);
    req.body.id = --id;
    res.end('OK');
});

app.post('/ret/dell', (req, res) => {
    let buff = humans.filter((e) => {
        return (e.id != req.body.id);
    });
    buff.forEach((el, i) => {
        el.id = i;
    })
    res.end('OK');
    console.log('Get' + req.body.id);
    humans = buff;
});

app.listen(3000, () => {
    console.log('work');
});