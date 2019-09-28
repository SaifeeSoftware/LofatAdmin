
function loginForm(){

   
    var username= $("#username").val();
    var pass=$("#pass").val();
    var accountdata="username=" + username +  "&password=" + pass + "&grant_type=password";
    sendXhrHttpRequest("/oauth/token", accountdata, loginSuccess, loginError);
    

}

function loginSuccess(result){

    debugger;
   
    localStorage.setItem('lofatadminaccesstoken',JSON.stringify(result));


  

}

function loginError(err){
    
    debugger;

}