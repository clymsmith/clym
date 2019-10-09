// Javascript file for Mervyn web project
// Date: 08/10/2019
// Copyright Clym Smith 2019

////////////////////////
// Change these values as needed
var delivery_details = {
	"uk" : "4.90",
	"usa" : "9.90",
	"canada" : "12.90",
	"eu" : "7.90",
	"outside-eu" : "19.90"
}
var delivery_message = "Postage cost: £";
////////////////////////
// DON'T CHANGE ANYTHING BELOW HERE

var postage_html = document.getElementById("pp_tag").children[1];

// First  we need to change text when page first Loads up
(function() {
	postage_html.innerHTML = "<h3>" + delivery_message + delivery_details.uk + "</h3>";
})();

// Next we need to set up event listeners
var b = document.getElementsByTagName("input");

(function() {
	for (let i = 0; i < b.length; i++) {
		if(b[i].type == "radio") {
	    	b[i].addEventListener("change", changeDeliveryPrice);
	    }
	}
})();

// Finally here we change text when user changes radio HTML
function changeDeliveryPrice() {
	postage_html.innerHTML = "<h3>" + delivery_message + delivery_details[this.value.toLowerCase()] + "</h3>";
}
