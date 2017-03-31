var count = 0;

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
	if (!event.target.matches('.header_dropbtn')) {

		var dropdowns = document.getElementsByClassName("header_dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function resetform(rForm) {
	var elements = rForm.elements;

	oForm.reset();
	for (i = 0; i < elements.length; i++) {

		field_type = elements[i].type.toLowerCase();

		switch (field_type) {

			case "text":
			case "password":
			case "textarea":
			case "hidden":

				elements[i].value = "";
				break;

			case "checkbox":
				if (elements[i].checked) {
					elements[i].checked = false;
				}
				break;


			default:
				break;
		}
	}
}

function IsEmpty() {
	var c = document.getElementById('fname').value;
	if (c.search(/^[a-zA-Z]/) === -1) {
		alert("sapces, numbers and leaving the first name field is not allowed ");
		document.getElementById('fname').value == "";

	}

}



function myCheck() {
	var x = document.getElementById("Permanent_address");
	var y = document.getElementById("current_address");
	y.value = x.value;

}

function IsEmptyPaddress() {
	if (document.getElementById('Permanent_address').value == "") {
		alert("empty")
		document.getElementById('Permanent_address').value == "";
	}
}

function IsEmptyCaddress() {
	if (document.getElementById('current_address').value == "") {
		alert("empty")
		document.getElementById('current_address').value == "";
	}
}

function myemail() {

	var email1 = document.getElementById('email').value;
	var reg = /^([A-Za-z0-9_.-])+\@([A-Za-z])+\.([A-Za-z]{2,3})/;

	if (reg.test(email1)) {
		return true;
	} else {
		alert("email invalid");
		return false;
	}
}

function phoneValidation() {

	var phone = document.getElementById("phone_no").value;

	if (phone.length > 10) {
		alert("only ten digits allowed");
		count = 1;
		return false;
	}
}

function intialpswrd() {

	var intialpassword = document.getElementById("intialpass").value;

	if (intialpassword.length < 5) {
		alert("Password too short");
	} else if (intialpassword.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/) == -1) {
		alert("1 upr case 1 lower case 1 number ");
	}
	intialpassword.preventDefault();
}

function pswrdmatch() {

	var intialpassword = document.getElementById("intialpass").value;
	var confirmpassword = document.getElementById("Confirmpass").value;

	if (intialpassword != confirmpassword) {
		alert("Passwords donot match");
		count = 1;
		return false;
	}
}

function register() {
	var fname = document.getElementById('fname').value;
	var paddr = document.getElementById("Permanent_address").value;
	var caddr = document.getElementById("current_address").value;
	var email1 = document.getElementById('email').value;
	var phone = document.getElementById("phone_no").value;
	var intialpassword = document.getElementById("intialpass").value;
	var confirmpassword = document.getElementById("Confirmpass").value;
	if (fname.length == 0) {
		alert("name cannot be blank");
		return false;
	}


	if (paddr.length == 0) {
		alert('permanent address can not be blank');
		return false;
	}


	if (caddr.length == 0) {
		alert('current address can not be left blank');
		return false;
	}


	if (email1.length == 0) {
		alert('email can not be left blank');
		return false;
	}


	if (phone.length == 0) {
		alert('phone number can not be left blank');
		return false;
	}

	if (intialpassword.length == 0) {
		alert('password can not be left blank');
		return false;
	}


	if (confirmpassword.length == 0) {
		alert('confirm your password');
		return false;
	}

	if (fname.length != 0 && paddr.length != 0 && caddr.length != 0 && email1.length != 0 && phone.length != 0 && intialpassword.length != 0 && confirmpassword.length != 0 && count == 0) {
		var firstname = document.getElementById('fname').value;
		var lastname = document.getElementById('lname').value;
		var email = document.getElementById('email').value;

		showDashboard(firstname, lastname, email);
	}

}

function showDashboard(firstname, lastname, email) {

	var parentElement = document.getElementById('parent-div');
	var inputElement = document.createElement("INPUT");
	inputElement.setAttribute("type", "textarea");
	inputElement.setAttribute("title", email);
	inputElement.setAttribute("class", "dashboard_design");
	inputElement.setAttribute("value", firstname + " " + lastname);
	parentElement.appendChild(inputElement);
}

window.onload = function() {
	document.getElementById('fname').onblur = function() {

		IsEmpty();
	}
	document.getElementById('Permanent_address').oninput = function() {
		IsEmptyPaddress();
	}
	document.getElementById('mycheck').onclick = function() {
		myCheck();
	}
	document.getElementById('current_address').oninput = function() {
		IsEmptyCaddress();
	}

	document.getElementById('email').onchange = function() {
		myemail();
	}
	document.getElementById('phone_no').oninput = function() {
		phoneValidation();
	}
	document.getElementById('intialpass').onchange = function() {
		intialpswrd();
	}
	document.getElementById('Confirmpass').onchange = function() {
		pswrdmatch();
	}
	document.getElementById('reset').onclick = function() {
		resetform(this.form);
	}
	document.getElementById('register').onclick = function() {
		register();
	}

}
