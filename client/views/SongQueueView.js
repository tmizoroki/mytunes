// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagname: 'table',

  initialize: function() {
    this.render(); //Tomio

    this.collection.on('enqueue', function() {

      this.render();
    }, this); //Tomio

    this.collection.on('dequeue', function() {
      this.render();
    }, this); //Tomio'

    this.collection.on('removeSong', function() {
      this.render();
    }, this); //Tomio
  },

  render: function() {
    //this.$el.children.detatch(); //Tomio

    this.$el.html('<th>Queue</th>').append( //Tomio
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
  

});
