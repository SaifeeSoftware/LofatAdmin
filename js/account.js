function loginForm() {
    var username = $("#username").val();
    var pass = $("#pass").val();
    var accountdata = "username=" + username + "&password=" + pass + "&grant_type=password";
    sendXhrHttpRequest("/oauth/token", accountdata, loginSuccess, loginError, "POST");
}

function loginSuccess(result) {
    if (result) {
        try {
            var jsondata = JSON.parse(result);
            if (jsondata.hasOwnProperty("access_token") && jsondata["access_token"] !== "") {
                localStorage.setItem('lofatadminaccesstoken', JSON.stringify(jsondata));
                window.location.href = "./index.html";
            }
        } catch (err) {

        }

    }

}

function loginError(err) {

    debugger;

}