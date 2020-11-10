const {
    InsertRoom,
    QueryRoomById,
    QueryRoom,
    ModifyRoomById,
    deleteRoom,
    
  } 
  = require("./room.service");
  
  module.exports = {
    Insert: (req, res) => {
      const body = req.body;
      InsertRoom(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    
    QueryRoomById: (req, res) => {
      const id = req.params.id;
      QueryRoomById(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not Found"
          });
        }
       
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    QueryRoom: (req, res) => {
      QueryRoom((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    ModifyRoomById: (req, res) => {
      const body = req.body;
      if (!req.body) {
        res.status(400).send({
          message: "Room can not be empty!"
        });
      }
      
      ModifyRoomById(
        req.params.id,
        body,
        (err, data) => {
          if (err) {
            if (err.error === "not_found") {
              res.status(404).send({
                message: `Not found room with id ${req.params.id}.`
              });
            
            }
          } else res.send(data);
        }
      );
    },
       
    deleteRoom:(req, res) => {
  deleteRoom(req.params.id, (err, data) => {
    if (err) {
      if (err.error === "not_found") {
        res.status(404).send({
          message: `could not found room with id ${req.params.id}.`
        });
      
      }
    } else res.send({ message: `room was deleted successfully!` });
  });
},
  }
