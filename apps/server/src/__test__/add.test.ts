import add from '../utils/add';

describe('testing add', () => {
  it('should be 5', () => {
    expect(add(2, 3)).toBe(5);
  });
});
