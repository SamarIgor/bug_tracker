import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import users from "../models/users.js"

const SECRET = "ZuperKej"

//Register
export const register = async (req, res) => {
    const { email, password } = req.body;

    const newUser = {
        id: Date.now(),
        email, 
        password
    };

    users.push(newUser);

    res.json({ message: "Successfuly added new User" });
};

//Login
export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email)
    if(!user){
        return res.status(400).json({ message: "User with that email not found" });
    }

    if(user.password !== password){
        return res.status(400).json({ message: "Password not matching" });
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        SECRET,
        { expiresIn: "1h"}
    );

    res.json({ token });
};