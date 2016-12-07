// DrEvil
var DrEvil = function(amount) {
  if (amount === 1000000) {
    return amount + " dollars (pinky)";
  } else {
    return amount + " dollars";
  }
}

// MixUp
var mixUp = function(string1, string2) {
  var h1 = string1.substring(0,2);
  var h2 = string2.substring(0,2);
  return h2 + string1.substring(2, string1.length) + " " + h1 + string2.substring(2, string2.length);
}

// FixStart
var fixStart = function(w) {
  alpha = w[0];
  var regexp = new RegExp(alpha, "gi");
  w = w.replace(regexp, "*");
  return alpha + w.substring(1, w.length);
}

// Verbing
var verbing = function(w) {
  if (w.length < 3) {
    return w;
  } else if (w.substring(w.length - 3, w.length) === "ing") {
    return w + "ly";
  } else {
    return w + "ing"
  }
}

// Not Bad
var notBad = function(s) {
  if (s.match(/not/ig) && s.match(/bad/ig)) {
    i1 = s.indexOf(s.match(/not/ig));
    i2 = s.indexOf(s.match(/bad/ig));
    if (i1 > i2) {
      return s;
    } else {
      s = s.replace(s.substring(i1, i2 + 3), "good");
      return s;
    }
  } else {
    return s;
  }
}
