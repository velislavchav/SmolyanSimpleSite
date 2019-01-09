var form = document.getElementById('mainForm');
var firstNameInput = document.getElementById('firstName');
var secondNameInput = document.getElementById('secondName');
var passwordInput = document.getElementById('password');
var passwordRepeatInput = document.getElementById('repassword');
var emailInput = document.getElementById('email');
var dateInput = document.getElementById('date');
var numberInput = document.getElementById('number');

form.addEventListener('submit',validate); //чака дадено събитие да настъпи
emailInput.addEventListener('input', validateEmail);
firstNameInput.addEventListener('input', validateFirstName);
secondNameInput.addEventListener('input', validateSecondName);
numberInput.addEventListener('input', validateNumber);
passwordRepeatInput.addEventListener('input', checkSamePassword);


function validate(event){
	event.preventDefault(); 

	if (!validateFirstName()) {
		alert('First name is wrong!');
	} 
	else if (!validateSecondName()) {
		alert('Passwords are not the same!');
	} 
	else if (!checkSamePassword()) {
		alert('Passwords are not the same!');
	} 
	else if (!validateEmail()) {
		alert('Email is wrong!');
	} 
	else if (!validateDate()) {
		alert('Date is wrong!');
	} 
	else if (!validateNumber()) {
		alert('Telephone number is wrong!');
	} 
	else {
		alert('Successfully registered');
	}
}

//validating names
function validateFirstName(){
	var inputText = firstNameInput.value;
	var reg = /^[a-zA-Z ]+$/; //проверява дали има числа

	if(inputText === ""){
		firstNameInput.style.backgroundColor = 'red';
		return false;
	} else if (!reg.test(inputText)){
		firstNameInput.style.backgroundColor = 'red';	 
		return false;
	} else {
		firstNameInput.value = inputText.charAt(0).toUpperCase() + inputText.slice(1);
		firstNameInput.style.backgroundColor = '#49e56b';
		return true;
	}

	
}

function validateSecondName(){
	var inputText = secondNameInput.value;
	var reg = /^[a-zA-Z ]+$/;

	if(inputText === ""){
		secondNameInput.style.backgroundColor = 'red';
		return false;
	} else if (!reg.test(inputText)){
		secondNameInput.style.backgroundColor = 'red';	 
		return false;
	} else {
		secondNameInput.value = inputText.charAt(0).toUpperCase() + inputText.slice(1);
		secondNameInput.style.backgroundColor = '#49e56b';
		return true;
	}
}


//should contain at least one digit, (цифра)
//at least one upper case, (главна буква)
//at least one lower case (малка буква)
//at least 8 from the mentioned characters, (поне 8 букви)

//validating password 
function checkSamePassword(){
	var passwordInputText = passwordInput.value;
	var passwordRepeatInputText = passwordRepeatInput.value;
	//var regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

	if(passwordInputText === passwordRepeatInputText){ //&& reg.test(passwordInputText)
		passwordInput.style.backgroundColor = '#49e56b';
		passwordRepeatInput.style.backgroundColor = '#49e56b';
		return true;
	} else if (passwordInputText==="" || passwordRepeatInputText==="") {
		passwordInput.style.backgroundColor = 'red';
		passwordRepeatInput.style.backgroundColor = 'red';
		return false;
	} else {
		passwordInput.style.backgroundColor = 'red';
		passwordRepeatInput.style.backgroundColor = 'red';
		return false;
	}
}


//validating email
function validateEmail(){
	var emailText = emailInput.value;
	var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(regEx.test(emailText)){
		emailInput.style.backgroundColor = '#49e56b';
		return true;
	} else if (emailText === "") {
		emailInput.style.backgroundColor = 'red';	
		return false;
	} else {
		emailInput.style.backgroundColor = 'red';	
		return false;
	}
}



//validating telephone number
function validateNumber(){
	var numberText = numberInput.value;
	var regExNumber =  /08[789]\d{7}$/;    //  /^\d+$/;   

	if (!regExNumber.test(numberText)){
		numberInput.style.backgroundColor = 'red';	
		return false;
	} else if(numberText === ""){
		numberInput.style.backgroundColor = 'red';	
		return false;
	} else {
		numberInput.style.backgroundColor = '#49e56b';
		return true;
	}
}


//validating date
function validateDate(){
	var dateText = dateInput.value;
	var regEx = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;

	if (dateText === "") {
		return false;
	} else if(!regEx.test(dateText)){
		return false;
	} else {
		return true;
	}
}

function resetAllInputes(){
	numberInput.style.backgroundColor = 'white';
	firstNameInput.style.backgroundColor = 'white';
	secondNameInput.style.backgroundColor = 'white';
	passwordInput.style.backgroundColor = 'white';
	passwordRepeatInput.style.backgroundColor = 'white';
	emailInput.style.backgroundColor = 'white';
	numberInput.style.backgroundColor = 'white';
}