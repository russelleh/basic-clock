document.addEventListener("DOMContentLoaded", function(event) { 
  var clock = document.getElementById("clock");
  setInterval(function () {
    clock.innerHTML = Date.now();
  }, 16);
});
