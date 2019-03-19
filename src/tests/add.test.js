const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `YO ${name}!`;

test('should add 2 numbers', () => {
  const result = add(4, 3);
  expect(result).toBe(7);
});

test('should generate a greeting with the users name', () => {
  const result = generateGreeting('Method Man');
  expect(result).toBe("YO Method Man!");
});

test('should return greeting with "Anonymous" as the default value', () => {
  const result = generateGreeting();
  expect(result).toBe("YO Anonymous!");
})
