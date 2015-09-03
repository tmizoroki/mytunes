// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,


  initialize: function() {
    
  },

  playFirst: function() {
    //We should do an undefined check here too
    this.at(0).play();
  }

});