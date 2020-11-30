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
          return res.json({
            
            message: "Database connection errror"
          });
        }
        return res.json(body);
         
      });
    },
    
    QueryRoomById: (req, res) => {
      const room_id = req.params.room_id;
     
      QueryRoomById(room_id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
           
            message: "Record not Found"
          });
        }
       
        return res.json(results);
        
         
         
        
      });
    },
    QueryRoom: (req, res) => {
      QueryRoom((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json(results);
          
         
      });
    },

    ModifyRoomById: (req, res) => {
      const body = req.body;
      if (!req.body) {
        res.send({
          message: "Room can not be empty!"
        });
      }
      
      ModifyRoomById(
        req.params.room_id,
        body,
        (err, data) => {
          if (err) {
            if (err.error === "not_found") {
              res.send({
                message: `Not found room with room_id ${req.params.room_id}.`
              });
            
            }
          } else res.send(data);
        }
      );
    },
       
    deleteRoom:(req, res) => {
  deleteRoom(req.params.room_id, (err, data) => {
    if (err) {
      if (err.error === "not_found") {
        res.send({
          message: `could not found room with room_id ${req.params.room_id}.`
        });
      
      }
    } else res.send({ message: `room was deleted successfully!` });
  });
},
  }
