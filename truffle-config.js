 const HDWalletProvider = require('@truffle/hdwallet-provider');
 const fs = require('fs');
 const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {

  networks: {
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  mocha: {
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    // verify_api: '-' 
  },
  compilers: {
    solc: {
      version: "0.8.11",    
      
    }
  },
};
