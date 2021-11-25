const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    // Call the function.
    // let txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    //  await txn.wait()
    //  console.log("Minted NFT #1")

    //txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    //await txn.wait()
    //console.log("Minted NFT #2")
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

runMain();

//in hardhat config js under module.exports add networks: {
//    rinkeby: {
//        url: "alchemy api key",
//        accounts: [private rinkeby account key]
//    }
//}

//run npx hardhat run scripts/deploy.js --network rinkeby