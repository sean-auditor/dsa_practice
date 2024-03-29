export const recursiveFactorial: (param: number)=>number = (numToFactorial) => {
  if(numToFactorial <= 1){
    return 1
  }

  return numToFactorial * recursiveFactorial(numToFactorial - 1)
}