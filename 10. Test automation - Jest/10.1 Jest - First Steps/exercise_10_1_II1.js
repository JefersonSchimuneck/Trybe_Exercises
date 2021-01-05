function encode(encodeWord) {
  let encodedString = '';
  for (let index = 0; index < encodeWord.length; index += 1) {
    if (encodeWord[index] === 'a') {
      encodedString += '1';
    } else if (encodeWord[index] === 'e') {
      encodedString += '2';
    } else if (encodeWord[index] === 'i') {
      encodedString += '3';
    } else if (encodeWord[index] === 'o') {
      encodedString += '4';
    } else if (encodeWord[index] === 'u') {
      encodedString += '5';
    } else {
      encodedString += encodeWord[index];
    }
  }
  return encodedString;
}

function decode(decodeWord) {
  let decodedString = '';
  for (let index = 0; index < decodeWord.length; index += 1) {
    if (decodeWord[index] === '1') {
      decodedString += 'a';
    } else if (decodeWord[index] === '2') {
      decodedString += 'e';
    } else if (decodeWord[index] === '3') {
      decodedString += 'i';
    } else if (decodeWord[index] === '4') {
      decodedString += 'o';
    } else if (decodeWord[index] === '5') {
      decodedString += 'u';
    } else {
      decodedString += decodeWord[index];
    }
  }
  return decodedString;
}

module.exports = { encode, decode };