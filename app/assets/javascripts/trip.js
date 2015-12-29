function Trip() {
  var that = this;
  var tabs = [ 'flight', 'hotel', 'lineup', 'itinerary' ];

  this.init = function() {
    if (!window.location.hash || window.location.hash == '#_=_') {
      this.currentTab = 'flight';
    } else {
      this.currentTab = window.location.hash.replace('#','');
    }
    this.navigate();

    $('.trip-wrapper .continue-btn').click(function() {
      that.nextTab();
    });

    $('.trip-menu a').click(function() {
      that.nextTab();
    });
  };

  this.navigate = function() {
    toggleTab('.trip-menu', that.currentTab);
    toggleSection('.trip-wrapper', that.currentTab);
    window.location.hash = '#' + that.currentTab;

    if ( this.currentTab === 'itinerary' ) {
      var router = new RaveRepeat.Routers.Flights();
      router.showFlights();
    }
  };

  this.nextTab = function() {
    var currentIdx = tabs.indexOf(that.currentTab);
    this.currentTab = tabs[currentIdx + 1];
    this.navigate();
  };

  this.udpate = function() {
    var fromAirport = $('#from-airport').val();
    var toAirport   = $('#to-airport').val();
    var startDate   = $('#depart-date').val();
    var endDate     = $('#return-date').val();

    $.ajax({
      url: '/trips/'+tripId,
      method: 'put',
      dataType: 'json',
      data: {
        from_airport: fromAirport,
        to_airport: toAirport,
        start_date: startDate,
        end_date: endDate
      },
      success: function() {}
    });
  };

  this.init();
}
