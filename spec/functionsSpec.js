// functions.spec.js
describe('add() tests', function() {
  it('1 + 2 is 3', function() {
    expect(add(1, 2)).toBe(3);
  });

  it('2 + 2 is not 5', function() {
    expect(add(2, 2)).not.toBe(5);
  });
});
