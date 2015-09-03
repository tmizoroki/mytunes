// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  //model: SongModel,
  // your code here!

  tagname: 'tr', //Tomio

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'), //Tomio

  events: { //Tomio
    'click': function() {
      //Revisit
      this.model.removeSong();
    }
  },

  render: function() {
    //this.trigger("render", this);
    return this.$el.html(this.template(this.model.attributes));
  }
});
