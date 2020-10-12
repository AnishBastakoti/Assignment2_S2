var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
myBtn1.onclick = function() {
  modal.style.display = "block";
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function openCredit() {
  document.getElementById("credit").style.display = "block";
}

function closeCredit() {
  document.getElementById("credit").style.display = "none";
}
function button(){
  swal({
    icon:'success',
    title:'Payment Received!',
    text: "Your order will arrive in 4,5 business days",
    buttons:true,
    dangerMode:true
  })
  .then((willDelete) => {
    if (willDelete) {
      window.location ="mainpage.html"
    }
    else {
      window.location ="cancel.html"
    }
  })
}
