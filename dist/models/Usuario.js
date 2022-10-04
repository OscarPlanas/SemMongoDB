"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    name: String
    // vistas: [{type: Schema.Types.ObjectId, ref: 'Serie'}]
});
exports.default = (0, mongoose_1.model)('Usuario', usuarioSchema);
//# sourceMappingURL=Usuario.js.map