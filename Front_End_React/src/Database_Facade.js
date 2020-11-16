import axios from 'axios';

class Database_Facade {
    
    verifySession(session) { return true}
    verifyTimeslot(timeslot) { return true}
    verifyRoom(room) { return true}
    verifySpeaker(speaker) { return true}


    insertSession(session) 
      {
        axios.post('http://localhost:4000/api/session/', session,
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

    insertTimeslot(timeslot)
     {
   
       axios.post('http://localhost:4000/api/timeslot/', timeslot,)
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

    return axios.post('http://localhost:4000/api/room/', room)
        .then(function(response) {
        
        console.log(response);  
        
        })
        
        .catch(function(error) {
        
        console.log(error);
        
        });
        
        }
    
    insertSpeaker (speaker) 
    {
    
        return axios.post('http://localhost:4000/api/speaker/', speaker)
            .then(function(response) {
            
            console.log(response);
            return true;
            
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            
            });
            
            }; 
    

    modifySession(session, sessionId)
    {
        return axios.put(`http://localhost:4000/api/session/${sessionId}`, session)
            .then(function(response) {
            
            console.log(response);
            return true;
            
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            });
            
            
    }
    
    modifyTimeslot(timeslot, timeslotId) 
    {
    
        axios.put(`http://localhost:4000/api/timeslot/${timeslotId}`, timeslot)
            .then(function(response) {
            
            console.log(response);
            return true;
            
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            });
            
            };
    
    modifyRoom(room, roomId) 
    {
    
        axios.put(`http://localhost:4000/api/room/${roomId}`, room)
            .then(function(response) {
            
            console.log(response);
            return true;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            });
            
            };
    
    modifySpeaker(speaker, speakerId) 
    {
    
        axios.put(`http://localhost:4000/api/speaker/${speakerId}`, speaker)
            .then(function(response) {
            
            console.log(response);
            return true;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            });
            
            };
    
    

    removeSession(sessionId) {
        axios.delete(`http://localhost:4000/api/session/${sessionId}`)
            .then(function(response) {
            
            console.log(response);
            return true;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
        });
    }
    removeTimeslot(timeslotId) 
    {
    
        axios.delete(`http://localhost:4000/api/timeslot/${timeslotId}`)
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
    
        axios.delete(`http://localhost:4000/api/room/${roomId}`)
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
    
        axios.delete(`http://localhost:4000/api/speaker/${speakerId}`)
            .then(function(response) {
            
            console.log(response);
            return true;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            });
            
            };
    
    
    

    querySessions() {

        axios.get(`http://localhost:4000/api/session/`)
            .then(function(response) {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return null;
        });
    }



    queryTimeslots() 
    {
        
    
        axios.get(`http://localhost:4000/api/timeslot/`)
            .then(function(response) {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return null;
        });
            
     }
    
    queryRooms() 
    {
    
        return axios.get(`http://localhost:4000/api/room/`)
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
    
        axios.get(`http://localhost:4000/api/speaker/`)
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
    
        axios.get(`http://localhost:4000/api/session/${sessionId}`)
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
    
        axios.get(`http://localhost:4000/api/timeslot/${timeslotId}`)
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
    
        axios.get(`http://localhost:4000/api/room/${roomId}`)
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
    
        axios.get(`http://localhost:4000/api/speaker/${speakerId}`)
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
        
    
        axios.get(`http://localhost:4000/api/room/sortedroom`)
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

    dbExists() {
        axios.get(`http://localhost:4000/api/room`)
            .then(function(response) {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return null;
            });
            
    }
}

export default Database_Facade;
