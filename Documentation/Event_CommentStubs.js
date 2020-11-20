class Event {

    addSession(session) {
        /*
         * - verifies the session for input into the database via Database_Facade
         * - inserts session into the database via Database_Facade
         * - returns updated session list
         */
    }

    addTimeslot(timeslot) {
        /*
         * - verifies the timeslot for input into the database via Database_Facade
         * - inserts timeslot into the database via Database_Facade
         * - returns updated timeslot list
         */
    }

    addRoom(room) {
        /*
         * - verifies the room for input into the database via Database_Facade
         * - inserts room into the database via Database_Facade
         * - returns updated room list
         */
    }

    addSpeaker(speaker) {
        /*
         * - verifies the speaker for input into the database via Database_Facade
         * - inserts speaker into the database via Database_Facade
         * - returns updated speaker list
         */
    }


    editSession(session, sessionId) {
        /*
         * - verifies the new session for input into the database via Database_Facade
         * - modifies the session with the new attribute data via the sessionId via Database_Facade
         * - returns updated session list
         */
    }

    editTimeslot(timeslot, timeslotId) {
        /*
         * - verifies the new timeslot for input into the database via Database_Facade
         * - modifies the timeslot with the new attribute data via the timeslotId via Database_Facade
         * - returns updated timeslot list
         */
    }

    editRoom(room, roomId) {
        /*
         * - verifies the new room for input into the database via Database_Facade
         * - modifies the room with the new attribute data via the roomId via Database_Facade
         * - returns updated room list
         */
    }

    editSpeaker(speaker, speakerId) {
        /*
         * - verifies the new speaker for input into the database via Database_Facade
         * - modifies the speaker with the new attribute data via the speakerId via Database_Facade
         * - returns updated speaker list
         */
        }


    removeSession(sessionId) {
        /*
         * - removes a session from the database via sessionId
         *   by calling Database_Facade.removeSession
         * - returns updated session list or null if call fails
         */
    }

    removeTimeslot(timeslotId) {
        /*
         * - removes a timeslot from the database via timeslotId
         *   by calling Database_Facade.removeTimeslot
         * - returns updated timeslot list or null if call fails
         */
    }

    removeRoom(roomId) {
        /*
         * - removes a room from the database via roomId
         *   by calling Database_Facade.removeRoom
         * - returns updated room list or null if call fails
         */
    }

    removeSpeaker(speakerId) {
        /*
         * - removes a speaker from the database via speakerId
         *   by calling Database_Facade.removeSpeaker
         * - returns updated speaker list or null if call fails
         */
    }


    retrieveSessions() {
        // validates result of Database_Facade.querySessions
        // and returns result on validation success
    }

    retrieveTimeslots() {
        // validates result of Database_Facade.queryTimeslots
        // and returns result on validation success
    }

    retrieveRooms() {
        // validates result of Database_Facade.queryRooms
        // and returns result on validation success
    }

    retrieveSpeakers() {
        // validates result of Database_Facade.querySpeakers
        // and returns result on validation success
    }


    retrieveSession(sessionId) {
        // validates result of Database_Facade.querySession
        // and returns result on validation success
    }

    retrieveTimeslot(timeslotId) {
        // validates result of Database_Facade.queryTimeslot
        // and returns result on validation success
    }

    retrieveRoom(roomId) {
        // validates result of Database_Facade.queryRoom
        // and returns result on validation success
    }

    retrieveSpeaker(speakerId) {
        // validates result of Database_Facade.querySpeaker
        // and returns result on validation success
    }

    
    retrieveSessionsByTimeslot() {
        // validates list of sessions from the database sorted by timeslot
        // and returns result on validation success
    }

    retrieveSessionsByRoom() {
        // validates list of sessions from the database sorted by room
        // and returns result on validation success
    }

    retrieveSessionsBySpeaker() {
        // validates list of sessions from the database sorted by speaker
        // and returns result on validation success
    }
}
