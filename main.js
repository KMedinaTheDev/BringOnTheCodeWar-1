
//create function that takes in number as parameter
function rowSumOddNumbers(n) { //n is the row number(or index)
let firstNum = (n * n) - (n-1);
let sum = 0;
let count = 0;
while(count < n){
  if(firstNum % 2 !== 0){ //if it is odd add it
    sum += firstNum;
    count ++
  }
  firstNum++;
}
return sum
}


// rowSumOddNumbers(1); // 1 = 1
// rowSumOddNumbers(2); // 3 + 5 = 8
// rowSumOddNumbers(3); // 7 + 9 + 11 = 27
//rowSumOddNumbers(4); // 13 + 15 + 17 + 19 = 64
//rowSumOddNumbers(5); // 21 + 23 + 25 + 27 +29  = 125

//another solution is:
