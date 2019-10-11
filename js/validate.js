

var stringPath = "";
var banImg = {
    "img": [{
        "sliderimg": "C:\Mypic\ab.jpg"
    },
    {
        "sliderimg": "C:\Mypic\ac.jpg"
    },
    {
        "sliderimg": "C:\Mypic\ad.jpg"
    },
    ]
};

var imgTemplate = {
    "sliderimg": ""
};

function banner() {
    imgTemplate.sliderimg = stringPath;
    banImg.img.push(imgTemplate);
}

var catData = [{
    "categories": "Breakfast"
},
{
    "categories": "Lunch"
},
{
    "categories": "Dinner"
}];

function populateSelectCat() {

    var ele = $('#ddSelectCat');
    for (var i = 0; i < catData.length; i++) {

        $(ele).html($(ele).html() + '<option value>' + catData[i]['categories'] + '</option>');

    }
}

function populateSelect() {
    debugger;
    sendRequest("/plans/GetPlans", {}, bindSelectPlanSuccess, bindSelectPlanErr, "GET");
}


function bindSelectPlanSuccess(result) {
    debugger;
    var ele = $('#ddSelectPlan');
    for (var i = 0; i < result.length; i++) {

        $(ele).html($(ele).html() + '<option value=' + result[i]['id'] + '>' + result[i]['name'] + '</option>');

    }
}
function bindSelectPlanErr(err) {
    debugger;
    if (err) {
        $("#planDataRes").removeClass().addClass("errorResp").html(err.statusText);
    }
}

$(document).ready(function () {
    populateSelect();
    populateSelectCat();

    $("#custTableLink").click(function (e) {
        debugger;
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({ scrollTop: $(aid).offset().top }, 'slow');
    });
    $('.toast').toast('show');
});



