(function($){
  var date    = new Date(),
      month   = date.getMonth();
      day     = date.getDate(),
      weekDay = date.getDay(),
      hours   = {
        start: new Date(date.getFullYear(), month, day),
        end: new Date(date.getFullYear(), month, day)
      };
  
  // weekDay var [0 = sun, 1 = mon, 2 = tues ... 5 = fri 6 = sat]
  
  // If it's Monday - Friday
  if(weekDay >= 1 && weekDay <= 5){

    // Start at 7am, end at 8pm
    hours.start.setHours(1);
    hours.end.setHours(23);

  // If it's Saturday
  } else if(weekDay == 6){

    // Start at 8am, end at 8pm
    hours.start.setHours(1);
    hours.end.setHours(23);

  // If it's Sunday
  } else {

    // Start at 9am, end at 6pm
    hours.start.setHours(1);
    hours.end.setHours(23);
  }

  function countDown(){
    var date         = new Date(),
        countHours   = ('0' + (hours.end.getHours() - date.getHours())).substr(-2),
        countMinutes = ('0' + (59 - date.getMinutes())).substr(-2),
        countSeconds = ('0' + (59 - date.getSeconds())).substr(-2);

    // If it's currently not within the hours, don't show the countdown
    if(date.getHours() < hours.start.getHours() || date.getHours() > hours.end.getHours()){
      $('.countdown').hide();
    } else if($('.countdown').not(':visible')){
      $('.countdown').show();
    }

    $('.countdown .hours').text(countHours);
    $('.countdown .minutes').text(countMinutes);
    $('.countdown .seconds').html(countSeconds);

  }

  $(function(){
    setInterval(function(){
      countDown();
    }, 1000);
  });
})(jQuery);