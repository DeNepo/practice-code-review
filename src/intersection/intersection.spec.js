import { arrayIntersection } from './intersection.js';

describe('Intersect the elements that are equal and return them in a new array', () => {
  describe('testing default parameters', () => {
    it('Passing an object literal', () => {
      expect(() => arrayIntersection({})).toThrow('The arguments must be arrays');
    });
    it('Passing string primitive type', () => {
      expect(() => arrayIntersection('hello')).toThrow('The arguments must be arrays');
    });
    it('Without arguments', () => {
      expect(arrayIntersection()).toEqual([]);
    });
    it('Add only one parameter', () => {
      expect(arrayIntersection([1, 2])).toEqual([]);
    });
  });
  describe('passing only numbers', () => {
    it('both arrays with the same length', () => {
      expect(arrayIntersection([2, 5, 8, 4, 3], [1, 3, 7, 5, 8])).toEqual([5, 8, 3]);
    });
    it('The second argument with less elements', () => {
      expect(arrayIntersection([2, 5, 8, 4, 3], [2, 8]));
    });
    it('Negative and positive numbers', () => {
      expect(arrayIntersection([2, -5, -8, 4, -3], [2, -8])).toEqual([2, -8]);
    });
  });
  describe('Passing any type of elements', () => {
    it('boolean', () => {
      expect(arrayIntersection([true, false], [true])).toEqual([true]);
    });
    it('null and undefined', () => {
      expect(arrayIntersection([undefined], [null])).toEqual([]);
    });
    it('strings', () => {
      expect(arrayIntersection(['hello', ' bye'], ['hello'])).toEqual(['hello']);
    });
    it('all primitive', () => {
      expect(arrayIntersection(['hello', 12, true, null, false, undefined], ['hello', true, 12, 25, 'bye'])).toEqual(['hello', 12, true]);
    });
  });
});
