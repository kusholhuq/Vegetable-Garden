//are you in between? no then replace with k-1
//if you are in between do nothing
function almostIncreasingSequence(sequence) {
let counter = 0;
for (let k = 0; k < sequence.length; k++) {
  const current = sequence[k]
  const next = sequence[k + 1]
  const prev = sequence[k - 1]
  if (k === 0) {
    if (current >= next) {
      counter++;
      sequence.splice(k, 1, next - 1)
    }
  }
  else if (k === sequence.length - 1) {
    if (current < prev) {
      counter++
    }
  }
  else if (next === prev) {
    sequence.splice(k + 1, 1, current);
    sequence.splice(k, 1, prev)
    counter++
  }
  else if (sequence[0] === sequence[sequence.length - 1]) {
    sequence.splice(sequence.length - 1, 1, sequence[sequence.length - 2] + 1)
    counter++
  }
  else {
    if (current > prev && current < next) {

    }
    else {
      counter++
      sequence.splice(k, 1, prev)
    }
  }
  if (counter > 1) {
    return false
  }
}
return true
}

//Given a sequence of integers as an array, determine whether it is possible to
//obtain a strictly increasing sequence by removing no more than one element from
//the array.
