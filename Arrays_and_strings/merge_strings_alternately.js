// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.
// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

/**
 * Merge two strings by alternating characters, starting with word1.
 * If one string is longer, append the remaining characters.
 *
 * @param {string} word1
 * @param {string} word2
 * @returns {string}
 */
const mergeAlternately = (word1, word2) => {
  const minLength = Math.min(word1.length, word2.length);
  const merged = [];

  for (let index = 0; index < minLength; index += 1) {
    merged.push(word1[index], word2[index]);
  }

  return merged.join("") + word1.slice(minLength) + word2.slice(minLength);
};

console.log(mergeAlternately("abcd", "pq")); // apbqcd
console.log(mergeAlternately("ab", "pqrs")); // apbqrs
console.log(mergeAlternately("abc", "pqr")); // apbqcr
