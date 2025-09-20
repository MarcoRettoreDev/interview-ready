// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;
  if (s1.length <= 1 && s2.length <= 1) return true;
  let haystack, needle;

  if (s1.length > s2.length) {
    haystack = s1;
    needle = s2;
  } else {
    haystack = s2;
    needle = s1;
  }

  let window = "";

  for (let i = 0; i < haystack.length; i++) {
    const element = haystack[i];
    if (needle.includes(element)) {
      window += element;
      if (window.length === needle.length) {
        return true;
      }
    } else {
      window = "";
    }
  }

  return false;
}
