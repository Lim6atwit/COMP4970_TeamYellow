import {Database_Facade} from "./Database_Facade.js";

class Event {
    
    constructor() {}

    addSession(session) {
        if(Database_Facade.verifySession(session)) {
        
            if(Database_Facade.insertSession(session)) {
                return Database_Facade.querySessions();
            }
            return null;
        }
        return null;
    }

    addTimeslot(timeslot) {
        if(Database_Facade.verifyTimeslot(timeslot)) {
        
            if(Database_Facade.insertTimeslot(timeslot)) {
                return Database_Facade.queryTimeslots();
            }
            return null;
        }
        return null;
    }

    addRoom(room) {
        if(Database_Facade.verifyRoom(room)) {
        
            if(Database_Facade.insertRoom(room)) {
                return Database_Facade.queryRooms();
            }
            return null;
        }
        return null;
    }

    addSpeaker(speaker) {
        if(Database_Facade.verifySpeaker(speaker)) {
        
            if(Database_Facade.insertSpeaker(speaker)) {
                return Database_Facade.querySpeakers();
            }
            return null;
        }
        return null;
    }
        

    editSession(session, sessionId) {
        if(Database_Facade.verifySession(session)) {
        
            if(Database_Facade.modifySession(session, sessionId)) {
                return Database_Facade.querySessions();
            }
            return null;
        }
        return null;
    }

    editTimeslot(timeslot, timeslotId) {
        if(Database_Facade.verifyTimeslot(timeslot)) {
        
            if(Database_Facade.modifyTimeslot(timeslot, timeslotId)) {
                return Database_Facade.queryTimeslots();
            }
            return null;
        }
        return null;
    }

    editRoom(room, roomId) {
        if(Database_Facade.verifyRoom(room)) {
        
            if(Database_Facade.modifyRoom(room, roomId)) {
                return Database_Facade.queryRooms();
            }
            return null;
        }
        return null;
    }

    editSpeaker(speaker, speakerId) {
        if(Database_Facade.verifySpeaker(speaker)) {
        
            if(Database_Facade.modifySpeaker(speaker, speakerId)) {
                return Database_Facade.querySpeakers();
            }
            return null;
        }
        return null;
    }


    removeSession(sessionId) {
        if(Database_Facade.removeSession(sessionId)) {
            return Database_Facade.querySessions();
        }
        return null;
       
    }

    removeTimeslot(timeslotId) {
        if(Database_Facade.removeTimeslot(timeslotId)) {
            return Database_Facade.queryTimeslots();
        }
        return null;
    }

    removeRoom(roomId) {
        if(Database_Facade.removeRoom(roomId)) {
            return Database_Facade.queryRooms();
        }
        return null;
    }

    removeSpeaker(speakerId) {
        if(Database_Facade.removeSpeaker(speakerId)) {
            return Database_Facade.querySpeakers();
        }
        return null;
    }


    retrieveSessions() {
        return Database_Facade.querySessions();
    }

    retrieveTimeslots() {
        Database_Facade.queryTimeslots();
    }

    retrieveRooms() {
        Database_Facade.queryRooms();
    }

    retrieveSpeakers() {
        Database_Facade.querySpeakers();
    }


    retrieveSession(sessionId) {
        Database_Facade.querySession(sessionId);
    }

    retrieveTimeslot(timeslotId) {
        Database_Facade.queryTimeslot(timeslotId);
    }

    retrieveRoom(roomId) {
        Database_Facade.queryRoom(roomId);
    }

    retrieveSpeaker(speakerId) {
        Database_Facade.querySpeaker(speakerId);
    }


    retrieveSessionsByTimeslot() {
        Database_Facade.querySessionsByTimeslot();
    }

    retrieveSessionsByRoom() {
        Database_Facade.querySessionsByRoom();
    }

    retrieveSessionsBySpeaker() {
        Database_Facade.querySessionsBySpeaker();
    }
}
