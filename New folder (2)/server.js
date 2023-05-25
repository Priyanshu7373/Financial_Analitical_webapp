import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import transaction from "./backend/routes/transaction.js";
import user from "./backend/routes/user.js";
const app = express();
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1", {
    dbName: 'finance-manager',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
}).then(() => {
    console.log("connected to server")
}).catch((err) => {
    console.log(err)
})
app.use(cookieParser());
app.use(transaction);
app.use(user);

app.get('/api', (req, res) => {
    res.send(
        [
            { message: "hello", party: "yes" },
             { message: "hi", party: "no" }, ]);
})
app.listen(4000, () => {
    console.log("port started");
})