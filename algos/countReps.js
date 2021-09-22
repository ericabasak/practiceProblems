// given an array and a target number find out how many 
// times the number repeats in the array
// ie. countRepetitions([3,4,5,6,1,1,3,4,1,5,1,1,6,1,1], 6) the target number 6 repeats 2 times

// pseudocode
// go through the array of numbers one at a time from left to right
// compare the target number to each number in the array


function countRepetitions(arr, target){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
      if(arr[i]  === target){
        obj.push(arr[i]);
        // increment by 1
        obj[arr[i]] += 1;
      }
    }

    Object.values(obj).forEach(key => {
        obj[key];
    })
    return 
  }
  console.log(countRepetitions([3,4,5,6,1,1,3,4,1,5,1,1,6,1,1], 6));


// solution for problem above
function countRepetitions(arr, target){
  let counter = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      counter += 1;
    }
  }
  return counter;
}
console.log(countRepetitions([4,6,1,3,3,9,2,0,1,2,3,3], 3));
