// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(s: string): boolean {
  if (s.length === 0 || s.length === 1) return true;

  const set: Set<string> = new Set();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (set.has(char)) {
      return false;
    }

    set.add(char);
  }

  return true;
}
