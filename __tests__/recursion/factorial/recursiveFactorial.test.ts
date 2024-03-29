import { recursiveFactorial } from '../../../recursion/factorial/recursiveFactorial'

describe('Recursive Factorial Test', () => {
  it('should return correct factorial result.', () => {
    const expected = 120
    const given = 5
    const result = recursiveFactorial(given)
    expect(result).toStrictEqual(expected)
  })

  it('should return correct factorial but array form', ()=>{
    const expected = [120, 3628800, 5040]
    const given = [5, 10, 7]
    const result: number[] = []

    given.forEach(num => {
      result.push(recursiveFactorial(num))
    })

    expect(result).toStrictEqual(expected)
  })
})
