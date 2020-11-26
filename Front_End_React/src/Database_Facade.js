import axios from 'axios';

class Database_Facade {

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
            var phoneformat = /^\+\d{11}$/;
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

    verifySession(session) {
        //room_id, speaker_id, timeslot_id
        var room = this.queryRoom(session.room_id);
        var timeslot = this.queryTimeslot(session.room_id);
        var speaker = this.querySpeaker(session.room_id);
        
        return (this.verifyTimeslot(timeslot) && this.verifyRoom(room) && this.verifySpeaker(speaker));
    }


     insertSession(session) {

        return axios.post('http://localhost:4000/api/session/', session)
           .then(function(response) {
           
           console.log(response);
           
           })
           
           .catch(function(error) {
           
           console.log(error);
           
           });
      }

    insertTimeslot(timeslot) {
   
       return axios.post('http://localhost:4000/api/timeslot/', timeslot)
           .then(function(response) {
           
           console.log(response);
           
           })
           
           .catch(function(error) {
           
           console.log(error);
           
           });
           
        }
       
    
    insertRoom(room) {

        return axios.post('http://localhost:4000/api/room/', room)
            .then(function(response) {
        
            console.log(response);  
        
            })
        
            .catch(function(error) {
        
            console.log(error);
        
            });
        
    }
    
    insertSpeaker (speaker) {
    
        return axios.post('http://localhost:4000/api/speaker/', speaker)
            .then(function(response) {
            
            console.log(response);
            
            })
            
            .catch(function(error) {
            
            console.log(error);
            
            });
            
    } 
    

    modifySession(session, sessionId) {

        return axios.put(`http://localhost:4000/api/session/${sessionId}`, session)
            .then(function(response) {
            
            console.log(response);
            
            })
            
            .catch(function(error) {
            
            console.log(error);

            });
            
            
    }
    
    modifyTimeslot(timeslot, timeslotId) {
    
        return axios.put(`http://localhost:4000/api/timeslot/${timeslotId}`, timeslot)
            .then(function(response) {
            
            console.log(response);
            
            })
            
            .catch(function(error) {
            
            console.log(error);
    
            });
            
    }
    
    modifyRoom(room, roomId) {
    
        return axios.put(`http://localhost:4000/api/room/${roomId}`, room)
            .then(function(response) {
            
            console.log(response);
            
            })
            
            .catch(function(error) {
            
            console.log(error);
            
            });
            
    }
    
    modifySpeaker(speaker, speakerId) {
    
       return axios.put(`http://localhost:4000/api/speaker/${speakerId}`, speaker)
            .then(function(response) {
            
            console.log(response);
            
            })
            
            .catch(function(error) {
            
            console.log(error);
            
            });
            
    }

    removeSession(sessionId) {

        return axios.delete(`http://localhost:4000/api/session/${sessionId}`)
            .then(function(response) {
            
            console.log(response);
            
            })
            
            .catch(function(error) {
            
            console.log(error);
           
        });
    }

    removeTimeslot(timeslotId) {
    
        return axios.delete(`http://localhost:4000/api/timeslot/${timeslotId}`)
            .then(function(response) {
            
            console.log(response);
            
            })
            
            .catch(function(error) {
            
            console.log(error);
            
        });
            
    }
    
    removeRoom(roomId) {
    
        return axios.delete(`http://localhost:4000/api/room/${roomId}`)
            .then(function(response) {
            
            console.log(response);
          
            })
            
            .catch(function(error) {
            
            console.log(error);
           
            });
            
            };
    
    removeSpeaker(speakerId) {
    
        return axios.delete(`http://localhost:4000/api/speaker/${speakerId}`)
            .then(function(response) {
            
            console.log(response);

            })
            
            .catch(function(error) {
            
            console.log(error);
          
            });
            
            };
    
    
    

    querySessions() {

        return axios.get(`http://localhost:4000/api/session/`)
            .then(function(response) {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return null;
        });
    }



    queryTimeslots() {
        
    
        return axios.get(`http://localhost:4000/api/timeslot/`)
            .then(function(response) {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return null;
        });
            
     }
    
    queryRooms() {
    
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
    
    querySpeakers() {
    
        return axios.get(`http://localhost:4000/api/speaker/`)
            .then(function(response) {
            
            console.log(response);
            return response;
            })
            
            .catch(function(error) {
            
            console.log(error);
            return null;
            });
            
        }
    
    
    

    querySession(sessionId) {
    
        return axios.get(`http://localhost:4000/api/session/${sessionId}`)
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
    
        return axios.get(`http://localhost:4000/api/timeslot/${timeslotId}`)
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
    
        return axios.get(`http://localhost:4000/api/room/${roomId}`)
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
    
        return axios.get(`http://localhost:4000/api/speaker/${speakerId}`)
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
            }).catch(function(error) {
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
