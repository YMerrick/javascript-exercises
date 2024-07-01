const removeFromArray = function(list, ...removees) {
    return list.filter((num) => !removees.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
