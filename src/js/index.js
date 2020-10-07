function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 4 || pwd.length > 8)
		{
			alert("Password min length is 6 and max length is 8.");
		}
		else
		{
       window.location = "mainpage.html";
			}
	}
function signup(){
	/*	const email = document.getElementById("email").value;
		const pwd1 = document.getElementById("pwd1").value;
    const pwd2 = document.getElementById("pwd2").value;
    const username = document.getElementById("user").value;
		const num = document.getElementById("num").value;
    const dob = document.getElementById("dob").value;*/
		if(email =='')
		{
			alert("please enter user name.");
		}
		else if(pwd1=='')
		{
        	alert("enter the password");
		}
    else if(pwd2=='')
		{
        	alert("enter the password");
		}
    else if(username=='')
		{
        	alert("enter the UserName");
		}
    else{
      window.location ="mainpage.html";
    }
}
/*$(document).ready(function(){
  $('#dob').mask('00/00/0000');
  $('#num').mask('0000-0000-000');
});*/
