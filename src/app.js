import Express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import defaultOperationsRoute from './routers/defaultOperations.router.js';

let app = Express();

app.use(bodyParser.json());
app.use(cors());
app.use(Express.json());
app.use(defaultOperationsRoute);

const start = async () => {
    try {
        app.listen(3000, () => {
            console.log('Server has been started!');
        });
    } catch (e) {
        console.log(e);
    }
};

start();