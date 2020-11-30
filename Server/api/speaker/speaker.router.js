const router = require("express").Router();

const {
  Insert,
  QuerySpeakerById,
  QuerySpeaker,
  ModifySpeakerById,
  deleteSpeaker,
 

} = require("./speaker.controller");
// Insert a speaker
router.post("/", Insert);

// Retrieve all Speakers
router.get("/", QuerySpeaker);




// Retrieve a single Speaker with roomid
router.get("/:speaker_id", QuerySpeakerById);

// Update a speaker with speakerid
router.put("/:speaker_id", ModifySpeakerById);

// Delete a speaker with speaker_id
router.delete("/:speaker_id", deleteSpeaker);

module.exports = router; 
