function loginForm(){

   
    var email= $("#email").val();
    var pass1=$("#pass1").val();
    var data="username=" + email +  "&password=" + pass1 + "&grant_type=password";
    sendXhrHttpRequest("/oauth/token", data, "loginSuccess", "loginError");
    

}
function loginSuccess(result){
    
}

function loginError(err){
    
}