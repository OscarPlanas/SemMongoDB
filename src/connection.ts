import mongoose,{ConnectOptions} from "mongoose";
import seriesAPI from "./api/seriesAPI";
import usuariosAPI from "./api/usuariosAPI";
import express from "express";
const app = express();

app.use("/api/users", usuariosAPI);
app.use("/api/series", seriesAPI);

// localhost:27017
const uri = "mongodb://localhost:27017/SeriesDB";
const db = mongoose.connection;



mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions
)

    // tslint:disable-next-line:no-console
    .then(() => app.listen(3000, () => console.log('server running on port 3000')))
    // tslint:disable-next-line:no-console
    .catch(err => console.log(err));
