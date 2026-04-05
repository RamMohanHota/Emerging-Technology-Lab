import 'dotenv/config';
import express from 'express';


import connectToDB from './utils/debugger.js';
import userRouter from './routers/user.router.js'

const app = express();
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.use("/users", userRouter);

app.listen(5000, ()=>{
    console.log("Server started at 5000");
    connectToDB();
})

