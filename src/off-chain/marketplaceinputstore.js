const fs = require('fs');
    
const useri = {
        "ID":ID.value,
        "itemName":itemName.value,
        "sellerName":sellerName.value,
        "sellerPublicKey":sellerPublicKey.value,
        "imgURL":imgURL.value,
        "prodVid":prodVid.value,
        "itemPrice":itemPrice.value,
        "itemCondition":itemCondition.value
    };

const marketplacei = JSON.stringify(useri);

var blob = new Blob([marketplacei], {type: "json"});
saveAs(blob, "marketplaceNewItem.json");




