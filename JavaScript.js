function Validate(){
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var dob=document.getElementById("dob").value;
var selectInterest=document.getElementById("selectInterest").value;
var individual=document.getElementById("individual").checked;
var organization=document.getElementById("organization").checked;
var aboutYou=document.getElementById("aboutYou").value;


try { 
    if(name == "")  throw "Name field can not be empty.";
    if(email == "")  throw "email field can not be empty";
    if(dob == "")  throw "Date of birth field can not be empty";
    if(selectInterest == "")  throw "Select your interest field can not be empty";
    if(individual == "")  throw "must select individual";
    if(aboutYou == "")  throw "About you field can not be empty";
    
    window.open('summary.html?name='+name+ "&email="+email+ "&dob="+dob+ "&selectInterest="+selectInterest+ "&individual="+individual+ "&aboutYou="+aboutYou);
    document.write()
}
  catch(err) {
   alert( err);
  }
  
}

