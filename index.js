const express=require("express")
const app=express();
const mongo=require("./shared/connect")
const hallRouter=require("./routes/room")
const dotenv=require("dotenv")
dotenv.config();

// to convert req.body to json format
app.use(express.json())

mongo.connect()
console.log(mongo)
app.use('/roomdetail',hallRouter);
app.use('/bookroom',hallRouter);
app.use('/getroomdetails',hallRouter);
app.listen(3002);
