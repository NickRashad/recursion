// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  function getEl(document){
    for (var i = 0; i < document.childNodes.length; i++) {
      var classes = document.childNodes[i].classList;
      if (classes && classes.contains(className)) {
        result.push(document.childNodes[i]);
      }
      if (document.childNodes[i].childNodes[0]) {
        getEl(document.childNodes[i]);
      }
    }
  }
  getEl(document);
  return result;
};
/* 
  console.log(document.getElementsByClassName('targetClassName')) 
    => [body.targetClassName, div.targetClassName]
  console.log( document.body.classList[0] ) => targetClassName
  console.log( document.body.childNodes ) => [text, div#mocha, text, div.targetClassName]
  //https://codereview.stackexchange.com/questions/91181/practicing-recursion-with-getelementsbyclassname
*/