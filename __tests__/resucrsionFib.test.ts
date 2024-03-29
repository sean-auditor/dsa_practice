import { recursionFib } from '../recursion/fibonacci/recursionFib'

//Given the value num, return the index value of the Fibonacci sequence. Basically what number is in that num position in the sequence.

describe('Recursion Fibonacci test', () => {
  it('should return the index value of the given in the fibonacci sequence ', () => {
    const given = 8
    const expected = 21
    const result = recursionFib(given)

    expect(result).toStrictEqual(expected)
  })
  it("should return the index values of the given numbers", ()=>{
    const given = [10, 21, 22, 30]
    const expected = [55,10946, 17711, 832040]
    const result: number[] = []

    given.forEach(num => {
      result.push(recursionFib(num))
    })

    expect(result).toStrictEqual(expected)
  })
})
