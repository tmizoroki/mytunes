// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    console.log("From SongModel: enquue actually fired")
    //Add this instance to SongQueue
    this.trigger('enqueue', this);

  }

});
