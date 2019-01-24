var dataURL = 'tickets.json';

var app = new Vue({
  el: '#app',
  data: {
    tickets: [],
    defaultCheck: true
  },
  mounted() {
    var self = this
    $.getJSON(dataURL, function(data) {
      self.tickets = data.tickets;
      array = data.tickets;
      // sorting ascending price
      for (var i=0;
         i < array.sort(function(obj1, obj2){
          return obj1.price-obj2.price;
          }).length;
         i++) {};

         array = array.filter(ticket => ticket.stops == 0);
         console.log(array);

    });
  }
})
