import Express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todosRouter from "./routers/todos.router.js";
import cors from "cors";
dotenv.config();

const app = Express();

//BodyParsing
app.use(Express.json());
app.use(cors('https://metra-api-test-local.herokuapp.com'));

mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_USER_NAME}:${process.env.MONGOOSE_PASSWORD}@${process.env.MONGOOSE_CLUSTER}.mongodb.net/${process.env.MONGOOSE_CLUSTER_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(todosRouter);

const start = () => {
    try {
        app.listen(process.env.PORT, process.env.HOST, () => console.log('Server is working'));
    } catch (e) {
        console.log('Server error: ', e);
    }
};

start();
