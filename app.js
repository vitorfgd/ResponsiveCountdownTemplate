(function() {
  var start = new Date;
  start.setHours(23, 59, 59); // 11pm

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function tick() {
    var now = new Date;
    if (now > start) { // too late, go to tomorrow
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);
    document.getElementById('time').innerHTML =
      hh + " hours: " + mm + " minutes: " + ss + " seconds";
    setTimeout(tick, 1000);
  }

  document.addEventListener('DOMContentLoaded', tick);
})();