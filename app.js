new Vue({

  el: '#events'

  data: {
  event: { name: '', description: '', date: '' },
  events: []
},

// Anything within the ready function will run when the application loads
ready: function() {
  // When the application loads, we want to call the method that initializes
  // some data
  this.fetchEvents();
},

// Methods we want to use in our application are registered here
methods: {

  // We dedicate a method to retrieving and setting some data
  fetchEvents: function() {
    var events = [
      {
        id: 1,
        name: 'TIFF',
        description: 'Toronto International Film Festival',
        date: '2015-09-10'
      },
      {
        id: 2,
        name: 'The Martian Premiere',
        description: 'The Martian comes to theatres.',
        date: '2015-10-02'
      },
      {
        id: 3,
        name: 'SXSW',
        description: 'Music, film and interactive festival in Austin, TX.',
        date: '2016-03-11'
      }
    ];
    this.$set('events', events);
  },

  addEvent: function() {
    if(this.event.name) {
      this.events.push(this.event);
      this.event = { name: '', description: '', date: '' };
    }
  }
}
});
