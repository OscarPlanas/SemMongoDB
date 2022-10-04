import { Schema, model } from "mongoose";

const serieSchema = new Schema({
    name: String,
    description: String,
    chapters: {
        type: Number,
        default: 0
    }
});

export default model('Serie', serieSchema);