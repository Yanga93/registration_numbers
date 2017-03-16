var textinput = document.getElementById("regBox");

function addRegNumbers() {
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
};

// Clickable Dropdown starts here
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
      if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
      } else {
          a[i].style.display = "none";
      }
  }
}
