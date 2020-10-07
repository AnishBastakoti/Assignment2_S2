var modal = document.getElementById("Modal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

function validateForm() {
  var x = document.forms["form"]["fname"].value;
  if (x == "" || x == null) {
    alert("Please write your name in the name box");
    return false;
  }
  var x = document.forms["form"]["message"].value;
  if (x == "" || x == null) {
    alert("Message box must be filled");
    return false;
  }
  var x = document.forms["form"]["email"].value;
  if (x == "" || x == null) {
    alert("Valid email must be filled");
    return false;
  }
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

$(document).ready(function(){
$('form > input').keyup(function() {

var empty1 = false;
$('form > input').each(function() {
if ($(this).val() === '') {
 empty1 = true;
}
});

if (empty1) {
$('#register').attr('disabled', 'disabled');
} else {
     $('#register').prop("disabled", false);
}
});
});
