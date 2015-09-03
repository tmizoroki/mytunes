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

    //How does a collection detect "alerts" from its models
      //What should it listen to?
  },

  playFirst: function() {
    //We should do an undefined check here too
    if (this.at(0)){
      this.at(0).play();  
    }
    
  },

  dequeue: function(){
      this.remove(this.at(0));
        //We think it'll re-order [it did.]

       
      this.playFirst();
  }


});