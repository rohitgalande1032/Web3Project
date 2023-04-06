

require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/OS3mWRRG9xHKcQG5_yCfXuW7QglSK3E5',
      accounts: ['8c29df0c3e22f59db71b6d97f34f72e0bc35f9786d092065e69867f3e1454e57']
    }
  }
}