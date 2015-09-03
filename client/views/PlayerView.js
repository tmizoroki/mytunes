// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({
  
  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio id="track" controls autoplay />',
  tagName: "audio",

  events:{
    "ended": function(){
      console.log("From PlayerView: something ended");
      //We need a reference to songQueue here

      //Call appModel.dequeue()
        //COme up with some way to reference it HERE
        //Have a listener on 
        // this.trigger("ended", this);
        this.songOver();
          // var songQueueRef = "something";

          // songQueueRef.remove(songQueueRef.at(0));
          //   //We think it'll re-order

          // songQueueRef.playFirst()
          // //Remove the song at zero
          //   //hit playFirst()
    }
  },
  initialize: function() {
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  songOver: function(){
    this.trigger("songOver", this);
  }

});
