function centuryFromYear(year) {
  if (year < 100) {
    return 1;
  }
  else if (year < 1000) {
    var yearString = year + "";
    if (yearString[1] === '0' && yearString[2] === '0') {
      return parseInt(yearString[0]);
    }
    else {
      return parseInt(yearString[0]) + 1;
    }
  }
  else {
    var yearString2 = year + "";
    if (yearString2[2] === '0' && yearString2[3] === '0') {
      var result1 = yearString2[0] + yearString2[1];
      return parseInt(result1);
    }
    else {
      var result2 = yearString2[0] + yearString2[1];
      return parseInt(result2) + 1;
    }

  }

}
