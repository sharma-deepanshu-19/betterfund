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
      accounts: ['2148e2f71a009228fe5b33887d8526a495845580544f5b4d6a061c0e2a9077da'],
    },
    // polygon: {
    //   url: 'https://polygon-rpc.com/',
    //   accounts: [process.env.pk],
    // },
  },
};
