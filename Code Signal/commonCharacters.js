function commonCharacterCount(s1, s2) {
  // s1 = {
  //         a: 2,
  //         b:1,
  //         c:2
  // }

  // s2 = {
  //         a:3,
  //         c:1
  //         d:1

  // }
  // Given two strings, find the number of common characters between them.
  let count = 0;
  let string1 = {};
  let string2 = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in string1) {
      string1[s1[i]]++;
    }
    else {
      string1[s1[i]] = 1;
    }
  }
  for (let k = 0; k < s2.length; k++) {
    if (s2[k] in string2) {
      string2[s2[k]]++;
    }
    else {
      string2[s2[k]] = 1;
    }
  }

  for (const j in string1) {
    if (j in string2) {
      if (string2[j] < string1[j]) {
        count += string2[j];
      }
      else {
        count += string1[j];
      }
    }
  }
  return count;
}
