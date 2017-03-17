var textinput = document.getElementById("regBox");
var btn = document.querySelector('#regButton');
btn.addEventListener('click', function() {
  if (textinput.value.length > 0) {

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

  }
});
var callDropdown = document.querySelector(".Dropdown");
callDropdown.addEventListener("change", function() {
  var selectedTown = callDropdown.options[callDropdown.selectedIndex].value;
  var unoderedList = document.querySelector("#regNumList");
  var listOfLi = unoderedList.getElementsByTagName('li');
  for (var i = 0; i < listOfLi.length; i++) {
    var arrayReg = listOfLi[i].textContent.toUpperCase();


    if (selectedTown !== "All") {
      if (selectedTown === arrayReg) {
        listOfLi[i].style.display = 'block';
      } else if (selectedTown !== arrayReg) {
        listOfLi[i].style.display = 'none';
      }
    } else {
      listOfLi[i].style.display = 'block';
    }
  }

});
