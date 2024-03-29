export const iterativeFib: (x: number) => number = (num) => {
  const fibArr = [0, 1]

  for (let i = 0; i < num; i++) {
    const newNum = fibArr[i] + fibArr[i + 1]
    fibArr.push(newNum)
  }

  return fibArr[num]
}
