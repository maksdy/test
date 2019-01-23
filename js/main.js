var dataURL = 'tickets.json';

var app = new Vue({
  el: '#app',
  data: {
    tickets: []
  },
  mounted() {
    var self = this
    $.getJSON(dataURL, function(data) {
      self.tickets = data.tickets;
      array = data.tickets;
      for (var i=0;
         i < array.sort(function(obj1, obj2){
          return obj1.price-obj2.price;
          }).length;
         i++) {
              console.log(array[i].price);
          }
    });
  }
})
