module.exports = function cookieProblem(array) {
  let highestAmtOfCookies = 0;

  let currentSumOfCookies = 0;

  array.forEach(cookies => {
    highestAmtOfCookies = Math.max(highestAmtOfCookies, cookies);
    currentSumOfCookies += cookies;
  });
  return highestAmtOfCookies * array.length - currentSumOfCookies;
}