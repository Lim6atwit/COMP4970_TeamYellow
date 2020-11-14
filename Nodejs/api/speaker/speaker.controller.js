const {
    InsertSpeaker,
    QuerySpeakerById,
    QuerySpeaker,
    ModifySpeakerById,
    deleteSpeaker,
    QuerySpeakerSorted,
    
  } 
  = require("./speaker.service");
  
  module.exports = {
    Insert: (req, res) => {
      const body = req.body;
      InsertSpeaker(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.json({
            
            message: "Database connection errror"
          });
        }
        return res.json(body);
        
          
        
      });
    },
    
    QuerySpeakerById: (req, res) => {
      const id = req.params.id;
      QuerySpeakerById(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
           
            message: "Record not Found"
          });
        }
       
        return res.json(results)
         
          
     
      });
    },
    QuerySpeaker: (req, res) => {
      QuerySpeaker((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json(results)
        
        
      });
    },
    QuerySpeakerSorted: (req, res) => {
      QuerySpeakerSorted((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json(results)
           
         
        });
      },
    ModifySpeakerById: (req, res) => {
      const body = req.body;
      if (!req.body) {
        res.send({
          message: "Speaker can not be empty!"
        });
      }
      
      ModifySpeakerById(
        req.params.id,
        body,
        (err, data) => {
          if (err) {
            if (err.error === "not_found") {
              res.send({
                message: `Not found speaker with id ${req.params.id}.`
              });
            
            }
          } else res.send(data);
        }
      );
    },
       
    deleteSpeaker:(req, res) => {
  deleteSpeaker(req.params.id, (err, data) => {
    if (err) {
      if (err.error === "not_found") {
        res.send({
          message: `could not found speaker with id ${req.params.id}.`
        });
      
      }
    } else res.send({ message: `speaker was deleted successfully!`});
  });
},
  }
