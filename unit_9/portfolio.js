function myFunction() {
	var x = document.getElementById("myDropdown");
	if (x.className === "dropdown") {
		x.className += " responsive";
	} else {
		x.className = "dropdown";
	}
}