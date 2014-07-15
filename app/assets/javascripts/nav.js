function navTrip() {
  var tabs = $('menu-trip').find('li');
  _.each(tabs, function(tab) {
    $(tab).click(function() {
      $(tab).addClass('current-tab');
    })
  })
}

function fetchCurrentTrips() {

}

function navRaver() {
  if ($('.raver').find('.selected').html() === 'Current raves') {
    $('.new-trip').hide();
  } else {
    fetchCurrentTrips();
  }

  $('.new-rave').click(function() {
    $('.raver').find('.selected').removeClass('selected');
    $('.new-rave').addClass('selected');
    $('.new-trip').toggle('blind');
  });

  $('.current-raves').click(function() {
    $('.raver').find('.selected').removeClass('selected');
    $('.current-raves').addClass('selected');
    $('.new-trip').hide();
  });
}

$(function() {
  navRaver();
  $('new-rave').click(newTripForm);

  $('.flight-section').click(showFlight);
  $('.hotel-section').click(showHotel);
  $('.lineup-section').click(showLineup);
  $('.itinerary-section').click(showItinerary);
});
