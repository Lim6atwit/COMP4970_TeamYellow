class Database_Facade {
    verifySession(session) {
        /*
         *
         *
         */
    }
    verifyTimeslot(timeslot) {
        /*
         * - verify that:
         *     Timeslot name doesn't contain any problematic characters
         *     the start and end time are properly formatted
         *     the end time is after the start time
         *   returns true if all of these are verified, false otherwise
         */
    }
    verifyRoom(room) {
        /*
         * - verify that:
         *     the Room name doesn't contain any problematic characters
         *     the Room capacity is > 0
         *   returns true if all of these are verified, false otherwise
         */
    }
    verifySpeaker(speaker) {
        /*
         * - verify that:
         *       the Speaker's name, cellphone, and dayphone don't contain any problematic characters
         *       Email is properly formatted
         *       Cellphone and Dayphone follow the proper format
         *   returns true if all of these are verified, false otherwise
         */
    }

    insertSession(session) {}
    insertTimeslot(timeslot) {}
    insertRoom (room) {}
    insertSpeaker (speaker) {}

    modifySession(sessionId) {}
    modifyTimeslot(timeslotId) {}
    modifyRoom(roomId) {}
    modifySpeaker(speakerId) {}

    removeSession(sessionId) {}
    removeTimeslot(timeslotId) {}
    removeRoom(roomId) {}
    removeSpeaker(speakerId) {}

    querySessions() {}
    queryTimeslots() {}
    queryRooms() {}
    querySpeakers() {}

    querySession(sessionId) {}
    queryTimeslot(timeslotId) {}
    queryRoom(roomId) {}
    querySpeaker(speakerId) {}

    querySessionsByTimeslot() {}
    querySessionsByRoom() {}
    querySessionsBySpeaker() {}

    dbExists() {}
}