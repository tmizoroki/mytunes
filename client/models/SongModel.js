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

  },

  ended: function() {

    console.log("SongModel: Song ended");
    this.trigger("ended", this);

    //Do we reference the COLLECTION?
      //by some mechanism this hits: dequeue => dequeue moves songs to new positions => playFirst();
  },

  dequeue: function(){
    console.log("From SongModel: dequeue actually fired")
    //Add this instance to SongQueue
    this.trigger('dequeue', this);

  },

  removeSong: function(){
    console.log("From SongModel: removeSong actually fired")
    //Add this instance to SongQueue
    this.trigger('removeSong', this);

  }


});
