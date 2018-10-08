 function  myFun() {
	var a = document.myForm.Email.value;     
	if(a.indexOf('@')<=0) {  
		document.getElementById("Message").innerHTML ="Invalid @ position ";
		return false;
	}
	
	if(a.charAt(a.length-4)!='.') {
		document.getElementById("Message").innerHTML ="Invalid . position ";
		return false;
	}
	
	if(a.charAt(a.length-3)!='.') {
		document.getElementById("Message").innerHTML ="Invalid . position ";
		return false;
	}
	

}

            var b = document.getElementById("mobilenumber").value;   
	if(b == "") {  
		document.getElementById("mobile number").innerHTML ="Please Enter Mobile Number";
		return false;
	}

	if(isNaN(b)) {  
		document.getElementById("mobile number").innerHTML ="Please Enter Numeric values";
		return false;
	}


	
	if(b.length<10) {
		document.getElementById("mobile number").innerHTML ="Mobile Number must be 10 digits";
		return false;
	}
	
	if(b.length>10) {
		document.getElementById("mobile number").innerHTML ="Mobile Number must be 10 digits ";
		return false;
	}
	

