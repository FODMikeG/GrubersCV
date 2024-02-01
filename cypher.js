const friend = "BRUTUS"
const shiftValue = 3;
const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());
 //Oh, I know B is the 2nd letter of the alphabet. Then, why the result is 1 instead of 2?
// Because index start with 0 not 1.
const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex];
const alphabetLength = alphabet.length;

const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];

const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);

const randomDecimal = Math.random();
const range = 33 - 3 + 1; // 31
const randomInRange = randomDecimal * range; // Adjusts the range to get a number between 0 (inclusive) and the value of 'range' (exclusive).
const randomInt = Math.floor(randomInRange); // Convert the decimal number to an integer to get values between 0 and (range - 1).
const shiftValue = randomInt + 3; // Shift the range to get an integer between 3 and 33

// ## Question 1 🤔 Why did we add 1 to the difference between 33 and 3?

// because int start at 0 not 1 so if we did not add 1 it would be from 32 to 2 not 3 to 33.

//## Question 2 🤔 How does multiplying `randomDecimal` by `range` help us get a number within our desired range?

// because it make a random range is a random int of int 33 - 3 the int is actual -1 of the number or letter in then case so we have to add 1 to get back to what we think the letter should be.

// ## Question 3 🤔  Why do we use the `Math.floor()` function instead of other rounding methods like `Math.round()`?

// because Math.floor() will shop off all the extra numbers past the . and Math.round will round it. That could out ight change the number more and break the cypher.

// ## Question 4 🤔  How does adding 3 to `randomInt` ensure that our final `shiftValue` is between 3 and 33?


// Because Since randomInt is a number between 0 and range - 1 (which is 30 in this case), adding 3 shifts this range upward, resulting in numbers between 3 and 33.

