const util = require('util');

const encode = function(str, encoding) {
  if(!Buffer.isEncoding(encoding.toString())) {
    throw Error(util.format("cannot encode to", encoding));
  }
  return Buffer.from(str.toString()).toString(encoding);
}

/**
 * 
 * @param { string to encode} str 
 * @param { encoding output} encoding 
 */
const strEncode = function(str, encoding) {
  if(process.argv[2] && process.argv[3]) {
    return encode(process.argv[2], process.argv[3]);
  }
  return encode(str, encoding);
}

module.exports = strEncode;