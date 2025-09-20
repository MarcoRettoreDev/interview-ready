// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  const q: string[] = [...str1];

  let differences: number = 0; // 1

  for (let i = str1.length - 1; i > 0; i--) {
    const char = q.pop();
    if (char !== str2[i]) {
      differences++;
      q.push(char as string);
    }
  }

  return differences <= 1;
}
