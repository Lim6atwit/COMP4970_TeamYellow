import axios from 'axios';

class Database_Facade {
    
    verifySession(session) {
        return (verifyTimeslot(session.timeslot) && this.verifyRoom(session.room) && verifySpeaker(session.speaker));
    }

    verifyTimeslot(timeslot) {
        function verifyTimeFormat(time){
            var timeFormat = /[0-2][0-9]:[0-5][0-9]/;
            if (time.match(timeFormat)) {
                alert("Please enter using alphanumeric characters only");
                return (false);
            }
            else {
                return (true);
            }
        }
        function verifyTimeOverlap(startTime,endTime){
            var startHour = Number(startTime.substr(0,2));
            var startMinute = Number(startTime.substr(3,2));
            
            var endHour = Number(endTime.substr(0,2));
            var endMinute = Number(endTime.substr(3,2));

            if(endHour<startHour){
                alert("Start time is after end time");
                return false;
            }else if(endHour==startHour){
                if(endMinute<startMinute){
                    alert("Start time is after end time");
                    return false;
                }
            }
            return true;
        }

        return (verifyTimeFormat(timeslot.startTime) && verifyTimeFormat(timeslot.endTime) && verifyTimeOverlap(timeslot.startTime, timeslot.endTime));
    }

    verifyRoom(room) {
        function verifySeatCount(seatCount) {
            if (seatCount > 0) {
                return (true);
            }
            else {
                alert("seatcount cannot be <=0")
                return (false);
            }
        }
        function verifyRoomName(roomName) {
            var illegalCharacters = /[\(\)\{\}\[\]<>?;:,?\/*+:!@#$%^_="|\\~`]/;
            if (roomName.match(illegalCharacters)) {
                alert("Please enter using alphanumeric characters only");
                return (false);
            }
            else {
                return (true);
            }
        }

        return (verifySeatCount(room.seatCount) && verifyRoomName(room.roomName))
    }

    verifySpeaker(speaker) {
        function verifyPhone(number) {
            var phoneformat = /^+\d{11}$/;
            var builtPhoneNumber="";
            for(var i=0;i<number.length;i++){
                if(number.substr(i,1).match(/\d/)){
                    builtPhoneNumber+=number.substr(i,1);
                }
            }
            if(builtPhoneNumber.length==10){builtPhoneNumber=`+1${builtPhoneNumber}`;}

            if (builtPhoneNumber.value.match(phoneformat)) {
                return (true);

            }
            else {
                alert("Please enter numerical characters only");
                return (false);
            }
        }

        function verifyName(name) {
            var illegalCharacters = /[(){}[]<>?;:,?\/*+!@#$%^&_="|\\~`]+/;
            if (name.value.match(illegalCharacters)) {
                alert("Please input alphanumeric characters only");
                return (false);
            }
            else {
                return (true);
            }

        }

        function verifyEmail(email) {
            var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(String(email).toLowerCase());
            if (email.value.match(emailformat)) {
                return (true);

            }
            else {
                alert("You have entered an invalid email address!");
                return (false);
            }
        }

        return (verifyPhone(speaker.cellPhone) && verifyPhone(speaker.dayPhone) && verifyName(speaker.speakerName) && verifyEmail(speaker.email))
    }


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
