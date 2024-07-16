const fibonacci = function(index) {
    if (index < 0) return 'OOPS';
    if (index == 0) return 0;
    if (index == 1) return 1;
    let x1 = 0
    let x2 = 1
    let output = x1 + x2;
    for (let i = 1; i < Number(index); i++) {
        output = x1 + x2;
        x1 = x2;
        x2 = output;
    }
    return output;
};

// Do not edit below this line
module.exports = fibonacci;
