// Import the API, Keyring and some utility functions
const { ApiPromise } = require('@polkadot/api');
const { Keyring, KeyringPair } = require('@polkadot/keyring');
const { mnemonicGenerate } = require('@polkadot/util-crypto');

var api: InstanceType<typeof ApiPromise> //Global scope.

/**
 * Generate a Keypair(account) for the user and return the Public Key and mnemonic seed phrase.
 * This method generates a kaypair using the Subkey CLI commands.
 * User needs to save this seed phrase to recover this newly generated keypair.
 **/
export async function createKeypairWithCli(keyname: string, keyring: InstanceType<typeof Keyring>): Promise<string[]> {
  const execSync = require('child_process').execSync;
  // import { execSync } from 'child_process';  // replace ^ if using ES modules

  const output = execSync('subkey generate', { encoding: 'utf-8' });  // the default is 'buffer'
  const result = output.split("\n");
  const mnemonic = result[0].split(":")[1].trim();
  const pubKey = result[5].split(":")[1].trim();

  return [mnemonic,pubKey];
}

/**
 * Generate a Keypair(account) for the user and return the Public Key and mnemonic seed phrase.
 * This method generates a kaypair using the Keyring class API.
 * User needs to save this seed phrase to recover this newly generated keypair.
 **/
export async function createKeypair(keyname: string, keyring: InstanceType<typeof Keyring>): Promise<object[]> {
  const { mnemonicGenerate } = require('@polkadot/util-crypto');

  // generate a mnemonic with default params (we can pass the number
  // of words required 12, 15, 18, 21 or 24, less than 12 words, while
  // valid, is not supported since it is more-easily crackable)
  const mnemonic = mnemonicGenerate(24);

  // create & add the pair to the keyring with the type and some additional
  // metadata specified
  const pair = keyring.addFromUri(mnemonic, { name: keyname}, 'ed25519');

  // the pair has been added to our keyring
  console.log(keyring.pairs.length, 'pairs available');

  // log the name & address (the latter encoded with the ss58Format)
  console.log(pair.meta.name, 'has address', pair.address);

  return [mnemonic, pair];
}

/**
 * Make a payment from a source keypair to a destination keypair.
 **/
export async function makePayment(fromKeypair: string, toKeypair: string, numNirvana: number): Promise<void> {
  
  // Create a extrinsic, transferring numNirvana units to 'toKeyPair'
  const transfer = api.tx.balances.transfer(toKeypair, numNirvana);

  // Sign and send the transaction using our account
  const hash = await transfer.signAndSend(fromKeypair);

  // console.log('Transfer sent with hash', hash.toHex());

}

export async function checkBalance(api: InstanceType<typeof ApiPromise>, pubKey: string): Promise<void>
{
  // Retrieve the last timestamp
  const now = await api.query.timestamp.now();

  // Retrieve the account balance & nonce via the system module
  const { nonce, data: balance } = await api.query.system.account(pubKey);

  console.log(`${now}: ${pubKey} has balance of ${balance.free} and a nonce of ${nonce}`);

}

export 
/** Stub for main.
 *
 **/
async function main () {
  // Instantiate the API
  const api = await ApiPromise.create();

  // Constuct the keyring after the API (crypto has an async init)
  const keyring = new Keyring({ type: 'sr25519' });

  // console.log("\n Generating random seedphrase and corresponding keypair...");

  const fromKey: object[] = [];
  const toKey: string[] = [];

  await createKeypair('John', keyring).catch((error: Error) => {
        throw new Error(error.message);
    })
    .then((outputs: object[]) => {
        fromKey.length = 0;
        return outputs.forEach((item, i) => {
          fromKey[i] = item;
        });
    });

  await createKeypairWithCli('Jane', keyring).catch((error: Error) => {
        throw new Error(error.message);
    })
    .then((outputs: string[]) => {
        toKey.length = 0;
        return outputs.forEach((item, i) => {
          toKey[i] = item;
        });
    });

  // John makes a payment to Jane. 
  const fromKeyringPair: InstanceType<typeof KeyringPair> = fromKey[1];

  //await makePayment(fromKey[1], toKey[1], 100); //TBD

  // First grant some DOT to John.
  // Add Alice to our keyring with a hard-deived path (empty phrase, so uses dev)
  const alice = keyring.addFromUri('//Alice');
  await checkBalance(api, alice.address)
 
  const transfer = api.tx.balances.transfer(fromKeyringPair.address, 12345);
  // Sign and send the transaction using our account
  const hash = await transfer.signAndSend(alice);

  await checkBalance(api, alice.address)

  const transfer2 = api.tx.balances.transfer(toKey[1], 1);
  const hash2 = await transfer2.signAndSend(fromKeyringPair);
}

main().catch(console.error).finally(() => process.exit());
