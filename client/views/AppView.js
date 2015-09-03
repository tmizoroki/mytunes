// AppView.js - Defines a backbone view class for the whole music app.
// this.model is app instance of AppModel
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get("songQueue")});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);


    this.model.get("songQueue").on("add", function(model){
      console.log("a song was added to the collection");
        //We want to draw it

        this.songQueueView.render();

        //  this.playerView.setSong(model);
    }, this);

   this.model.get("songQueue").on("play", function(model){
      this.playerView.setSong(model);
    }, this);


   this.playerView.on("songOver", function(){
    this.model.get("songQueue").dequeue();
    this.songQueueView.render();
   }, this);

  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el //Tomio
    ]);
  },



});

