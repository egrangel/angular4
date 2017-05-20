(function(app) {
  var Class = ng.core.Class;

  app.ShowTimeService = Class({
    constructor: function ShowTimeService() {
    },
    getShowTime: function() {
      var current_time = new Date();
      return current_time.getHours()+':'+current_time.getMinutes()+':'+current_time.getSeconds();
    },
    generateShowTime: function(delay, callback) {
      var self = this;
      callback(this.getShowTime());
      setInterval(function() {
        callback(self.getShowTime());
      }, delay);
    }
  });
 
})(window.app || (window.app = {}));
