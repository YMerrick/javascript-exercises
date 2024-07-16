const palindromes = function (input) {
    let stripped = input.replaceAll(/[^A-Za-z\d]/g,"").toLowerCase();
    let start = 0;
    let end = stripped.length - 1;

    while (start < end) {
        if (stripped[start] !== stripped[end]) return false;
        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
