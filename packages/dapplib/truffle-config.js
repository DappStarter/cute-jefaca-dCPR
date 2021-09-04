require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food play rebel machine history coral light army ghost'; 
let testAccounts = [
"0xd073356f5062daf9fc7e1d1a4a792354ea3a874a502555437b71e68d1dcd1dbb",
"0xdfeb5d45acb9e19d94d500ff9495b8b6880c3ee2f459e5239f37ca2885adc89b",
"0x8236797a2e438af55780aa3edc6d4cd762ed9c88d8f599f6d85d9dade33524a6",
"0x0f7b067d7553554451451ff15e66de73b76c53c19970fd1223c3d11ea3450a6c",
"0xcf6bf3f39875c09343873d6765ae17687bfdb9f899dc126ad3b0f6bfbeee0060",
"0x602c9f450d5aa27d09cbabcfa99f643a9e7cc810c35520263a4d4d8f4713e025",
"0x153994efe4f9756b64d46861b0195d4df43d3385d74cbc793f8348a8e98fe18b",
"0x2def17c1d9bfddbb4cb38f776f1776a3255678798d2bd8ddf53b03418fc97b14",
"0x183189146e6ad8d02953aa322e07ab0e9a303bb2d0e834d38e47131d54a32ca0",
"0x941268ac5e7e917541112f322d96e746de180b45c7a8a66e675ad255e61b7384"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

