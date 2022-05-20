require('@nomiclabs/hardhat-waffle');

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_ID}`,
      accounts: [process.env.account_pk],
    },
    // polygon: {
    //   url: 'https://polygon-rpc.com/',
    //   accounts: [process.env.pk],
    // },
  },
};
