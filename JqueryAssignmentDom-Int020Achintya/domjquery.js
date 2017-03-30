$(document).ready(function() {

	$(":checkbox").change(function() {
		var permanentaddress = $('#Permanent_address').val();
		$("#current_address").val(permanentaddress);

		$("#current_address").attr("disabled", true);;
	});

	$('#reset').click(function() {
		location.reload();
	});



	$("#fname").on('blur', function() {
		var fname = $("#fname").val();
		if (fname.search(/^[a-zA-Z]+$/) === -1) {
			alert("first name is empty");
		}

	});


	$("#email").on('blur', function() {

		var email = $("#email").val();
		var reg = /^([A-Za-z0-9_.-])+\@([A-Za-z])+\.([A-Za-z]{2,3})/;


		if (!reg.test(email)) {
			alert("email not vaild");
		}

	});

	$('#phone_no').on('blur', function() {
		var phone = $('#phone_no').val();
		var reg = /[0-9]{10}/;

		if (!reg.test(phone)) {
			alert("no spaces, special characters or alphabets are allowed ");
			return false;
		}
	});

	$('#intialpass').on('blur', function() {

		var password = $('#intialpass').val();

		if (password.length < 5) {
			alert("Password should be of five character long");
		} else if (password.search(/^\S*$/) == -1) {
			alert("No Spaces are allowed ");
		} else if (password.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/) == -1) {
			alert("1 uppper case character, 1 lower case character, 1 number and 1 special character is requireds ");
		} else {
			return true;
		}
	});

	$("#Confirmpass").on('blur', function() {
		var flag = 0;

		var password = $('#intialpass').val();

		var cpassword = $('#Confirmpass').val();


		if (password != cpassword) {
			alert("password donot match");

		}



	});

	$("#register").on('click', function() {

		var fname = $("#fname").val();
		var paddress = $("#Permanent_address").val();
		var caddress = $('#current_address').val();
		var email = $("#email").val();
		var phone = $("#phone_no").val();
		var password = $('#intialpass').val();
		var cpassword = $('#Confirmpass').val();

		if (fname === "") {
			alert("Please enter your first name");
			return false;
		} else if (paddress === "") {
			alert("Please enter your permanent address");
			return false;
		} else if (caddress === "") {
			alert("Please enter your current address");
			return false;
		} else if (email === "") {
			alert("please enter your email address");
			return false;
		} else if (phone === "") {
			alert("please give your phone number");
			return false;
		} else if (password === "") {
			alert("please set the password");
			return false;
		} else if (cpassword === "") {
			alert("please confirm your password ");
			return false;
		} else {
			var lname = $("#lname").val();
			var name = $("#fname").val();
			var email = $("#email").val();

			$("#parent-div").append(name + " " + lname + "<br>").attr('title', email).addClass("testclass");

		}



	});
	$(".header_dropbtn").on('click', function() {
		$('#myDropdown').toggleClass('show');
	});
});