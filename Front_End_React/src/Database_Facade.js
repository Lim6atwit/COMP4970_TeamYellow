import axios from 'axios';

class Database_Facade {
    
    verifySession(session) { return true}
    verifyTimeslot(timeslot) { return true}
    verifyRoom(room) { return true}
    verifySpeaker(speaker) { return true}
    


    async insertSession(session) {

        let response = await axios.post('http://localhost:4000/api/session/', session);
        return response.data; 
          
      }

    async insertTimeslot(timeslot) {
        
        let response = await axios.post('http://localhost:4000/api/timeslot/', timeslot);
        return response.data; 
            
        }
       
    
    async insertRoom(room) {
    
        let response = await axios.post('http://localhost:4000/api/room/', room);
        return response;
           
    }
    
    async insertSpeaker (speaker) {
        let response = await axios.post('http://localhost:4000/api/speaker/', speaker);
        return response;
            
    } 
    

    async modifySession(session, sessionId) {

        let response = await axios.put(`http://localhost:4000/api/session/${sessionId}`, session);
        return response;
            
            
    }
    
    async modifyTimeslot(timeslot, timeslotId) {
    
        let response = await axios.put(`http://localhost:4000/api/timeslot/${timeslotId}`, timeslot);
        return response;
            
    }
    
    async modifyRoom(room, roomId) {
    
        let response = await axios.put(`http://localhost:4000/api/room/${roomId}`, room);
        return response;
            
    }
    
    async modifySpeaker(speaker, speakerId) {
    
        let response = await axios.put(`http://localhost:4000/api/speaker/${speakerId}`, speaker);
        return response;
            
    }

    async removeSession(sessionId) {

        let response = await axios.delete(`http://localhost:4000/api/session/${sessionId}`);
        return response;
    }

    async removeTimeslot(timeslotId) {
    
        let response = await axios.delete(`http://localhost:4000/api/timeslot/${timeslotId}`);
        return response;
            
    }
    
    async removeRoom(roomId) {
    
        let response = await axios.delete(`http://localhost:4000/api/room/${roomId}`);
        return response;
            
    }
    
    async removeSpeaker(speakerId) {
    
        let response = await axios.delete(`http://localhost:4000/api/speaker/${speakerId}`)
        return response;
            
    }
    
    
    

    async querySessions() {

        let response = await axios.get(`http://localhost:4000/api/session/`);
        return response.data;
    }



    async queryTimeslots() {
        
    
        let response = await axios.get(`http://localhost:4000/api/timeslot/`)
        return response.data;
            
    }
    
    async queryRooms() {
    
        let response = await axios.get(`http://localhost:4000/api/room/`);
        return response.data;
        
    }
    
    async querySpeakers() {
    
        let response = await axios.get(`http://localhost:4000/api/speaker/`)
        return response.data;
            
    }
    
    
    

    async querySession(sessionId) {
    
        let response = await axios.get(`http://localhost:4000/api/session/${sessionId}`)
        return response.data;
            
    }

    async queryTimeslot(timeslotId) {
    
        let response = await axios.get(`http://localhost:4000/api/timeslot/${timeslotId}`)
        return response.data;
            
    }
    
    async queryRoom(roomId) {
    
        let response = await axios.get(`http://localhost:4000/api/room/${roomId}`)
        return response.data;
    }
    
    async querySpeaker(speakerId) {
    
        let response = await axios.get(`http://localhost:4000/api/speaker/${speakerId}`)
        return response.data;
    }
    
    
    

    async querySessionsByTimeslot() {

        //let response = await axios.get(`http://localhost:4000/api/speaker/${speakerId}`)
        //return response.data;
    }
    async querySessionsByRoom() {
        
    
        //let response = await axios.get(`http://localhost:4000/api/room/sortedroom`)
        //return response.data;
            
    }
    async querySessionsBySpeaker() {

        //let response = await axios.get(`http://localhost:4000/api/speaker/${speakerId}`)
        //return response.data;
    }

    async dbExists() {
        let response = await axios.get(`http://localhost:4000/api/room`)
            .then(function(response) {

            return true
            })
            
            .catch(function(error) {
            
            console.log(error);
            return false;
            });
        return response;   
    }
}

export default Database_Facade;

/*
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
*/
