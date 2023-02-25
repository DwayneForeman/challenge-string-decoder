/*

Instructions
In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

Start by creating a function called decoder that has a single parameter called code.

Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.

For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

Here are a few more examples:

'0h2xce5ngbrdy' => 'hey'
'3vdfn' => 'n'
'0r' => 'r'
'2bna0p1mp2osl0e' => 'apple'
'0y4akjfe0s' => 'yes'


*/

function decoder(code) {
  let message = "";

  for (let i = 0; i < code.length; i++) {
    if (code[i] >= "0" && code[i] <= "9") {
      let skip = parseInt(code[i]);
      i += skip;
    } else {
      message += code[i];
    }
  }
  return message;
}

const test = decoder("0y4akjfe0s");
console.log(test);
