const fibonacci = require('../src/exercise1');

test('Fibonacci test - Numbers tested: (0,1,5,10,14,30) => (0,1,5,55,377,832040)', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(14)).toBe(377);
    expect(fibonacci(30)).toBe(832040);
})