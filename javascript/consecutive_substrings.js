function consecutiveSubstrings(string) {
  const ans = [];

  for (let i = 0; i < string.length; i++) {
    ans.push(string[i]);
    for (let j = i + 1; j < string.length; j++) {
      ans.push(string.slice(i, j + 1));
    }
  }

  return ans;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

/*
Initialize an empty array called ans

Loop length of string times labeling each iteration i
  Push the i'th element to ans
  Loop length string times labeling each iteration j and starting at i
    Push the substring (i, j) of string to ans

Return ans
*/

/*
An empty array is initialized to store the strings.
A FOR loop is created to loop through the elements of string. Each iteration of this loop will push a single letter to ans.
A nested FOR loop is created to loop through the elements of string starting at the element after the current iteration of the parent FOR loop. The substring (i, j) is pushed to ans.
Ans is returned.
*/