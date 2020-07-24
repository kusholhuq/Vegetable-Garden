function differentSymbolsNaive(s) {
  var hash = {};

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]]++;
    }
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    }

  }
  let counter = 0;
  for (const property in hash) {
    counter++;
  }
  return counter;
}
