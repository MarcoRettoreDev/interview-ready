// 9. *String Rotation*;

import { isSubstring } from "./__utils__/strings";

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.
// [e.g., "waterbottle" is a rotation of 'erbottlewat")

export default function stringRotation(s1: string, s2: string): boolean {
  const hash: Record<string, number> = {};

  for (let i = 0; i < s1.length; i++) {
    const c = s1[i];
    if (!hash[c]) {
      hash[c] = 0;
    }
    hash[c]++;
  }

  for (let i = 0; i < s2.length; i++) {
    const c = s1[i];
    if (hash[c]) {
      hash[c]--;
    }
  }

  return Object.values(hash).filter(Boolean).length === 0;
}
