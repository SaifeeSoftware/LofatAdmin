$(document).ready(function () {
    var bearertoken = JSON.parse(localStorage.getItem('lofatadminaccesstoken'));
    if (!bearertoken) {
        window.location.href = "./login.html"
    }

    $("#custTableLink").click(function (e) {
        debugger;
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({ scrollTop: $(aid).offset().top }, 'slow');
    });
    $('.toast').toast('show');

});

