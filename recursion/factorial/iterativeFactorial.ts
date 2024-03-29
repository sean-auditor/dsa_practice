export const iterativeFactorial: (param: number) => number = (numToFactorial) =>{
  let runningProduct = 1
  for(let i = numToFactorial; i >= 1; i--){
    runningProduct = i * runningProduct
  }

  return runningProduct
}