

const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {


  contracts_build_directory: "../client/src/contracts",
  networks: {

    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic: { phrase: `${process.env.MNEMONIC}` },
          providerOrUrl: `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`,
          addressIndex: 0,
        });
      },
      network_id: 3,
    },

  },

  mocha: {
  },

  compilers: {
    solc: {
      version: "0.8.14",
    },
  },

};
