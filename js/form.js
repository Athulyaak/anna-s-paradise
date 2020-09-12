function check()
{
      var email1 = document.getElementById('email_addr');
      var email2 = document.getElementById('email_repeat');
 	 	if ( email1.value != email2.value) 
		{
 	 		alert("The two emails must match!!");
			return false;
  		}
}
function billingFunction()
{
	if (document.getElementById("same").checked)	/*Checks if nickname is checked*/
	{
		document.getElementById("billingName").value= document.getElementById("shippingName").value;
		document.getElementById("billingZip").value= document.getElementById("shippingZip").value;
	}
	else{
		document.getElementById("billingName").value="";
		document.getElementById("billingZip").value="";
	}
}

