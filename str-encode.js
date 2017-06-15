const util = require('util');

const encodings = [
  'ascii',
  'base64',
  'binary',
  'hex',
  'ucs2',
  'ucs-2',
  'utf16le',
  'utf-16le',
  'utf8',
  'utf-8',
  'latin1'
]

/**
 * 
 * @param { string to encode} str 
 * @param { encoding output} encoding 
 */
const strEncode = function(str, encoding) {
  if(!encodings.find(known => encoding === known)) {
    throw Error(util.format("cannot encode to", encoding));
  }
  return Buffer.from(str.toString()).toString(encoding);
}

module.exports = strEncode;