//1
const uppercase = (str, callback) => {
    callback(str.toUpperCase());
}

test(`'trybe' to uppercase 'TRYBE'`, done => {
    uppercase('trybe', (callback) => {
      expect(callback).toBe('TRYBE');
      done();
    });
});