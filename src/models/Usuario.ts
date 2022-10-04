import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    name: String
    // vistas: [{type: Schema.Types.ObjectId, ref: 'Serie'}]
});


export default model('Usuario', usuarioSchema);