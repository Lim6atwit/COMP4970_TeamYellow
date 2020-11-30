import Database_Facade from "./Database_Facade.js";
import React, {Component} from 'react';


class UI_Facade extends Component{
    
    constructor(props) {
        super(props);
        this.state = { DB : new Database_Facade()};
    }

    render() {
        console.log('------------------ Rendered UI_Facade ------------------');
        return;
    }

    addSession(session) {
        if(this.state.DB.verifySession(session)) {
            
            this.state.DB.insertSession(session).then(response=> {
                return this.state.DB.querySessions();
            }); 
        }
        return null;
    }

    addTimeslot(timeslot) {
        if(this.state.DB.verifyTimeslot(timeslot)) {
            
            this.state.DB.insertTimeslot(timeslot).then(response => {
                return this.state.DB.queryTimeslots();
            });
        }
        return null;
    }

    addRoom(room) {
       if(this.state.DB.verifyRoom(room)) {
            
            this.state.DB.insertRoom(room).then(response => {
                return this.state.DB.queryRooms();
                
            });
        }
        return null;
    }

    addSpeaker(speaker) {
        if(this.state.DB.verifySpeaker(speaker)) {
            
            this.state.DB.insertSpeaker(speaker).then(response => {
                return this.state.DB.querySpeakers();
            });
        }
        return null;
    }
        

    editSession(session, sessionId) {
        if(this.state.DB.verifySession(session)) {
        
            this.state.DB.modifySession(session, sessionId).then(response => {
                return this.state.DB.querySessions();
            }); 
        }
        return null;
    }

     editTimeslot(timeslot, timeslotId) {
        if(this.state.DB.verifyTimeslot(timeslot)) {
        
            this.state.DB.modifyTimeslot(timeslot, timeslotId).then(response => {
                return this.state.DB.queryTimeslots();
            });
        }
        return null;
    }

    editRoom(room, roomId) {
        if(this.state.DB.verifyRoom(room)) {
        
            this.state.DB.modifyRoom(room, roomId).then(response => {
                return this.state.DB.queryRooms();
            });
        }
        return null;
    }

    editSpeaker(speaker, speakerId) {
        if(this.state.DB.verifySpeaker(speaker)) {
        
            this.state.DB.modifySpeaker(speaker, speakerId).then(response => {
                return this.state.DB.querySpeakers();
            });
        }
        return null;
    }


    removeSession(sessionId) {
        this.state.DB.removeSession(sessionId).then(response => {
            return this.state.DB.querySessions();
        });
       
    }

    removeTimeslot(timeslotId) {
        this.state.DB.removeTimeslot(timeslotId).then(response => {
            return this.state.DB.queryTimeslots();
        });
        return null;
    }

    removeRoom(roomId) {
        this.state.DB.removeRoom(roomId).then(response => {
            return this.state.DB.queryRooms();
        });
        return null;
    }

    removeSpeaker(speakerId) {
        this.state.DB.removeSpeaker(speakerId).then(response => {
            return this.state.DB.querySpeakers();
        });
        return null;
    }


    retrieveSessions() {
        return this.state.DB.querySessions();
    }

    retrieveTimeslots() {
        return this.state.DB.queryTimeslots();
    }

    retrieveRooms() {
        return this.state.DB.queryRooms();
    }

    retrieveSpeakers() {
        return this.state.DB.querySpeakers();
    }

    retrieveSession(sessionId) {
        return this.state.DB.querySession(sessionId);
    }

    retrieveTimeslot(timeslotId) {
        return this.state.DB.queryTimeslot(timeslotId);
    }

    retrieveRoom(roomId) {
        return this.state.DB.queryRoom(roomId);
    }

    retrieveSpeaker(speakerId) {
        return this.state.DB.querySpeaker(speakerId);
    }

    retrieveSessionsByTimeslot() {
        return this.state.DB.querySessionsByTimeslot();
    }

    retrieveSessionsByRoom() {
        return this.state.DB.querySessionsByRoom();
    }

    retrieveSessionsBySpeaker() {
        return this.state.DB.querySessionsBySpeaker();
    }
}

export default UI_Facade;
