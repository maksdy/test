var dataURL = 'tickets.json'

var app = new Vue({
  el: '#app',
  data: {
    userData: []
  },
  mounted() {
    var self = this
    $.getJSON(dataURL, function(data) {
      self.userData = data.tickets;
    });
  }
})
