import { difference } from './difference.js';

describe('testing two arrays of numbers', () => {
  it('[2, 1], [2, 3]=>[1]', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });
  it('[1, 2, 4], [2, 3]=>[1, 4]', () => {
    expect(difference([1, 2, 4], [2, 3])).toEqual([1, 4]);
  });
});
describe('testing two arrays of strings', () => {
  it('["hello", "hi"], ["hello", "bye"]=>["hi"]', () => {
    expect(difference(["hello", "hi"], ["hello", "bye"])).toEqual(["hi"]);
  });
  it('["John", "Alice", "Adam"], ["Adam", "Jean", "Lisa"]=>["John", "Alice"]', () => {
    expect(difference(["John", "Alice", "Adam"], ["Adam", "Jean", "Lisa"])).toEqual(["John", "Alice"]);
  });
});
