$(document).ready(function () {
    var bearertoken = JSON.parse(localStorage.getItem('lofatadminaccesstoken'));
    if (!bearertoken) {
        window.location.href = "./login.html"
    }
});