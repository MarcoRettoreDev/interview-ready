// 4. *Palindrome Permutation*:

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation(str: string): boolean {
  const cleared = str.toLocaleLowerCase().replaceAll(" ", "");

  const hash: Record<string, number> = {};

  for (let i = 0; i < cleared.length; i++) {
    const c = cleared[i];
    if (!hash[c]) {
      hash[c] = 0;
    }
    hash[c]++;
  }

  return Object.values(hash).filter((x) => x <= 1).length <= 1;
}
