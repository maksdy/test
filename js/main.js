var dataURL = 'tickets.json';

var app = new Vue({
  el: '#app',
  data: {
    tickets: [],
  },
  mounted() {
    var self = this
    $.getJSON(dataURL, function(data) {
      self.tickets = data.tickets;
      array = data.tickets;
      // sorting ascending price
      array.sort(function(obj1, obj2){return obj1.price-obj2.price});

      data.tickets = array.filter(ticket => ticket.stops == 0);

    });
  }
})
