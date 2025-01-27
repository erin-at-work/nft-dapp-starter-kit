# Smart Contracts | NFT Minting Toolkit

## Sample Contract

`NonFungibleCoinbae` (deployed to Rinkeby Testnet): [`0xCa4E3b3f98cCA9e801f88F13d1BfE68176a03dFA`](https://rinkeby.etherscan.io/address/0xCa4E3b3f98cCA9e801f88F13d1BfE68176a03dFA)

## Prerequisites

Before you start, make sure you have the following information handy

1. Have access to the public (public wallet address) and private key to your Ethereum account
2. Set up an Alchemy (Recommended) or Infura account (the free one works!) to retrieve an API endpoint
3. Set up an etherscan account and obtain the API key (optional)

## Deploying the NFT Contract

1. Install dependencies

   ```
   yarn install
   ```

1. Make a copy of `.env.sample` and fill it out

   ```
   cp .env.sample .env
   ```

   Please note the required fields. The `CONTRACT_ADDRESS` field should only be filled out after you deploy the smart contract.

1. Make your modifications to the smart contract in `./contract/nft.sol`

1. Compile the contract

   ```
   npx hardhat compile
   ```

1. Deploy the contract (default network is set to Rinkeby)

   ```
   yarn deploy
   ```

   To customize the network (to local or test networks)

   ```
   npx hardhat run scripts/deploy.js --network [network of choice]
   ```

   We recommend you deploy to a local network or testnet such as Rinkeby to start.

   If needed, modify `scripts/deploy.js` to include the specific deploy arguments that you want your ERC721 contract to be deployed with. Make sure the parameter passed into `await hre.ethers.getContractFactory` matches the name of the compiled smart contract exactly.

1. Verify the contract on Etherscan (optional, default network is set to Rinkeby)

   Update `CONTRACT_ADDRESS` with the deployed contract address and run the following script to verify your contract on Etherscan

   ```
   yarn verify
   ```

   To customize the network (make sure network is supported by Etherscan)

   ```
   npx hardhat etherscan-verify --network [network of choice]
   ```

## Steps to Test

Run `npx hardhat test --network hardhat`. Additionally, this repository has been configured with a Github workflow (see [`hardhat-tests.yml`](/.github/workflows/hardhat-tests.yml)) to run the smart contract tests on every pull request.

## Scripts

There are some contract interaction scripts and npm commands to make interacting with our smart contracts more convenient. Make sure to update these scripts as you modify the contract.

### Overview

Scripts for contract interactions and generate merkle roots are located in [`scripts`](scripts).

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
```

### Merkle Roots

To set merkle roots for allowlists, update the addresses in `allowlists/presaleList.json` and `allowlists/giftlist.json` and run the following scripts.

```
npm run rinkeby:setPresaleListMerkle
npm run rinkeby:setReserveListMerkle
```

### Activate pre-sale or public sale

To modify the active sale states, modify the following environment variables:

```bash
IS_PRESALE_ACTIVE=true # modify as needed
IS_PUBLIC_SALE_ACTIVE=true # modify as needed
BASE_URI=[include your own base URI]
```

and run the following scripts

```
npm run rinkeby:setIsPublicSaleActive
npm run rinkeby:setIsPresaleActive
```

## Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Rinkeby.

In this project, copy the .env.sample file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Rinkeby node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network rinkeby scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network rinkeby DEPLOYED_CONTRACT_ADDRESS [deploy parameters]
```

Alternatively, we've created a command to make this process faster on Rinkeby testnet. Run `npm run rinkeby:verify DEPLOYED_CONTRACT_ADDRESS [deploy parameters]` to verify your contract deployed on Rinkeby.

## Gas Usage

| **Method**                   | **Gas**   | Average Cost (@ Gas Price of 50 gwei) |
| ---------------------------- | --------- | ------------------------------------- |
| Contract Deploy              | 4,747,369 | 0.23736845 ETH                        |
| Set is Public/Presale Active | 29,063    | 0.00145315 ETH                        |
| Set Base URI                 | 115,025   | 0.00575125 ETH                        |
| Set Merkle Root              | 29,085    | 0.00145425 ETH                        |
| Public Mint (1 NFT)          | 65,630    | 0.0032815 ETH                         |
| Public Mint (3 NFTs)         | 152,074   | 0.0076037 ETH                         |

---

Footnotes

1. We recommend you use a burner wallet for all testing. Please be careful with your private keys and make sure you only put them in the `.env` files. Hardcoding them anywere or including them in a file that is not in the `.gitignore` can lead to your private keys being comprimised.
2. You can use any RPC provider of your choice but we've had the best experience using Alchemy or Infura.
3. An Etherscan API key is required for contract verification.
