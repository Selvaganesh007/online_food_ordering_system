
export default class Utility {
  static getUrlParams(paramName) {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(paramName);
    console.log({ myParam });
    return myParam;
  };
  static transformToWord(word = '') {
    return word
      .toString()
      .replaceAll('_', ' ')
      .split(' ')
      .map(str => str.charAt(0).toUpperCase() + str.slice(1))
      .join(' ');
  }
}
