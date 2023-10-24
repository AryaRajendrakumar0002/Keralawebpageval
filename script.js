let email=document.getElementById("email");
let password=document.getElementById("password");
let error=document.getElementById("error");



function validate(){
    let status=false;
    // if(email.value==""||password.value==""){
    //     alert("Fields can't be empty");
    //     return false;
    // }
    // else{
    //     return true;
    // }
    let regexp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if(email.value==""){
    //     alert("Email can't be empty");
    //     return false;
    
    
    if(!regexp.test(email.value)){
        document.getElementById("error").style.display= "inline";
        error.innerHTML = "invalid";
        error.style.color = "red";
       
        return false;
    }else{
        document.getElementById("error").style.display = "none";
        status=true;
       
       
    }

    if (password.value==""){
        document.getElementById("pwderror").style.display = "inline";
         // password.style.border="2px solid red";
         pwderror.innerHTML = "password is mandatory";
         pwderror.style.color = "red";
        
         return false;

        
     }else{
         document.getElementById("pwderror").style.display = "none";
         status=true;
         
     }


     let smallRegexp =/[a-z]/ ;
     let upperRegexp =/[A-Z]/ ;
     let numberRegexp =/[0-9]/ ;
     let speciaRegexp =/[!@#$%^&*]/;
     document.getElementById("pwderror").style.display = "none";
     if (!smallRegexp.test(password.value)){
         document.getElementById("pwderror").style.display = "inline";
         pwderror.innerHTML = "password must have atleast a lowercase characters";
         pwderror.style.color = "red";
         return false;
     }
     if (!upperRegexp.test(password.value)){
         document.getElementById("pwderror").style.display = "inline";
         pwderror.innerHTML = "password must have atleast a Uppercase characters";
         pwderror.style.color = "red";
         return false;
     }
     if (!numberRegexp.test(password.value)){
         document.getElementById("pwderror").style.display = "inline";
         pwderror.innerHTML = "password must have atleast a  Number";
         pwderror.style.color = "red";
         return false;
     }
     if (!speciaRegexp.test(password.value)){
         document.getElementById("pwderror").style.display = "inline";
         pwderror.innerHTML = "password must have atleast a  Special charactor";
         pwderror.style.color = "red";
         return false;
     }
    let pwdRegexp =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!pwdRegexp.test(password.value)){
         document.getElementById("pwderror").style.display = "inline";
          // password.style.border="2px solid red";
          pwderror.innerHTML = "password field must have atleast 8 characters";
          pwderror.style.color = "red";
         
          return false;

         
      }else{
          document.getElementById("pwderror").style.display = "none";
          status=true;
          
      }
      return status;


}

function pwdValidation(){
    let smallRegexp =/[a-z]/ ;
    let upperRegexp =/[A-Z]/ ;
    let numberRegexp =/[0-9]/ ;
    let speciaRegexp =/[!@#$%^&*]/;
    document.getElementById("pwderror").style.display = "none";
    if (!smallRegexp.test(password.value)){
        document.getElementById("pwderror").style.display = "inline";
        pwderror.innerHTML = "password must have atleast a lowercase characters";
        pwderror.style.color = "red";
        return false;
    }
    if (!upperRegexp.test(password.value)){
        document.getElementById("pwderror").style.display = "inline";
        pwderror.innerHTML = "password must have atleast a Uppercase characters";
        pwderror.style.color = "red";
        return false;
    }
    if (!numberRegexp.test(password.value)){
        document.getElementById("pwderror").style.display = "inline";
        pwderror.innerHTML = "password must have atleast a  Number";
        pwderror.style.color = "red";
        return false;
    }
    if (!speciaRegexp.test(password.value)){
        document.getElementById("pwderror").style.display = "inline";
        pwderror.innerHTML = "password must have atleast a  Special charactor";
        pwderror.style.color = "red";
        return false;
    }
    return true;
}

