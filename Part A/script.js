console.log("JS file!!");

var emailRegex = "^[A-Za-z0-9+_.-]+@northeastern.edu$";

var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var specialCharCheck = function (string) {
  for (i = 0; i < specialChars.length; i++) {
    if (string.indexOf(specialChars[i]) > -1) {
      return true;
    }
  }
  return false;
};

$(document).ready(function () {
  $("#usercheck").hide();
  $("#passcheck").hide();
  $("#emailcheck").hide();

  var user_err = true;
  var pass_err = true;
  var email_err = true;

  $("#usernames").keyup(function () {
    username_check();
  });

  function username_check() {
    var user_val = $("#usernames").val();

    // Null Check
    if (user_val.length == "") {
      $("#usercheck").show();
      $("#usercheck").html("Please enter a username");
      $("#usercheck").focus();
      $("#usercheck").css("color", "red");
      user_err = true;
      return false;
    } else {
      $("#usercheck").hide();
      user_err = false;
    }

    // Length Check
    if (user_val.length < 3 || user_val.length > 10) {
      $("#usercheck").show();
      $("#usercheck").html("Username length must be between 3 and 10");
      $("#usercheck").focus();
      $("#usercheck").css("color", "red");
      user_err = true;
      return false;
    } else {
      $("#usercheck").hide();
      user_err = false;
    }
  }

  $("#password").keyup(function () {
    password_check();
  });

  function password_check() {
    var passwrdstr = $("#password").val();

    // NULL CHECK
    if (passwrdstr.length == "") {
      $("#passcheck").show();
      $("#passcheck").html("Please enter a password");
      $("#passcheck").focus();
      $("#passcheck").css("color", "red");
      pass_err = true;
      return false;
    } else {
      $("#passcheck").hide();
      pass_err = false;
    }

    // LENGTH CHECK
    if (passwrdstr.length < 6 || passwrdstr.length > 15) {
      $("#passcheck").show();
      $("#passcheck").html("     Password length must be between 6 and 15");
      $("#passcheck").focus();
      $("#passcheck").css("color", "red");
      pass_err = true;
      return false;
    } else {
      $("#passcheck").hide();
      pass_err = false;
    }

    // SPECIAL CHARACTER CHECK
    if (!specialCharCheck(passwrdstr)) {
      $("#passcheck").show();
      $("#passcheck").html("  Password must have atleast 1 special character");
      $("#passcheck").focus();
      $("#passcheck").css("color", "red");
      pass_err = true;
      return false;
    } else {
      $("#passcheck").hide();
      pass_err = false;
    }
  }

  $("#email").keyup(function () {
    email_check();
  });

  function email_check() {
    var email = $("#email").val();

    console.log("checking email !!");

    if (!email.match(emailRegex)) {
      $("#emailcheck").show();
      $("#emailcheck").html("  Please enter a valid email !!");
      $("#emailcheck").focus();
      $("#emailcheck").css("color", "red");
      email_err = true;
      return false;
    } else {
      $("#emailcheck").hide();
      email_err = false;
    }
  }

  let submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", (e) => {
    console.log("user_err ", user_err);
    console.log("email_err ", email_err);

    console.log("pass_err ", pass_err);

    if (user_err || email_err || pass_err) {
      return;
    }

    localStorage.setItem("name", $("#usernames").val());

    window.location.href = "calculator.html";
  });
});
