// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,


  initialize: function() {
    this.on("add", function(){
      if (this.length === 1){
        this.playFirst();
      }
      
    }, this);


    this.on("ended", function(){
      this.dequeue();
    }, this);

    this.on("enqueue", function(songModelInstance){
      this.add(songModelInstance);
    }, this);

    this.on("dequeue", function(songModelInstance){
      this.dequeue();
    }, this);

    this.on("removeSong", function(songModelInstance){
      this.removeSong(songModelInstance);
    }, this);




    //How does a collection detect "alerts" from its models
      //What should it listen to?
  },

  playFirst: function() {
    //We should do an undefined check here too
      this.at(0).play();
  },

  dequeue: function(){
      this.remove(this.at(0));
        //We think it'll re-order [it did.]
      if (this.length > 0){
        this.playFirst();        
      }

  },

  removeSong: function(model){
        //We think it'll re-order [it did.]
      if (model){
        this.remove(model);
      }

  },


});