// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj[0] === undefined){
    return [];
  } else if(typeof obj[0] === "number" || typeof obj[0] === "boolean"){
    return [obj[0]].concat( stringifyJSON(obj.slice(1)));
  } else if(obj[0] === null){
    return [null].concat( stringifyJSON(obj.slice(1)) );
  } else if(typeof obj[0] === "string"){
    var singlefy = obj[0];
    singlefy = singlefy.replace(/'/g, '"');
    return [ singlefy ].concat( stringifyJSON(obj.slice(1)) );
  } else if(Array.isArray(obj[0])) {
    return [stringifyJSON(obj[0])].concat( stringifyJSON(obj.slice(1)) );
  } 
};

  /*if(obj[0] === undefined){
    return [];
  } else {
    if (Array.isArray(obj[0])){
      return stringifyJSON(obj[0]).concat( stringifyJSON(obj.slice(1)) );
    } else {
      return obj[0].concat( stringifyJSON(obj.slice(1)) );
    }
  }*/
  /*var result = [];
  function stringify(obj){
    for (var i = 0; i < obj.length; i++) {
      
    }
  }
  stringify(obj);
  return result;*/