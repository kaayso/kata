const getCaracter = (c) => {
  const MORSE_ALPHABET = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
  };

  return MORSE_ALPHABET[c];
};

const decodeMorse = (msg) => {
  const words = msg.split('   ');
  let result = '';
  words.forEach((w) => {
    w.split(' ').forEach((c) => {
      if (c !== '') {
        const decodedCaracter = getCaracter(c);
        result += decodedCaracter;
      }
    });
    if (words.indexOf(w) !== words.length - 1) { result += ' '; }
  });

  return result;
};

module.exports = {
  decodeMorse,
};
