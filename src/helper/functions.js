const fs = require('fs');
/**
 * @return {String}
 * @param {Object} body
 */
let getType = body => {
  let res = "**";
  if (body.types.length == 1) {
    res = body.types[0].type.name;
  } else {
    for (const t of body.types) {
      res += ` ${t.type.name} `;
    }
  }
  res += "**";
  return res;
};

let find = arr => {
  let val = arr.find(element => {
    return element.language.name === "en";
  });
  return val.flavor_text;
};

function saveInventory(inventory) {
  fs.writeFileSync(`./data/inventory.json`, JSON.stringify(inventory, null, 2), { encoding:'utf8' });
}

function catchPkmn(pokemon, chance) {
  let result = "";
  let i = 0;
  let bool = false;
  while (i<3 && bool == false) {
    let randInt = Math.random().toFixed(2)*chance;
    console.log(chance);
    if(0<randInt<0.4) {
      // success
      bool == true
    }
    i++;     
  }
  if(bool || chance == 1) {
    result = "caught"
  }
  else {
    result = "caught"
  }
  return result;
}

module.exports = {find, getType, saveInventory, catchPkmn}