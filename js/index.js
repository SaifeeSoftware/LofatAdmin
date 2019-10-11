$(document).ready(function () {
    var bearertoken = JSON.parse(localStorage.getItem('lofatadminaccesstoken'));
    if (!bearertoken) {
        window.location.href = "./login.html"
    }
});


$(document).ready(function() {
        var logoutbearertoken = localStorage.getItem('lofatadminaccesstoken','');
        if (!logoutbearertoken) {
            window.location.href = "./login.html"
        }
});



