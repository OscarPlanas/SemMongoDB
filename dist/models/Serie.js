"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const serieSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    chapters: {
        type: Number,
        default: 0
    }
});
exports.default = (0, mongoose_1.model)('Serie', serieSchema);
//# sourceMappingURL=Serie.js.map