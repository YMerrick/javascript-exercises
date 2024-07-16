const findTheOldest = function(list) {
    return list.reduce( (oldest, current) => {
        let oldestAge;
        let currentAge;

        if (!oldest.yearOfDeath) oldestAge = (new Date()).getFullYear() - oldest.yearOfBirth;
        else oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

        if (!current.yearOfDeath) currentAge = (new Date()).getFullYear() - current.yearOfBirth;
        else currentAge = current.yearOfDeath - current.yearOfBirth;
        
        return oldestAge > currentAge ? oldest: current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
