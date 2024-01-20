
const path = require("path")
const solc = require("solc")
const fs = require("fs-extra")

// Delete previous build folder
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// Read 'Campaign.sol' from the 'contract' folder
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

const input = {
    language: 'Solidity',
    sources: {
        'Campaign.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);
// Compile both contracts with solidity compiler
// `output` here contains the JSON output as specified in the documentation
for (let contractName in output.contracts['Campaign.sol']) {
    console.log(
        contractName +
        ': ' +
        output.contracts['Campaign.sol'][contractName].evm.bytecode.object
    );
}

// // Write output to the build directory
// fs.ensureDirSync(buildPath);
// for (let contract in output) {
//     fs.outputJsonSync(
//         path.resolve(buildPath, contract.replace(":", "") + ".json"),
//         output[contract]
//     );
// }