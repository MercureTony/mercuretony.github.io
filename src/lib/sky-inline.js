// Runs inline in <head> before the first paint, so the name is already lit by
// Montreal's sun when it appears. A plain-JS copy of solarElevation (sun.ts)
// and the elevation stops of skyColor (sky.ts), without the weather terms,
// which arrive later over the network and ease in.
(function () {
  try {
    var RAD = Math.PI / 180;
    var LAT = 45.5019;
    var LON = -73.5674;
    var now = new Date();
    var jd = now.getTime() / 86400000 + 2440587.5;
    var t = (jd - 2451545) / 36525;
    var L0 = (((280.46646 + t * (36000.76983 + t * 0.0003032)) % 360) + 360) % 360;
    var M = (357.52911 + t * (35999.05029 - 0.0001537 * t)) * RAD;
    var e = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
    var C =
      Math.sin(M) * (1.914602 - t * (0.004817 + 0.000014 * t)) +
      Math.sin(2 * M) * (0.019993 - 0.000101 * t) +
      Math.sin(3 * M) * 0.000289;
    var omega = (125.04 - 1934.136 * t) * RAD;
    var lambda = (L0 + C - 0.00569 - 0.00478 * Math.sin(omega)) * RAD;
    var eps0 = 23 + (26 + (21.448 - t * (46.815 + t * (0.00059 - t * 0.001813))) / 60) / 60;
    var eps = (eps0 + 0.00256 * Math.cos(omega)) * RAD;
    var decl = Math.asin(Math.sin(eps) * Math.sin(lambda));
    var y = Math.pow(Math.tan(eps / 2), 2);
    var l0 = L0 * RAD;
    var eqt =
      (4 / RAD) *
      (y * Math.sin(2 * l0) -
        2 * e * Math.sin(M) +
        4 * e * y * Math.sin(M) * Math.cos(2 * l0) -
        0.5 * y * y * Math.sin(4 * l0) -
        1.25 * e * e * Math.sin(2 * M));
    var minutes = now.getUTCHours() * 60 + now.getUTCMinutes() + now.getUTCSeconds() / 60;
    var tst = (((minutes + eqt + 4 * LON) % 1440) + 1440) % 1440;
    var ha = (tst / 4 - 180) * RAD;
    var lat = LAT * RAD;
    var cosZ = Math.sin(lat) * Math.sin(decl) + Math.cos(lat) * Math.cos(decl) * Math.cos(ha);
    var elevation = 90 - Math.acos(Math.min(1, Math.max(-1, cosZ))) / RAD;

    var stops = [
      [8, [163, 163, 163]],
      [0, [184, 160, 128]],
      [-6, [150, 146, 168]],
      [-12, [134, 138, 150]],
    ];
    var rgb = stops[stops.length - 1][1];
    if (elevation >= stops[0][0]) rgb = stops[0][1];
    else {
      for (var i = 0; i < stops.length - 1; i++) {
        var hi = stops[i][0];
        var lo = stops[i + 1][0];
        if (elevation <= hi && elevation >= lo) {
          var f = (hi - elevation) / (hi - lo);
          var a = stops[i][1];
          var b = stops[i + 1][1];
          rgb = [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
          break;
        }
      }
    }
    var hex = "#";
    for (var k = 0; k < 3; k++) {
      var v = Math.round(rgb[k]).toString(16);
      hex += v.length < 2 ? "0" + v : v;
    }
    document.documentElement.style.setProperty("--sky", hex);
  } catch (_) {
    /* the gradient keeps its default */
  }
})();
