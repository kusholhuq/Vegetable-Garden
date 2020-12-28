function gradingStudents(grades) {
  // Write your code here
  //if grade is less than 40 dont do anything and just return the number
  //if the grade is 3 or less away from a multiple of 5 round up

  //look at a number
  //create a multiple of 5 that is just above the number
  //loop that adds 5 until the number is bigger than the number we are looking at
  //compare the two numbers to find the difference
  //make a choice and round or dont round
  //and push that onto your new array
  const result = [];
  for (let i = 0; i < grades.length; i++) {

    let multipleOfFive = 5;
    let answer = grades[i];
    for (let b = 8; multipleOfFive < grades[i]; b++) {
      multipleOfFive = 5 * b;
    }
    if (multipleOfFive - grades[i] < 3) {
      answer = multipleOfFive;
    }
    if (grades[i] < 38) {
      answer = grades[i];
    }
    result.push(answer);
  }
  console.log(result);
  return result;
}
