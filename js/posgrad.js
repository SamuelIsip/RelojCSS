function inicializar() {
  var hoy = new Date();
  var seg = hoy.getSeconds() * 6;

  document.getElementById("fina").style.transform = "rotate(" + seg + "deg)";

  var min = hoy.getMinutes();

  var hor = hoy.getHours();

  var hor2 = hor;
  var min2 = min;

  if (hor < 10) hor2 = "0" + hor;

  if (min < 10) min2 = "0" + min;

  var hordigit = hor2 + ":" + min2;

  document.getElementById("hora").innerHTML = hordigit;

  if (hor > 12) {
    hor = hor - 12;
  }

  document.getElementById("peque").style.transform =
    "rotate(" + hor * 30 + "deg)";

  document.getElementById("grande").style.transform =
    "rotate(" + (min * 30) / 5 + "deg)";

  setTimeout(inicializar, 1000);
}
