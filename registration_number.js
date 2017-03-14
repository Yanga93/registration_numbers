function addRegNumbers() {
  // Create a <li> node
  var node = document.createElement("LI")
  // Create a text node
  var textnode = document.createTextNode(document.getElementById("regBox").value);
  // Append the text to <li>
  node.appendChild(textnode);
  // Append <li> to <ul> with id="regNumList"
  document.getElementById("regNumList").appendChild(node);
  // Empty the textnode
  document.getElementById("regBox").value = "";
};
