const removeFromArray = function(array, item) {
    const filtered = array.filter((e) => {
    return e !== item;
});
    return filtered
};

// Do not edit below this line
module.exports = removeFromArray