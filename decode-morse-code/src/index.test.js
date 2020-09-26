const {
  decodeMorse,
} = require('./index');

describe('Basic tests', () => {
  it('should return the correct value', () => {
    expect(decodeMorse('.... . -.--   .--- ..- -.. . ')).toEqual('HEY JUDE');
  });
});
