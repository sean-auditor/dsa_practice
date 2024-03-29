//Given the value num, return the index value of the Fibonacci sequence. Basically what number is in that num position in the sequence.


export const recursionFib: (x: number) => number = (num)=>{
  // return num on 2 since everything below 2 is just 1 and 0
  if(num < 2){
    return num
  }

  return recursionFib(num - 1) + recursionFib(num - 2)

}
