require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/CqPK_YqXX1Re6Xg61W8--9urVM8NOZNf',
      accounts: ['59b7f74eb61030bc1b638de1dc67199d558740303b5ebc0724b84e11d032e66e'],
    },
  },
};
