function makeArrayConsecutive2(statues) {
  //loop through and find max
  //loop through and find min
  //subtract min from max
  //thats how many spaces there are in the middle
  //anything that isnt a max or min is necessarily in the middle
  //so just subtract the length of the array minus 2, and thats how many are left
  let max = 0;
  let min = statues[0];
  for (let i = 0; i < statues.length; i++) {
    if (statues[i] > max) {
      max = statues[i];
    }
    if (statues[i] < min) {
      min = statues[i];
    }
  }
  let difference = max - min;
  let result = difference - statues.length + 1;
  return result;
}
//Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non - negative integer size.Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that.Help him figure out the minimum number of additional statues needed.
