const fs = require('fs');

const IPFS_SERVER_URL = 'https://ipfs.infura.io';
const IPFS_SERVER_PORT = '5001';
   
/*
** The latest version of ipfs-http-client is ESM-only. Hence we need
** to use the dynamic import function to load ipfs-http-client at runtime 
** from a CJS module.
** Ref: https://github.com/ipfs/js-ipfs/blob/master/docs/upgrading/v0.62-v0.63.md#esm
*/
async function loadIpfsHttpClient() {
  // TODO: Modify to use private IPFS server instead of Infura gateway.
  const { create } = await import('ipfs-http-client')

  const client = await create({
	url: IPFS_SERVER_URL+':'+IPFS_SERVER_PORT+'/api/v0'
  })

  return client
}

/*
 * Function to load a given file to an IPFS gateway.
 */
async function loadItemToIpfs(client, file) {
  try {
      const created = await client.add(file);
      const cidV0 = `${created.path}`;
      console.log(cidV0);
      const url0 = IPFS_SERVER_URL+'/ipfs/'+cidV0;

      console.log("Loaded file on IPFS");
      console.log("IPFS File URL(v0 CID) = ", url0);
 
      /* Open this code block to convert v0 CID to v1.
      const cidV1 = convertCidToV1(cidV0);
      console.log(cidV1);
      const url1 = IPFS_SERVER_URL+'/ipfs/'+cidV1;
      console.log("IPFS File URL(v1 CID) = ", url1);
      */
      const pinset = await client.pin.add(cidV0)

      return created.cid;
     
    } catch (error) {
      console.log(error.message);
      return "";
  }
}

/*
 * Function to download specific content from an IPFS gateway using its CID.
 */
async function getItemFromIpfs(client, cid) {
  try {
      const chunks = [];
      for await (const chunk of client.cat(cid)) {
        chunks.push(chunk);
      }

      itemStr = chunks.toString();
      console.log("Added file contents:", itemStr);

      writeItemStringToItemsFile(itemStr, "./all-items.json");
    } catch (error) {
      console.log(error.message);
  }
}


/*
 * Function to convert a v0 CID, which is the default created by
 * IPFS HTTP client, into a v1 CID, which is the preferred option.
 */
function convertCidToV1(value) {
    var cid = new CID(value)
    return cid.toV1().toBaseEncodedString('base32')
}

/* 
 * Function to append item JSON string to a file containing all item details.
 */
function writeItemStringToItemsFile(itemStr, itemFile) {
  fs.appendFileSync(itemFile, itemStr);
}


/** Stub for main.
 *
 **/
async function main () {
  const sampleItem = {
        "ID": "123",
        "itemName": "iPhone",
        "sellerName": "Alice",
        "sellerPublicKey": "abc",
        "imgURL": "http://file:img1.png",
        "prodVid": "http://file:video1.mpg",
        "itemPrice": 100,
        "itemCondition": "New"
   };

  const sampleItemStr = JSON.stringify(sampleItem);
  const itemBuffer = Buffer.from(sampleItemStr)

  const ipfsClientInst = await loadIpfsHttpClient();
  
  const itemCid = await loadItemToIpfs(ipfsClientInst, itemBuffer);
  await getItemFromIpfs(ipfsClientInst, itemCid);
}

main().catch(console.error).finally(() => process.exit());

