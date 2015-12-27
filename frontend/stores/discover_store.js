var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/dispatcher");
var AppConstants = require("../constants/app_constants");
var ActionTypes = AppConstants.ActionTypes;

var _tracks = [];
var DiscoverStore = new Store(AppDispatcher);

DiscoverStore.__onDispatch = function (payload) {
  var actionType = payload.actionType;
  var response = payload.response;

  switch (actionType) {

    case ActionTypes.DISCOVER_TRACKS_RECEIVED:
      resetTracks(response);
      break;

    case ActionTypes.ADDITIONAL_DISCOVER_TRACKS_RECEIVED:
      appendTracks(response);
      break;

  };
};

DiscoverStore.all = function () {
  return _tracks.slice();
};

var resetTracks = function (tracks) {
  _tracks = tracks;

  DiscoverStore.__emitChange();
};

var appendTracks = function (tracks) {
  _tracks.push(tracks);

  DiscoverStore.__emitChange();
};

module.exports = DiscoverStore;