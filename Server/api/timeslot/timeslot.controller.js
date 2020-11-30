const {
    InsertTimeslot,
    QueryTimeslotById,
    QueryTimeslots,
    ModifyTimeslotById,
    deleteTimeslot,
   
    
  } 
  = require("./timeslot.service");
  
  module.exports = {
    Insert: (req, res) => {
      const body = req.body;
      InsertTimeslot(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.json({
            
            message: "Database connection errror"
          });
        }
        return res.json(body);
          
      });
    },
    
    QueryTimeslotById: (req, res) => {
      const timeslot_id = req.params.timeslot_id;
      QueryTimeslotById(timeslot_id, (err, results) => {
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
    QueryTimeslots: (req, res) => {
      QueryTimeslots((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json(results);
         
       
      });
    },

    ModifyTimeslotById: (req, res) => {
      const body = req.body;
      if (!req.body) {
        res.send({
          message: "Timeslot can not be empty!"
        });
      }
      
      ModifyTimeslotById(
        req.params.timeslot_id,
        body,
        (err, data) => {
          if (err) {
            if (err.error === "not_found") {
              res.send({
                message: `Not found Timeslot with timeslot_id ${req.params.timeslot_id}.`
              });
            
            }
          } else res.send(data);
        }
      );
    },
       
    deleteTimeslot:(req, res) => {
  deleteTimeslot(req.params.timeslot_id, (err, data) => {
    if (err) {
      if (err.error === "not_found") {
        res.send({
          message: `could not found Timeslot with timeslot_id ${req.params.timeslot_id}.`
        });
      
      }
    } else res.send({ message: `Timeslot was deleted successfully!` });
  });
},
  }