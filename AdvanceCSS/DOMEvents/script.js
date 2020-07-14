
let firstPlane = function(plane1){
	let plane = plane1+"123";
	return function(plane2){
		return `the passanger from plane1 ${plane} 
		is sitting next to passanger from plane2 ${plane2}`;
	}
}

//==========================

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// Length of th list
function inputLength() {
	return input.value.length;
}

// Add Delete button
function createDeleteButton(){
	var lis = document.querySelectorAll("li");
	if (lis.length === 0) {
		ul.style.display = "none";
	} else {
		ul.style.display = "block";
		lis.forEach(li => {
			if (li.childNodes.length !== 2) {
				var deleteBtn = document.createElement("button");
				deleteBtn.innerHTML = "X";
				deleteBtn.classList.add("btn-x");
				li.appendChild(deleteBtn);
			}
		})
	}
}

// Create li element and append child
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

// Click Enter button
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		createDeleteButton();
	}
}

// Press enter key
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		createDeleteButton();
	}
}

// Toggle line-through
function toggleLineThrough(e){
	if (e.target.localName === "li" &&
		!(e.target.className.includes("done"))) {
			e.target.classList.add("done");
	} else {
		e.target.classList.remove("done");
	}	
}

// Remove list item
function removeListItem(e) {
	if (e.target.className === "btn-x"){
		e.target.parentElement.remove();
	}
}

// INVOKATION //
createDeleteButton();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
document.addEventListener("click", toggleLineThrough);
document.addEventListener("click", removeListItem);

