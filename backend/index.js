import express from "express";
import cors from "cors";
import authRoutes from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(cors());

//routes
app.use("/api/auth", authRoutes);

// Middleware
import { authMiddleware } from "./middleware/authMiddleware.js";

app.get("/api/profile", authMiddleware, (req, res) => {
    res.json({ message: "Protected data", user: req.user });
});

app.get("/", (req, res) => {
    res.send("Server is up");
});

app.listen(5000, () => {
    console.log("Sever is running on port 5000");
});