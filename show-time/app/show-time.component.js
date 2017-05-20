(function(app) {
  var Component = ng.core.Component;
  var ShowTimeService = app.ShowTimeService;

  app.ShowTimeComponent = Component({
    selector: 'show-time',
    template: '<p>{{showtime}}</p>'
  })
  .Class({
    constructor: [ShowTimeService, function ShowTimeComponent(showTimeService) {
      var self = this;
      showTimeService.generateShowTime(1000, function(showtime) {
        self.showtime = showtime;
      });
    }]
  });

})(window.app || (window.app = {}));
