//hre never imported anywhere but what does it do
//hardhat run time environment is an object containing all the functionality that hardhat exposes when running
//a task, test, or script. In reality hardhat is the HRE

//everytime u run from terminal npx hardhat you are getting hre object built on the fly using hardhat.config.js
//this means u dont have to do const hardhat = require('hardhat';)


const main = async () => {
    //below line compiles the contract and generates necessary files we need to work with our contract
    //under artifacts directory
    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    //hardhat will create a local eth network for us, but after script finishes it destroys it
    //everytime u refresh u start with a clean blockchain - very good
    const nftContract = await nftContractFactory.deploy();
    //wait until contract is mined and deployed to our local blockchain - hardhat creates fake miners
    //once deployed contract constructor runs
    await nftContract.deployed();

    //minting nfts
    let txn = await nftContract.makeAnEpicNFT();
    await txn.wait();

    //minting another nft for fun
    txn = await nftContract.makeAnEpicNFT();
    await txn.wait();
    //console log the address of the actual contract
    console.log("Contract deployed to: ", nftContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}


runMain();

//before running change to solidity 0.8.0 in hardhat.config.js