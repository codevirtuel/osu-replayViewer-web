//----------------------------- variables ----------------------------------
var isIdOk = false;

//----------------------------- functions ----------------------------------
function showUsername(str) {
			if (str.length == 0) {
				document.getElementById("txtHint").innerHTML = "";
				isIdOk = false;
				update();
				return;
			} else {
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						document.getElementById("txtHint").innerHTML = this.responseText;
						if(this.responseText == "this user doesn't exists" || this.responseText == ''){
							isIdOk = false;
							update();
						}else{
							isIdOk = true;
							update();
						}
					}
				};
				xmlhttp.open("GET", "php/getUsername.php?q=" + str, true);
				xmlhttp.send();
			}
		}

function checkPassword() {
	var firstPass = document.getElementById("pass").value;
	var confirmPass = document.getElementById("confPass").value;
	if(firstPass == confirmPass && firstPass != '' && confirmPass != ''){
		return true;
	}else{
		return false;
	}
}

function showCheckPass(){
	var firstPass = document.getElementById("pass").value;
	var confirmPass = document.getElementById("confPass").value;
	if(firstPass == confirmPass && firstPass != '' && confirmPass != ''){
		document.getElementById("checkPass").innerHTML = "";
	}else{
		document.getElementById("checkPass").innerHTML = "The password doesn't match";
	}
}

function hide(id){
	node = document.getElementById(id);
	if(node){
		node.style.visibility = "hidden";
	}
}

function show(id){
	node = document.getElementById(id);
	if(node){
		node.style.visibility = "visible";
	}
}

function validateEmail() {
	var email = document.getElementById("email").value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showEmailValidity(){
	if(validateEmail()){
		document.getElementById("emailHint").innerHTML = "";
	}else{
		document.getElementById("emailHint").innerHTML = "This e-mail is not valid";
	}
}

//----------------------------- At start ----------------------------------
function start(){
	hide("submitButton");
	document.getElementById("email").value = '';
}

//----------------------------- At every update ---------------------------
function update(){
	//Check if the form is filled
	if(checkPassword() && validateEmail() && isIdOk){
		show("submitButton");
	} else { hide("submitButton"); }
}

//----------------------------- When the form is submitted ----------------
function submitted(){

}
