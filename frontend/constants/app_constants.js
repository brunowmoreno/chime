var keyMirror = require("keymirror");

module.exports = {

  ActionTypes: keyMirror({
    // Search
    SEARCH_RESULTS_RECEIVED: null,

    // Session
    LOGIN_RESPONSE: null,
    LOGOUT_RESPONSE: null,
    CLIENT_RECEIVED: null,

    // Sign Up
    SHOW_SIGN_UP_MODAL: null,
    CLOSE_SIGN_UP_MODAL: null,

    // Login
    SHOW_LOGIN_MODAL: null,
    CLOSE_LOGIN_MODAL: null,

    // Upload
    SHOW_UPLOAD_MODAL: null,
    PUBLIC_URL_RECEIVED: null,
    DIRECT_UPLOAD_PROGRESS_RECEIVED: null,
    DIRECT_UPLOAD_SUCCESS_RECEIVED: null,
    RESET_UPLOAD_STORE: null,

    // User
    USER_RECEIVED: null,

    // Track
    TRACKS_RECEIVED: null,
    TRACK_RECEIVED: null,
    NEW_TRACK_RECEIVED: null,

    // Playlist
    PLAYLISTS_RECEIVED: null,
    PLAYLIST_RECEIVED: null,

    // Playlisting
    PLAYLISTING_RECEIVED: null,

    // Player
    PLAY_AUDIO: null,
    PAUSE_AUDIO: null,
    SEEK_TO: null,
    ADJUST_VOLUME_TO: null,

    PLAY_TRACK_NOW: null,
    PLAY_NEXT_TRACK: null,
    PLAY_PREVIOUS_TRACK: null,
    AUTO_PLAY_TRACK: null,
    ADD_TRACK_TO_QUEUE: null,
    LOAD_PLAYLIST: null,

    // Audio
    AUDIO_SET_TO_PLAYING: null,
    AUDIO_SET_TO_PAUSED: null,
    AUDIO_SET_TO_ENDED: null,
    AUDIO_CURRENT_TIME_RECEIVED: null,
    AUDIO_VOLUME_RECEIVED: null,
    AUDIO_DURATION_RECEIVED: null
  })

};
