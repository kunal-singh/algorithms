const isPalindrome = function (s) {
  const alphanumStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let isValid = true;
  const lengthOfStr = alphanumStr.length;
  for (let i = 0; i < Math.floor(lengthOfStr / 2); i += 1) {
    if (alphanumStr[i] !== alphanumStr[lengthOfStr - i - 1]) {
      isValid = false;
      break;
    }
  }
  return isValid;
};

export default isPalindrome;
