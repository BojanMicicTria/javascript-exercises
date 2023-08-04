const getTheTitles = function(books) {
    const mapped = books.map((item) => {
        return item.title;
      });
      return mapped;
};

// Do not edit below this line
module.exports = getTheTitles;