// data.js - Defines an array of data regarding song files and their accompanying details.
var songData = [
  {
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3",
    title: "One In A Million",
    artist: "Aaliyah",
  },
  {
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3",
    title: "Age Ain't Nothing But A Number",
    artist: "Aaliyah",
  },
  {
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3",
    title: "Hot Like Fire",
    artist: "Aaliyah",
  },
  {
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3",
    title: "If Your Girl Only Knew",
    artist: "Aaliyah",
  }
];


// 0) (index.html)Instantiate appModel.js-- pass in a collection of song objects. It has a listener
// on each song object's "play" method being invoked

// 1) (index.html)Connect appView to the appModel instance

// 2) (index.html)"draw" the initial appView

// ...


// 1)) LibraryEntryView: click event on song instance. Invoke play on the song instance

// 2) SongModel.js: has a play method. But it doesn't do anything. It just triggers
//  play: function() {
//     // Triggering an event here will also trigger the event on the collection
//     this.trigger('play', this);
//   },

// 3) AppModel.js has a listener on every song model instnace. When play "triggers" it sets ITS OWN (appmodel's)
// currentSong property the song instance

// 4) AppView.js: There's a listener on its associated APP MODEL. (NOT THE SONG!). The listener
// listens for changes on APP MODEL'S currentSong changing. If it changes it retreives the currentSong
// from appModel and then invokes playView's setSong() method, passing in the song model instance

// 5) PlayerView.js: It has a setSong method and the song was passed through. It sets PlayerView's (it's own)
// model property to the song instance and then it calls its render function

// 5a) PlayerView.js its render function sets the "SRC" attribute on the <AUDIO> element. and WhenSRC gets
// set on an AUDIO element. It starts playing.
// render: function() {
//     return this.$el.attr('src', this.model ? this.model.get('url') : '');
//   }
