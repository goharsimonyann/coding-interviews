// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?
function uniqueCharacters(str) {
  let hashedStr = [...str].reduce((aggr, char) => {
    aggr[char] ? aggr[char]++ : (aggr[char] = 1);
    return aggr;
  }, {});

  for (let i = 0; i < Object.values(hashedStr).length; ++i) {
    if (Object.values(hashedStr)[i] > 1) {
      return false;
    }
  }

  return true;
}

//  1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the
//  other.
function permutationCheck(str1, str2) {
  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; ++i) {
    if (!str2.includes(str1[i])) return false;
    if (!str1.includes(str2[i])) return false;
    str2 = str2.replace(str1[i], "");
    str1 = str1.replace(str2[i], "");
  }

  return true;
  // try: console.log(permutation("hello", "ole1"));
}

//   1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
//   has sufficient space at the end to hold the additional characters, and that you are given the "true"
//   length of the string. (Note: If implementing in Java, please use a character array so that you can
//   perform this operation in place.)
function URLify(str) {
  let copy = str;
  str = str.trim();
  str = str.replaceAll(" ", "%20");
  return str.length === copy.length ? str : false;
  // try console.log(string("Mr John Smith   "))
}

// 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

function palindromePermutation(str) {
  const hash = {};
  str = str.toLowerCase();
  for (let char of str) {
    if (char !== " ") {
      hash[char] = hash[char] ? ++hash[char] : 1;
    }
  }

  return Object.values(hash).filter((val) => val % 2 !== 0).length > 1
    ? false
    : true;
  //try: console.log(palindromePermutation("atco eta"));
}

// 1.5 One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.
function oneAway(str1, str2) {
  if (str1.length - str2.length > 1) {
    return false;
  }

  let count = 0;

  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        ++count;
        if (count != 1) return false;
        str2.replace(str2[i], str1[i]);
      }
    }
    return true;
  }

  if (str1.length > str2.length) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        ++count;
        if (count != 1) return false;
        str2 = str2.slice(0, i) + str1[i] + str2.slice(i);
      }
    }
    return true;
  }

  if (str1.length < str2.length) {
    for (let i = 0; i < str2.length; i++) {
      if (str1[i] != str2[i]) {
        ++count;
        if (count != 1) return false;
        str1 = str1.slice(0, i) + str1.slice(i);
      }
    }
    return true;
  }
}

// 1.6 String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function strCompression(str) {
  let count = 1,
    res = "";

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === str[i + 1]) {
      ++count;
    } else {
      res += str[i] + count;
      count = 1;
    }
  }

  if (res.length >= str.length) return str;
  return res;
}

// 1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
const rotateMatrix = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < row; column++) {
      let temp = matrix[row][column];
      matrix[row][column] = matrix[column][row];
      matrix[column][row] = temp;
    }
  }
  return matrix.map((arr) => arr.reverse());

  //try: console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9],]));
};

// 1.8 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0.
function zeroMatrix(matrix) {
  let index = null;
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] === 0) {
        matrix[i] = matrix[i].map((el) => (el = 0));
        index = j;
        break;
      }
    }
  }
  if (index) {
    for (let k = 0; k < matrix.length; ++k) {
      matrix[k][index] = 0;
    }
  }
  return matrix;

  //try: console.log(zeroMatrix([[1, 2, 3], [4, 5, 0], [6, 7, 8]]));
}

// 1.9 String Rotation:Assumeyou have a method isSubstringwhich checks if one word is a substring
// of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
// call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").
function substr(str, sub) {
  for (let i = 0; i < str.length; ++i) {
    for (let j = 0; j < sub.length; ++j) {
      if (str[i + j] !== sub[j]) break;
      if (sub.length - 1 === j) return true;
    }
  }
  return false;
  //try: console.log(stringRotation("watwik", "wikwat"));
}

function stringRotation(s1, s2) {
  let str = s1 + s1;
  return substr(str, s2);
}
