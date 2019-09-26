function loginForm(){

   
    var email= $("#email").val();
    var pass1=$("#pass1").val();
    var accountdata="username=" + email +  "&password=" + pass1 + "&grant_type=password";
    sendXhrHttpRequest("/oauth/token", accountdata, loginSuccess, loginError);
    

}

function loginSuccess(result){

    debugger;
}

function loginError(err){
    
    debugger;

}