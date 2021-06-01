let btn1=document.getElementById("btn");
let i1=document.getElementById("i1");
let i2=document.getElementById("i2");
let i3=document.getElementById("i3");
let i4=document.getElementById("i4");
let i5=document.getElementById("i5");
let i6=document.getElementById("i6");
let i7=document.getElementById("i7");
let i8=document.getElementById("i8");
let i9=document.getElementById("i9");
let i10=document.getElementById("i10");
let name_id=document.getElementById("name");
let email_id=document.getElementById("email");
let cnfpass_id=document.getElementById("cnfpass");
let pass_id=document.getElementById("pass");
let phn_id=document.getElementById("phn");
// |||||||||| Add Event Listner |||||||||

function validation(){

    name_id.style.borderColor="white";
    email_id.style.borderColor="white";
    cnfpass_id.style.borderColor="white";
    pass_id.style.borderColor="white";
    phn_id.style.borderColor="white";

let name1=document.getElementById("name").value;
let email1=document.getElementById("email").value;
let phn1=document.getElementById("phn").value;
let pass1=document.getElementById("pass").value;
let cnfpass1=document.getElementById("cnfpass").value;
// console.log(email1);
// console.log(phn1);
// console.log(pass1);
// console.log(cnfpass1);


let span1=document.getElementById("spn1");

let span2=document.getElementById("spn2");

let span3=document.getElementById("spn3");

let span4=document.getElementById("spn4");

let span5=document.getElementById("spn5");

let hasNumber = /\d/;//if number are present in the string then it givees true value;
// let hasletters = /^[A-Za-z]+$/;(if only latters are present in the string then its gives true value);
//  let var1=varx.test(name1);
// console.log(var1);

i1.style.color="transparent";
i2.style.color="transparent";

i6.style.color="transparent";
i5.style.color="transparent";

i8.style.color="transparent";
i7.style.color="transparent";

i10.style.color="transparent";
i9.style.color="transparent";

i4.style.color="transparent";
i3.style.color="transparent";

//   |||||||  validating the username ||||||||
 if(name1==""){
span1.innerHTML="*Please write username*";
name_id.style.borderColor="red";
i1.style.color="red";
return false;
}

else if(!isNaN(name1)){
span1.innerHTML="*Numbers are not allowed in username*";
name_id.style.borderColor="red";
i1.style.color="red";
return false;
}

else if(name1.length<3){
    span1.innerHTML="*username must be more than 2 character*";
    name_id.style.borderColor="red";
    i1.style.color="red";
    return false;
}

else if(name1.search(/[0-9]/)!= -1) {

    span1.innerHTML="*Numbers are not allowed in username*";
   name_id.style.borderColor="red";
   i1.style.color="red";
   return false;
}
else if(name1.search(/[!\@\#\$\%\^\&\*\(\)\_\+\=\`\~\-]/) !=-1 ) {

    span1.innerHTML="*special character are not allowed in username*";
name_id.style.borderColor="red";
i1.style.color="red";
return false;
}
else{
    name_id.style.borderColor="green";

    i1.style.color="transparent";
    i2.style.color="green";
    span1.innerHTML="";
}
//   ||||||| validating the email ||||||||
 if( email1==""){
span2.innerHTML="*Please write email*";
email_id.style.borderColor="red";
i3.style.color="red";
return false;
}
else if( email1.indexOf('@')<=0){
span2.innerHTML="*position of @ is wrong*";
email_id.style.borderColor="red";
i3.style.color="red";
return false;
}
else if((email1.charAt(email1.length-4)!='.') && (email1.charAt(email1.length-3)!='.')){
span2.innerHTML="*position of . is wrong*";
email_id.style.borderColor="red";
i3.style.color="red";
return false;
}
else{
    email_id.style.borderColor="green";
    i3.style.color="transparent";
    i4.style.color="green";
    span2.innerHTML="";
}

//   ||||||| validating the phone ||||||||
 if(phn1==""){
span3.innerHTML="*Please write phone number*";
phn_id.style.borderColor="red";
i5.style.color="red";
return false;
}
else if(phn1.length!=10){
    span3.innerHTML="*Phone number must be 10 digit*";
    phn_id.style.borderColor="red";
    i5.style.color="red";
    return false;
}
else if(phn1.length==10){
    phn_id.style.borderColor="green";
    i5.style.color="transparent";
    i6.style.color="green";
    span3.innerHTML="";
}


//   ||||||| validating the pass ||||||||
 if(pass1==""){
span4.innerHTML="*Please write password*";
pass_id.style.borderColor="red";
i7.style.color="red";
return false;
}
 else if(pass1.length<8){
span4.innerHTML="*Password has at lest  8 character*";
pass_id.style.borderColor="red";
i7.style.color="red";
return false;
}
 else if(pass1.search(/[0-9]/) == -1){
span4.innerHTML="*Password has at lest 1 number*";
pass_id.style.borderColor="red";
i7.style.color="red";
return false;
}
else if(pass1.search(/[a-z]/) == -1){
span4.innerHTML="*Password has at lest 1 lowercase character*";
pass_id.style.borderColor="red";
i7.style.color="red";
return false;
}
else if(pass1.search(/[A-Z]/) == -1){
span4.innerHTML="*Password has at lest 1 uppercase character*";
pass_id.style.borderColor="red";
i7.style.color="red";
return false;
}
else if(pass1.search(/[!\@\#\$\%\^\&\*\(\)\_\+]/) == -1){
span4.innerHTML="*Password has at lest 1 special character*";
pass_id.style.borderColor="red";
i7.style.color="red";
return false;
}
else{
    pass_id.style.borderColor="green";
    i7.style.color="transparent";
    i8.style.color="green";
    span4.innerHTML="";
}


//   ||||||| validating the cnfpass ||||||||
 if(cnfpass1==""){
span5.innerHTML="*Please write pasword again*";
cnfpass_id.style.borderColor="red";
i9.style.color="red";
return false;
}
else if(cnfpass1!=pass1){
span5.innerHTML="*Password are note same*";
cnfpass_id.style.borderColor="red";
i9.style.color="red";
return false;
}
else if(cnfpass1==pass1){
    cnfpass_id.style.borderColor="green";
    i9.style.color="transparent";
i10.style.color="green";
span5.innerHTML="";
}

}