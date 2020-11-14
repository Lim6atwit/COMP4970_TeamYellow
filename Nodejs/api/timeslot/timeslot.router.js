const router = require("express").Router();

const {
  Insert,
  
  QueryTimeslotById,
  QueryTimeslots,
  ModifyTimeslotById,
  deleteTimeslot,
 

 
} = require("./timeslot.controller");

router.post("/", Insert);

// Retrieve all Rooms
router.get("/", QueryTimeslots);




// Retrieve a single Room with roomid
router.get("/:id", QueryTimeslotById);

// Update a room with roomid
router.put("/:id", ModifyTimeslotById);

// Delete a room with id
router.delete("/:id", deleteTimeslot);


module.exports = router; 