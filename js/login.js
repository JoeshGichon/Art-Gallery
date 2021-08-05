$(document).ready(function(){
	$("#icon").click(function(){
		$("#information").show();
		$("#icon").hide();
	});
	$("#information").click(function(){
		$("#icon").show();
		$("#information").hide();
	});
})

$(function(){
	$("#firstNameError").show();
  $("#secondNameError").show();
  $("#email_error").show();
  $("#password_error").show();
  $("#retype_password_error_message").hide();

	var error_fname = false;
  var error_sname = false;
  var error_email = false;
  var error_password = false;
  var error_retype_password = false;

	$(".error-form").focusout(function(){
    check_fname();
  });
  $(".error-form").focusout(function(){
    check_sname();
  });
  $("#inputEmail4").focusout(function(){
    check_email();
  });
  $("#inputPassword4").focusout(function(){
    check_password();
  });
  $("#form_retype_password").focusout(function(){
    check_retype_password();
  });

  function check_fname(){
    var pattern = /^[a-zA-Z]*$/;
    var fname = $("#error-form").val();
    if (pattern.test(fname) && fname !== ''){
      $("#firstNameError").hide();
      $("#error-form").css("border-bottom","2px solid  #34F458");
    }
		else{
      $("#firstNameError").html("Should contain Characters");
      $("#firstNameError").show();
      $("#error-form").css("border-bottom","2px solid  #F90A0A");
      error_fname = true;

    }
    
  }
  function check_sname(){
    var pattern = /^[a-zA-Z]*$/;
    var sname = $("#error-form").val();
    if (pattern.test(sname) && sname !== ''){
      $("#secondNameError").hide();
      $("#error-form").css("border-bottom","2px solid  #34F458");
    }
	  else{
      $("#secondNameError").html("Should contain Characters");
      $("#secondNameError").show();
      $("#error-form").css("border-bottom","2px solid  #F90A0A");
      error_sname = true;

    }
    
  }

  function check_password() {
    var password_length = $("#inputPassword4").val().length;
    if (password_length < 8) {
      $("#password_error").html("Atleast 8 Characters");
      $("#password_error").show();
      $("#inputPassword4").css("border-bottom","2px solid #F90A0A");
      error_password = true;
    }
		else {
      $("#password_error").hide();
      $("#inputPassword4").css("border-bottom","2px solid #34F458");
		}
  }

  function check_retype_password() {
    var password = $("#inputPassword4").val();
    var retype_password = $("#form_retype_password").val();
    if (password !== retype_password) {
      $("#retype_password_error_message").html("Passwords Do Not Match");
      $("#retype_password_error_message").show();
      $("#form_retype_password").css("border-bottom","2px solid #F90A0A");
      error_retype_password = true;
    }
		else {
      $("#retype_password_error_message").hide();
      $("#form_retype_password").css("border-bottom","2px solid #34F458");
    }
  }

  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#inputEmail4").val();
    if (pattern.test(email) && email !== '') {
      $("#email_error").hide();
      $("#form_email").css("border-bottom","2px solid #34F458");
    } else {
      $("#email_error").html("Invalid Email");
      $("#email_error").show();
      $("#inputEmail4").css("border-bottom","2px solid #F90A0A");
      error_email = true;
    }
  }
  $("#registration_form").submit(function() {
    error_fname = false;
    error_sname = false;
    error_email = false;
    error_password = false;
    error_retype_password = false;

    check_fname();
    check_sname();
    check_email();
    check_password();
    check_retype_password();

    if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_retype_password === false) {
      alert("Registration Successful.Click To Login Please!");
      window.open('login.html');
    }
		else {
      alert("Please Fill the form Correctly");
      return false;
    }
  });
  $("#login_form").submit(function() {
		error_fname = false;
    error_sname = false;
    error_email = false;
    error_password = false;

		check_fname();
    check_sname();
    check_email();
    check_password();

		if (error_fname === false && error_sname === false && error_email === false && error_password === false) {
			alert("Welcome to Maljonha Galleria!");
      window.open('gallery.html');
		}
		else {
      alert("Please Fill the form Correctly");
      return false;
    }
	})
});