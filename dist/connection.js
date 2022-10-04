"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const seriesAPI_1 = __importDefault(require("./api/seriesAPI"));
const usuariosAPI_1 = __importDefault(require("./api/usuariosAPI"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use("/api/users", usuariosAPI_1.default);
app.use("/api/series", seriesAPI_1.default);
// localhost:27017
const uri = "mongodb://localhost:27017/SeriesDB";
const db = mongoose_1.default.connection;
mongoose_1.default.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    // tslint:disable-next-line:no-console
    .then(() => app.listen(3000, () => console.log('server running on port 3000')))
    // tslint:disable-next-line:no-console
    .catch(err => console.log(err));
//# sourceMappingURL=connection.js.map