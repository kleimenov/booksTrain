const countdounTime = (date) => {
    const readingTerm = 14;
    const startUnixTime = parseInt(date);
    const currentuUixTime = new Date().getTime();
    const unixDiff = currentuUixTime - startUnixTime;
    return readingTerm - Math.floor(unixDiff / (1000 * 60 * 60) / 24);
  };

  const toCapitalize = (string) => {
    let splitStr = string.split(" ");
    let newArr = [];
    for (let word of splitStr) {
      if (word.length > 1) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        newArr.push(word);
      } else {
        newArr.push(word);
      }
    }
    return newArr.join(" ");
  };

module.exports = {
    countdounTime,
    toCapitalize,
  }