const getEncryptedText = (text) => {
  let input = text.split('')
  const asciiCode = text.charCodeAt(0);
  if (input.length > 1) {
    const secEl = input[1];
    const lastEl = input[input.length - 1];
    input[0] = asciiCode;
    input[1] = lastEl;
    input[input.length - 1] = secEl;
    return input.join('');
  }
  return asciiCode;
}

const encryptThis = (text) => {
  let result = '';
  const input = text.split(' ');
  for (let element of input) {
    const separator = input.indexOf(element) !== input.length - 1 ? ' ' : ''
    result += getEncryptedText(element) + separator;
  }
  return result;
}

module.exports = {
  encryptThis
}