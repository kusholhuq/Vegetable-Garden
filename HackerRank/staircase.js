// Complete the staircase function below.
function staircase(n) {
  //so given a number n
  //build a staircase
  //the last step is n hashtags
  //the first step is empty spaces and one hashtag
  //so we will loop from 1 to n
  //an example might be n = 4
  //we would have 3 spaces and 1 hashtag
  //and end with 0 spaces and 4 hastags
  //so we can surmise that it should be
  // n-i spaces, and i hashtags
  //n = 4
  //   #
  //  ##
  // ###
  //####

  //we need to build a string
  //print a string
  //n times
  //within each time we need to build a string in a specific way
  //lets try to build one string
  //and then wrap that in a loop that iterates n times


  for (let i = 1; i <= n; i++) {
    let result = '';
    let hashtags = '';
    let spaces = '';

    for (let b = i; b < n; b++) {
      spaces += " ";
    }
    for (let k = 0; k < i; k++) {
      hashtags += "#";
    }
    result = spaces + hashtags;
    console.log(result);
  }

}
