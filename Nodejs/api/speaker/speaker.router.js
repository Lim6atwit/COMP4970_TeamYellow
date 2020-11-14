const router = require("express").Router();

const {
  Insert,
  QuerySpeakerById,
  QuerySpeaker,
  ModifySpeakerById,
  deleteSpeaker,
  QuerySpeakerSorted,

} = require("./speaker.controller");
// Insert a speaker
router.post("/", Insert);

// Retrieve all Speakers
router.get("/", QuerySpeaker);
router.get("/sortedspeaker/",QuerySpeakerSorted );



// Retrieve a single Speaker with roomid
router.get("/:id", QuerySpeakerById);

// Update a speaker with speakerid
router.put("/:id", ModifySpeakerById);

// Delete a speaker with id
router.delete("/:id", deleteSpeaker);

module.exports = router; 