import dotenv from "dotenv"
import express from "express"
import cors from "cors"

import environments from "../config/environments.js"
import connectToMongoDB from "./databases/mongoose.db.js"

import cartRouter from './routers/cart.router.js'
import bookRouter from './routers/book.router.js'
import userRouter from './routers/user.router.js'
dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());

app.use(bookRouter)
app.use(userRouter)
app.use(cartRouter)

const PORT = environments.PORT;
app.listen(PORT, async() => {
    console.log(`Server is running on PORT: ${PORT}`)

    await connectToMongoDB()
});