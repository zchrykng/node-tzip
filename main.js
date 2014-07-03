

var data = require('./data');

var mapping = {};

data.zones.forEach(function (key) {
  data[key].forEach(function (zip) {
    mapping[zip] = (key == 'unused') ? null : key;
  })
});

module.exports = function (zip) {
  if (typeof zip == 'number' || zip.length < 5) {
    zip = ('00000' + zip).slice(-5);
  } else if (!(typeof zip == 'string' || zip instanceof String)) {
    console.log('TZIP: This function only accepts numbers and strings. Pleas correct this.');
    console.log(zip);
    return false;
  }
  for (var i = 5; i >= 0; i--) {
    var checkString = zip.substr(0, i);
    if (mapping[checkString]) {
      return mapping[checkString]
    }
  }
  return "unknown";
};