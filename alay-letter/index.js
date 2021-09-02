const alayConverter = function(string) {
  
  let newString = '';

  for (let i = 0, len = string.length; i < len; i++) {
    string[i]
    if (string[i] == 'a') {
      newString += '4';
    } else if (string[i] == 's') {
      newString += '5';
    } else if (string[i] == 'e') {
      newString += '3';
    } else if (string[i] == '0') {
      newString += '0';
    } else if (string[i] == 'b') {
      newString += '8';
    } else if (string[i] == 'g') {
      newString += '9';
    } else if (string[i] == 'i') {
      newString += '1';
    } else {
      newString += string[i];
    }
  }

  return newString;
}

module.exports = alayConverter;