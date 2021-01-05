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

//2
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('test getUserName with promises', () => {
  describe('when ID exists', () => {
    it('returns the name', () => {
      expect.assertions(1);
      return getUserName(4).then(data => expect(data).toEqual('Mark'));
    });
  });

  describe('when ID doesnt exist', () => {
    it('returns an error message', () => {
      expect.assertions(1);
      return getUserName(2).catch(error =>
        expect(error).toEqual({ error: 'User with 2 not found.' })
      );
    });
  });
});

//3
describe('test getUserName with asyn/await', () => {
  describe('when ID exists', () => {
    it('returns the name', async () => {
      expect.assertions(1);
      const data = await getUserName(4);
      expect(data).toEqual('Mark');
    });
  });

  describe('when ID doesnt exist', () => {
    it('returns an error message', async () => {
      expect.assertions(1);
      try {
        await getUserName(1);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 1 not found.' });
      }
    });
  });
});

//4
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

test('list of repositories names', () => {
  const url = 'https://api.github.com/users/tryber/repos';

  return getRepos(url).then(result => {
    expect(result).toContain('hackatrybe-covid');
    expect(result).toContain('hexo-theme-timeline');
  });
});

//5

// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach