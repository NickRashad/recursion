// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
function type(obj) {
  return Object.prototype.toString.call(obj).match(/.* (.*)\]/)[  1]
}
var stringifyJSON = function(obj) {
  if (typeof obj === "function" || typeof obj === "undefined") {
    return null;
  } else if (obj === null) {
    return "null";
  } else if (typeof obj === "number" || typeof obj === "boolean") {
    return "" + obj;
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
      var newArray = obj.map(o => stringifyJSON(o)).join(",");
      return '[' + newArray + ']';
  } else if (typeof obj === "object") {
    var result = Object.keys(obj).map(o => {
      if(stringifyJSON(obj[o]) !== null){
        return '"' + o + '":' + stringifyJSON(obj[o])
      } 
    }).filter(o => o !== undefined);
    return "{" + result.join(",") + "}";
  }
};
/*
https://github.com/douglascrockford/JSON-js/blob/master/json2.js
https://stackoverflow.com/questions/22333101/recursive-json-stringify-implementation
https://medium.com/functional-javascript/recursion-282a6abbf3c5
*/
