const createPhoneNumber = (numbers) => {
  numbers.splice(0, 0, '(');
  numbers.splice(4, 0, ')');
  numbers.splice(5, 0, ' ');
  numbers.splice(9, 0, '-');
  return numbers.join('');
}

module.exports = createPhoneNumber;