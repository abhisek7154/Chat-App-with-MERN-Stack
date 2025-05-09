import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req , res) => {
    // root route http://localhoast:5000/
    res.send("Hello world!!!");
})

app.use("/api/auth" , authRoutes);



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));