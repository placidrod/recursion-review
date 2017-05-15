// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var isEmpty = function (obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  if (typeof obj === 'number') {
    result += obj;
  } else if (obj === null) {
    result += 'null';
  } else if (typeof obj === 'boolean') {
    result += obj;
  } else if (typeof obj === 'string') {
    result += '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    if (obj.length === 0 ) {
      result += '[]';
    } else {
      result += '[';
      obj.forEach(function(element) {
        result += stringifyJSON(element) + ',';
      });
      result = result.slice(0, result.length-1);
      result += ']';
    }
  } else if (typeof obj === 'object') {
    if (isEmpty(obj)) {
      result += '{}';
    } else {
      result += '{';
      for (var key in obj){
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
      result = result.slice(0, result.length-1);
      result += '}';
    }
  } else if (obj === undefined) {
      result += '';
  } else if (obj === )

  return result;

};

