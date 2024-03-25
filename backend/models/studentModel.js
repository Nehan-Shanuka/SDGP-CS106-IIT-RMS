import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    op1: {
        type: String,
    },
    op2: {
        type: String,
    },
    group: {
        type: String,
    },
});

export const Student = mongoose.model("Student", studentSchema);