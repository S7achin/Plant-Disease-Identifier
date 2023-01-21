// Show password
function myRegFunction(){
    var x = document.getElementById("pswd1");
    if(x.type === "password"){
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function myLogFunction(){
    let y = document.getElementById("pswd3");
    if(y.type === "password"){
        y.type = "text";
    } else {
        y.type = "password";
    }
}


// Password matching
// function matchPassword() {  
//     var pw1 = document.getElementById("pswd1");  
//     var pw2 = document.getElementById("pswd2");  
//     if(pw1.value === pw2.value)  
//     {   
//       alert("Registration Successfully Completed");  
//     } else {  
//       alert("Passwords did not match");  
//     }  
//   }  