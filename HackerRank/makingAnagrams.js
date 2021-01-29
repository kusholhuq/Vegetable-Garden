// Complete the makeAnagram function below.
function makeAnagram(a, b) {
  //you need to create a dictionary of a
  //loop through b
  //if item in b, exists in a
  const aObject = {};
  for (let i = 0; i < a.length; i++) {
    let item = a[i];
    if (aObject[item] !== undefined) {
      aObject[item]++;
    } else if (aObject[item] === undefined) {
      aObject[item] = 1;
    }
  }
  console.log(aObject);

  //loop through b
  //if it exists in aObject, then subtract the aObject counter
  //if it doesn't exist in aObject then up the delete count
  //if aObject contains any non zero values, we need to add them to delete count
  //so sum them and add them
  let deleteCount = 0;
  for (let k = 0; k < b.length; k++) {
    let item = b[k];
    if (aObject[item] === undefined) {
      deleteCount++;
    } else if (aObject[item] !== undefined) {
      aObject[item]--;
    }
  }
  console.log(aObject)

  //loop through object to get stragglers
  for (let property in aObject) {
    if (aObject[property] > 0) {
      deleteCount += aObject[property];
    } else if (aObject[property] < 0) {
      console.log(aObject[property] * (-1));
      deleteCount += aObject[property] * (-1);
    }
  }

  return deleteCount;
}
