import { iterativeFactorial } from "../../../recursion/factorial/iterativeFactorial";

describe("Iterative factorial test", ()=>{
  it("should give correct factorial", ()=>{
    const expected = 120
    const given = 5
    const result = iterativeFactorial(given)

    expect(result).toStrictEqual(expected)
  })

  it('should return correct factorial but array form', ()=>{
    const expected = [120, 3628800, 5040]
    const given = [5, 10, 7]
    const result: number[] = []

    given.forEach(num => {
      result.push(iterativeFactorial(num))
    })

    expect(result).toStrictEqual(expected)
  })
})