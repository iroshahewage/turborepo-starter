import add from '@utils/add';

describe('testing sum', () => {
  it('should be a 10', () => {
    expect(add(8, 2)).toBe(10);
  });
});
