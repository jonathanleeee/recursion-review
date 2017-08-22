// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  /*
debugger;
  var result = [];
  var searchNodes = function(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.classList && node.classList.contains(className)) {
        result.push(node);
      }
      if (node.hasChildNodes() ) {
        searchNodes(node.childNodes);
      }
    }
  };
  searchNodes(document.body.childNodes);
  return result;
*/
  var nodes = [];
  //  declare nodes array to store nodes

  var searchNodes = function(node) {
    var parts = node.className.split(' ');
    //  compare node name to className
    if (parts.indexOf(className) >= 0) {
      nodes.push(node);
    }
    //iterate over children
    for (var i = 0; i < node.children.length; i++) {
      //  call getElementsByClassName on all children
      searchNodes(node.children[i]);
    }
  };
  searchNodes(document.body);
  return nodes;
  // your code here

};
