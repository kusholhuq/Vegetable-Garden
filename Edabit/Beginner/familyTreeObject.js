function generation(x, y) {
  const f = {
    "-3": "great grandmother",
    "-2": "grandmother",
    "-1": "mother",
    '0': "me!",
    '1': "daughter",
    '2': "granddaughter",
    '3': "great granddaughter"
  };
  const m = {
    '-3': "great grandfather",
    '-2': "grandfather",
    '-1': "father",
    '0': "me!",
    '1': "son",
    '2': "grandson",
    '3': "great grandson"
  };
  if (y === "f") {
    return f[x + ""];
  }
  if (y === "m") {
    return m[x + ""];
  }
}
