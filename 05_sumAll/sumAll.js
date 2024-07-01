const sumAll = function(start, end) {
    if (start < 0 || end < 0) return 'ERROR';
    if (typeof start !== 'number') return 'ERROR';
    if (typeof end !== 'number') return 'ERROR';

    let sum = 0;

    if (end < start) {
        for (let i = end; i <= start; i++) {
            sum += i;
        }
    } else {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
