require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stove cost outside property half cloth off giggle'; 
let testAccounts = [
"0xaf673d5456584a923fdea3151bf7f082b30dbd87add878ab981329c504bbd47e",
"0x2471f6e166b770c3b27f40d988950e90b58b1243c5583ef9590be3eeb76a8a64",
"0x635a0fa182266ccf75683b10b3f989f87ac11b5b2901eede4cd7ee23ec2d34a8",
"0xed6b94714e34a84a85ddf26c9d7945a69045d6c974c50eb35cc76c84fcfa9706",
"0xdb03db92c8fa070c7dfca62ba48d3e7c18c7053f8c00646766d953597136af79",
"0x608427af287a72e39a3885b7cda4fc13563f00d3943f1b4be97ecdf7401b96f7",
"0xc926f06050fe581e242d4b5bf6557fbbc18fcd9286de13ea42f27604c8170381",
"0x950b06798f75e9c55cee0fa4a9b18d91bc435b4bdec105f8feb53b11ca4ab647",
"0xa4dcf57981caa85c1bfef6e406e4b6ebd50d0d4b135543b90f7e997e9a2b14cc",
"0x46edf7509935124385386ee7114ec373ff0a68a4901595379674c9be140e5608"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

