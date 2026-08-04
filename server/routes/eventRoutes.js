const express=require("express");
const router=express.Router();


const {
getEvents,
getEvent,
createEvent
}=require("../controllers/eventController");


const verifyToken=require("../middleware/authMiddleware");

const isAdmin=require("../middleware/adminMiddleware");



router.get("/",getEvents);


router.get("/:slug",getEvent);



router.post(
"/",
verifyToken,
isAdmin,
createEvent
);



module.exports=router;