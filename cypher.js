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

