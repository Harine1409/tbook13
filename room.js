var express = require("express");
var router = express.Router();
var RoomModule = require('../module/roommodule');
router.get("/get", RoomModule.getRoomDetails);//http://localhost:3002/roomdetail/get
router.put("/book", RoomModule.bookroom);       //http://localhost:3002/bookroom/book
router.get("/getroomdetails", RoomModule.bookedroomdetails); //http://localhost:3002/getroomdetails/getroomdetails




module.exports=router;