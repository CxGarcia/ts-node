import { testFn } from './index'

describe('Test cases', () => {
  test('it should log to the console', () => {
    expect(testFn()).toEqual(undefined)
  })
})
