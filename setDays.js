var yearOffset = 50;

var a = document.getElementById("ptw_start_date");
var b = document.getElementById("ptw_expiry_date");
var c = document.getElementById("ptw_duration");

a.addEventListener("change", updateStartDate);
b.addEventListener("change", updateExpiryDate);

var startDate;
var expiryDate;
var currentDate = new Date();
var diffTime;
var diffDays;

var dd = currentDate.getDate();
var mm = currentDate.getMonth()+1; // january is 0!
var yyyy = currentDate.getFullYear();
	if (dd<10) {
		dd = '0'+dd;
	}
	if (mm<10){
		mm='0'+mm;
	}

var today = new Date();
today = yyyy+'-'+mm+'-'+dd;

a.setAttribute("min",today);
b.setAttribute("min",today);

var maxDate = new Date();
maxDate = (yyyy+yearOffset)+'-01-01';

a.setAttribute("max",maxDate);
b.setAttribute("max",maxDate);

var diffExpTime;
var diffExpDays;

var validStartDate = false;
var vadidExpiryDate = false;

function updateStartDate()
{
	startDate = new Date(a.value);
	diffTime = startDate-currentDate;
	diffDays = Math.ceil(diffTime/(1000*60*60*24));

	if (startDate != "Invalid Date" && diffDays >= 0)
	{
		validStartDate = true;
		workOutDays();
	} else {
		c.value = 0;
	}
	
}

function updateExpiryDate()
{
	expiryDate = new Date(b.value);
	diffExpTime = expiryDate-currentDate;
	diffExpDays = Math.ceil(diffExpTime/(1000*60*60*24));

	if (expiryDate != "Invalid Date" && diffExpDays >= 0)
	{
		vadidExpiryDate = true;
		workOutDays();
	} else {
		c.value = 0;
	}
	
}

function workOutDays()
{
	if (validStartDate != false && vadidExpiryDate != false)
	{
		var diff = expiryDate - startDate;
		var difference = Math.ceil(diff/(1000*60*60*24));
		difference >= 0 ? c.value = difference : c.value = 0;
	}
}
