var sieve = function(limit) {
  var primes = [1, 2];
  for (var i = 3; i < limit + 1; i+=2) {
    primes.push(i);
    for (var j = 2; j < i; j++) {
      if (i % primes[j] === 0 && i !== primes[j]) {
        primes.pop(i, primes[j]);
        break;
      }
    }
  }
  return primes;
}
