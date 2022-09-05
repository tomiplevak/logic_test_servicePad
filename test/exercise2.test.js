const countRepeatedWords = require('../src/exercise2');

test("Count repeated words at the sample text given by the challenge", () => {
  expect(
    countRepeatedWords(
      "Hi how are things? How are you? Are you a developer? I am also a developer"
    )
  ).toStrictEqual({
    hi: 1,
    how: 2,
    are: 3,
    things: 1,
    you: 2,
    a: 2,
    developer: 2,
    i: 1,
    am: 1,
    also: 1,
  })
});
