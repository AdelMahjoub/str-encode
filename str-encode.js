const util = require('util');
const buffer = require('buffer');

/**
 * 
 * @param { string to encode} str 
 * @param { encoding output} encoding 
 */
const strEncode = function(str, encoding) {
  if(!Buffer.isEncoding(encoding.toString())) {
    throw Error(util.format("cannot encode to", encoding));
  }
  return Buffer.from(str.toString()).toString(encoding);
}

module.exports = strEncode;