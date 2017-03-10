function sum(a, b) {
  return a + b;
}

test('Adds two numbers', () => {
  expect(sum(3,2)).toBe(5);
});
