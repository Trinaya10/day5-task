/*You are given with two arrays. Your task is to merge the array such that first array is in ascending order and second one in descending order.

Input Description:
First line contains two integer ‘n’ and ‘m’. ‘n’ denotes length of array 1 and ‘m’ of array 2.Next line contains n space separated numbers and third line contains ‘m’ space separated numbers

Output Description:
Print a single array in desired order

Sample Input :
3 3
23 15 16
357 65 10
Sample Output :
15 16 23 357 65 10*/

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  const[n,m]=userInput[0].split(" ")
  var arr1=userInput[1].split(" ")
  var arr2=userInput[2].split(" ")
  arr1.sort((a,b)=>a-b).map(Number)
   arr2.sort((a,b)=>b-a).map(Number)
   
   var res=arr1.concat(arr2)
  

  console.log(res.join(" "));
});