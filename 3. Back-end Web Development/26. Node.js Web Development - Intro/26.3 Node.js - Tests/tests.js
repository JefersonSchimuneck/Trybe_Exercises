const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const verifyNumberFn = require('./verifyNumber');
const writeFileFn = require('./writeFile');

describe('verifyNumber.js', () => {
  it('returns a string', () => {
    const answer = verifyNumberFn(1);

    expect(answer).to.be.a('string');
  });

  it('returns "positivo", when the paremeter is a positive number', () => {
    const answer = verifyNumberFn(1);

    expect(answer).to.be.equals('positivo');
  });

  it('returns "negativo", when the paremeter is a negative number', () => {
    const answer = verifyNumberFn(-1);

    expect(answer).to.be.equals('negativo');
  });

  it('returns "neutro", when the paremeter is a neutral number', () => {
    const answer = verifyNumberFn(0);

    expect(answer).to.be.equals('neutro');
  });

  it('returns a message when the paremeter is not a number', () => {
    const answer = verifyNumberFn("abc");

    expect(answer).to.be.equals('o valor deve ser um número');
  })
});

describe('writeFile.js', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync')
  });

  after(() => {
    fs.writeFileSync.restore();
  })

  it('returns a string', () => {
    const answer = writeFileFn('file.txt', 'Tests!');

    expect(answer).to.be.a('string');
  });

  it('returns "ok"', () => {
    const answer = writeFileFn('file.txt', 'Tests!');

    expect(answer).to.be.equals('ok');
  })
})