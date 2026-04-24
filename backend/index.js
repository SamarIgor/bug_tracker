import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is up");
});

app.listen(5000, () => {
    console.log("Sever is running on port 5000");
});