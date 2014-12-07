//= require jquery
//= require jquery_ujs
//= require jquery.ui.all
//= require underscore
//= require backbone
//= require raveRepeat
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

$(document).ready(function() {
  if (window.location.hash && window.location.hash == '#_=_') {
      window.location.hash = '';
  }

  tripNav();
  tripFlow();
  suggestAirports();

  // Line up functions
  displayOwnLineup();
  lineupBuilder();

});
