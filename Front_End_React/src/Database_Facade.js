class Database_Facade {
    
    verifySession(session) {}
    verifyTimeslot(timeslot) {}
    verifyRoom(room) {}
    verifySpeaker(speaker) {}


    insertSession(session) 
      {
        session = 
        {
   
           "start_time":"",
           
           "end_time": ""    
           }
      }

    insertTimeslot(timeslot)
     {
        timeslot = 
        {
   
           "start_time":"",
           
           "end_time": ""    
           }
   
       axios.post('http://localhost:4000/api/timeslot/', timeslot,
       {
           
   
           "headers": {
           
           "content-type": "application/json",
           
           },
           
           })
           .then(function(response) {
           
           console.log(response);
           return true;
           })
           
           .catch(function(error) {
           
           console.log(error);
           return false;
           });
           
           }
       
    
    insertRoom(room)
   {
    
     room = 
     {

        "roomName":"",
        
        "capacity": ""    
        }

    axios.post('http://localhost:4000/api/room/', room,
    {
        

        "headers": {
        
        "content-type": "application/json",
        
        },
        
        })
        .then(function(response) {
        
        console.log(response);
        return true;

        })
        
        .catch(function(error) {
        
        console.log(error);
        return false;
        
        });
        
        };
    
    insertSpeaker (speaker) 
    {
        speaker= 
        {

            "email":"",
            
            "cell_phone": "",
            "day_of_phone": "",
            "speaker_name": "" 
            }
    
         axios.post('http://localhost:4000/api/speaker/', speaker,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return true;
            
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            
            });
            
            }; 
    

    modifySession(sessionId)
    {
         
    }
    modifyTimeslot(timeslotId) 
    {
    
        axios.put(`http://localhost:4000/api/timeslot/${timeslotId}`,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return true;
            
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            });
            
            };
    
    modifyRoom(roomId) 
    {
       const body = {

            "roomName":"",
            
            "capacity": ""    
            }
    
        axios.put(`http://localhost:4000/api/room/${roomId}`, body,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return true;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            });
            
            };
    
    modifySpeaker(speakerId) 
    {
    
        axios.put(`http://localhost:4000/api/speaker/${speakerId}`,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return true;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            });
            
            };
    
    

    removeSession(sessionId) {}
    removeTimeslot(timeslotId) 
    {
    
        axios.delete(`http://localhost:4000/api/timeslot/${timeslotId}`,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return true;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            });
            
            };
    
    removeRoom(roomId)
     {
    
        axios.delete(`http://localhost:4000/api/room/${roomId}`,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return true;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            });
            
            };
    
    removeSpeaker(speakerId) 
    {
    
        axios.delete(`http://localhost:4000/api/speaker/${speakerId}`,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return true;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            });
            
            };
    
    
    

    querySessions() {}
    queryTimeslots() 
    {
        
    
        axios.get(`http://localhost:4000/api/timeslot/`,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return null;
            });
            
            };
    
    queryRooms() 
    {
        const body = {

            "roomName":"",
            
            "capacity": ""    
            }
    
        axios.get(`http://localhost:4000/api/room/`, body,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return null;
            });
            
            };
    
    querySpeakers() 
    {
        const body = 
        {

            "email":"",
            
            "cell_phone": "",
            "day_of_phone": "",
            "speaker_name": "" 
             
            }
    
        axios.get(`http://localhost:4000/api/speaker/`, body,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return null;
            });
            
            };
    
    
    

    querySession(sessionId) {
        const body = 
        {

            "session name":"",
            
            "timeslotId": "" ,
            
            "roomId": "",

            "SpeakerId": ""
            }
    
        axios.get(`http://localhost:4000/api/session/${sessionId}`, body,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) 
            {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error)
             {
            
            console.log(error);
            return null;
            });
            
        }

    queryTimeslot(timeslotId) {
        const body = {

            "start_time":"",
            
            "end_time": ""    
            }
    
        axios.get(`http://localhost:4000/api/timeslot/${timeslotId}`, body,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return null;
            });
            
            }
    
    queryRoom(roomId) {
        const body = 
        {

            "roomName":"",
            
            "capacity": ""    
            }
    
        axios.get(`http://localhost:4000/api/room/${roomId}`, body,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) 
            {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error)
             {
            
            console.log(error);
            return null;
            });
            
        }
    
    querySpeaker(speakerId) {
        const body =
         {

            "email":"",
            
            "cell_phone": "",
            "day_of_phone": "",
            "speaker_name": "" 
             
            }
    
        axios.get(`http://localhost:4000/api/speaker/${speakerId}`, body,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return null;
            });
            
            }
    
    
    

    querySessionsByTimeslot() {}
    querySessionsByRoom() {
        const body = {

            "roomName":"",
            
            "capacity": ""    
            }
    
        axios.get(`http://localhost:4000/api/room/sortedroom`, body,
        {
            
    
            "headers": {
            
            "content-type": "application/json",
            
            },
            
            })
            .then(function(response) {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return null;
            });
            
            }
    querySessionsBySpeaker() {}

    dbExists() {}
}
