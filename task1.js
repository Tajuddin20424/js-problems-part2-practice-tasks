// # js-problems-part2-practice-tasks

// ### Task -1: 
// Find the lowest number in the array below.
// <br>
// const heights2 = [167, 190, 120, 165, 137];



// const heights2 = [167, 190, 120, 165, 137];
// // console.log(heights2);

// const lowestHeight = Math.min(heights2);
// console.log(lowestHeight); 


const heights2 = [167, 190, 120, 165, 137];
const lowestHeight = Math.min(...heights2);
console.log(lowestHeight);
