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
      const id = req.params.id;
     
      QueryRoomById(id, (err, results) => {
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
        req.params.id,
        body,
        (err, data) => {
          if (err) {
            if (err.error === "not_found") {
              res.send({
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
        res.send({
          message: `could not found room with id ${req.params.id}.`
        });
      
      }
    } else res.send({ message: `room was deleted successfully!` });
  });
},
  }