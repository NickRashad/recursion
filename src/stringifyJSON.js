// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj[0] === undefined){
    return [];
  } else if(typeof obj[0] === "number" || typeof obj[0] === "boolean"){
    return [obj[0]].concat( stringifyJSON(obj.slice(1)) );
  } else if(obj[0] === null){
    return [null].concat( stringifyJSON(obj.slice(1)) );
  } else if(typeof obj[0] === "string"){
    return [ obj[0] ].concat( stringifyJSON(obj.slice(1)) );
  } else if(Array.isArray(obj[0])) {
    return [stringifyJSON(obj[0])].concat( stringifyJSON(obj.slice(1)) );
  } else if(typeof obj[0] === "object"){
    var newObj = {};
    for(var key in obj[0]){
      newObj['"' + key + '"'] = obj[0][key];
    }
    return [newObj].concat( stringifyJSON(obj.slice(1)) );
  }
};

/*
var letSee = stringifyJSON([
  9,
  null,
  true,
  false,
  'Hello world',
  8,
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
  ]);

  console.log(letSee);  
*/