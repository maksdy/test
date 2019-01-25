var dataURL = 'tickets.json';



// <div class="col col-lg-8" id="app">

var app = new Vue({
  el: '#app',
  data: {
    tickets: [],
    zeroChecked: false,
    oneChecked: false,
    twoChecked: false,
    threeChecked: false
  },
  mounted() {
    var self = this
    $.getJSON(dataURL, function(data) {
      self.tickets = data.tickets;
      array = data.tickets;
      // sorting ascending price
      array.sort(function(obj1, obj2){return obj1.price-obj2.price});
    });
  },
})
