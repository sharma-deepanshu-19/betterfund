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
      url: `https://polygon-mumbai.infura.io/v3/500553bcf26f4de1880333dfcce56107`,
      accounts: ['c210f54a203dd8e13b59757d35ca223a81d90051d059145c9779e337b23a59ca'],
    },
    // polygon: {
    //   url: 'https://polygon-rpc.com/',
    //   accounts: [process.env.pk],
    // },
  },
};
