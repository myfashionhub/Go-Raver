GoRaver.Views.FlightView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'all', this.render);
  },
  tagName: 'article',
  template: JST['templates/flight'],
  render: function() {
    var flight = this.template(this.model.attributes);
    this.$el.append(flight);
    return this;
  }
});


GoRaver.Views.FlightsView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'all', this.render);
  },
  render: function() {
    var that = this;
    this.$el.empty();
    _.each(this.collection.models, function(flight) {
      var flightView = new GoRaver.Views.FlightView({model: flight});
      that.$el.append(flightView.render().el)
    })
  }
});