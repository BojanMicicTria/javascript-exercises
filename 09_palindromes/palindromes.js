const palindromes = function (palindrome) {
    let reversed = palindrome.split('').reverse().join('');

    if (palindrome === reversed) {
      return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;