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
router.get("/:timeslot_id", QueryTimeslotById);

// Update a room with roomid
router.put("/:timeslot_id", ModifyTimeslotById);

// Delete a room with timeslot_id
router.delete("/:timeslot_id", deleteTimeslot);


module.exports = router; 