const longestWord = require('./longestWord')

test('returns longest word in a normal sentence', () => {
  expect(longestWord('The quick brown fox jumped over the lazy dog')).toBe(
    'jumped'
  )
})

test('returns longest word with punctuation counted', () => {
  expect(longestWord('Well, this test-case is tricky!')).toBe('test-case')
})

test('returns longest word when it is first of the longest', () => {
  expect(longestWord('JavaScript is super fun and powerful')).toBe('JavaScript')
})

test('returns the only word in a one-word sentence', () => {
  expect(longestWord('Hi')).toBe('Hi')
})

test('returns empty string for empty input', () => {
  expect(longestWord('')).toBe('')
})

test('returns empty string for undefined', () => {
  expect(longestWord(undefined)).toBe('')
})

test('returns empty string for null', () => {
  expect(longestWord(null)).toBe('')
})

test('returns empty string for non-string input (number)', () => {
  expect(longestWord(12345)).toBe('')
})

test('returns empty string for non-string input (array)', () => {
  expect(longestWord(['not', 'a', 'string'])).toBe('')
})
