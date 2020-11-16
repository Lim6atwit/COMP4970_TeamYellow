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


    insertSession(session) {
        session =
        {

            "start_time": "",

            "end_time": ""
        }
    }

    insertTimeslot(timeslot) {
        timeslot =
        {

            "start_time": "",

            "end_time": ""
        }

        axios.post('http://localhost:4000/api/timeslot/', timeslot,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return true;
            })

            .catch(function (error) {

                console.log(error);
                return false;
            });

    }


    insertRoom(room) {

        room =
        {

            "roomName": "",

            "capacity": ""
        }

        axios.post('http://localhost:4000/api/room/', room,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return true;

            })

            .catch(function (error) {

                console.log(error);
                return false;

            });

    };

    insertSpeaker(speaker) {
        speaker =
        {

            "email": "",

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
            .then(function (response) {

                console.log(response);
                return true;

            })

            .catch(function (error) {

                console.log(error);
                return false;

            });

    };


    modifySession(sessionId) {

    }
    modifyTimeslot(timeslotId) {

        axios.put(`http://localhost:4000/api/timeslot/${timeslotId}`,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return true;

            })

            .catch(function (error) {

                console.log(error);
                return false;
            });

    };

    modifyRoom(roomId) {
        const body = {

            "roomName": "",

            "capacity": ""
        }

        axios.put(`http://localhost:4000/api/room/${roomId}`, body,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return true;
            })

            .catch(function (error) {

                console.log(error);
                return false;
            });

    };

    modifySpeaker(speakerId) {

        axios.put(`http://localhost:4000/api/speaker/${speakerId}`,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return true;
            })

            .catch(function (error) {

                console.log(error);
                return false;
            });

    };



    removeSession(sessionId) { }
    removeTimeslot(timeslotId) {

        axios.delete(`http://localhost:4000/api/timeslot/${timeslotId}`,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return true;
            })

            .catch(function (error) {

                console.log(error);
                return false;
            });

    };

    removeRoom(roomId) {

        axios.delete(`http://localhost:4000/api/room/${roomId}`,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return true;
            })

            .catch(function (error) {

                console.log(error);
                return false;
            });

    };

    removeSpeaker(speakerId) {

        axios.delete(`http://localhost:4000/api/speaker/${speakerId}`,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return true;
            })

            .catch(function (error) {

                console.log(error);
                return false;
            });

    };




    querySessions() { }
    queryTimeslots() {


        axios.get(`http://localhost:4000/api/timeslot/`,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return response;
            })

            .catch(function (error) {

                console.log(error);
                return null;
            });

    };

    queryRooms() {
        const body = {

            "roomName": "",

            "capacity": ""
        }

        axios.get(`http://localhost:4000/api/room/`, body,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return response;
            })

            .catch(function (error) {

                console.log(error);
                return null;
            });

    };

    querySpeakers() {
        const body =
        {

            "email": "",

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
            .then(function (response) {

                console.log(response);
                return response;
            })

            .catch(function (error) {

                console.log(error);
                return null;
            });

    };




    querySession(sessionId) {
        const body =
        {

            "session name": "",

            "timeslotId": "",

            "roomId": "",

            "SpeakerId": ""
        }

        axios.get(`http://localhost:4000/api/session/${sessionId}`, body,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return response;
            })

            .catch(function (error) {

                console.log(error);
                return null;
            });

    }

    queryTimeslot(timeslotId) {
        const body = {

            "start_time": "",

            "end_time": ""
        }

        axios.get(`http://localhost:4000/api/timeslot/${timeslotId}`, body,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return response;
            })

            .catch(function (error) {

                console.log(error);
                return null;
            });

    }

    queryRoom(roomId) {
        const body =
        {

            "roomName": "",

            "capacity": ""
        }

        axios.get(`http://localhost:4000/api/room/${roomId}`, body,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return response;
            })

            .catch(function (error) {

                console.log(error);
                return null;
            });

    }

    querySpeaker(speakerId) {
        const body =
        {

            "email": "",

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
            .then(function (response) {

                console.log(response);
                return response;
            })

            .catch(function (error) {

                console.log(error);
                return null;
            });

    }




    querySessionsByTimeslot() { }
    querySessionsByRoom() {
        const body = {

            "roomName": "",

            "capacity": ""
        }

        axios.get(`http://localhost:4000/api/room/sortedroom`, body,
            {


                "headers": {

                    "content-type": "application/json",

                },

            })
            .then(function (response) {

                console.log(response);
                return response;
            })

            .catch(function (error) {

                console.log(error);
                return null;
            });

    }
    querySessionsBySpeaker() { }

    dbExists() { }
}
