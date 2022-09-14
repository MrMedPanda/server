import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    promotion: {
        type: Boolean,
        default: false,
    },
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
