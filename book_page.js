// Javascript file for Mervyn web project
// Date: 08/10/2019
// Copyright Clym Smith 2019

var totalPrice = 0;
var total_html = "<div class='col-12'><h3 id='total'>Total: £0</h3></div>";

// check if there's a 'total' element first
(function() {
	if (!document.getElementById("total")) {
		addTotalHTML();
	}
})();

// add a total at the bottom
function addTotalHTML() {
	document.getElementsByClassName("alt")[0].insertAdjacentHTML('afterend', total_html);
}

var total_element = document.getElementById("total");

var b = document.getElementsByTagName("input");

// add event listeners for change
(function() {
	for (let i = 0; i < b.length; i++) {
		if(b[i].type == "text") {
	    	b[i].addEventListener("change", changeTotal);
	    }
	}
})();

// change the total figure
function changeTotal() {
	let a = document.getElementsByTagName("TR");
	let total = 0;
	// ignore first row
	for (let i = 1; i < a.length; i++) {
		// price
		let price = parseFloat(a[i].children[2].innerHTML);
		// quantity
		let quantity;
		if (a[i].children[3].children[0].value == "") {
			quantity = 0;
		} else {
			quantity = parseFloat(a[i].children[3].children[0].value);
		}

		total += price * quantity;
	}
	
	// round to two decimal place
	totalPrice = Math.round(total*100)/100;
	changeTotalText();

}

// change the total text
function changeTotalText() {
	console.log(total_element);
	total_element.innerHTML = "Total: £" + totalPrice.toString();
}


