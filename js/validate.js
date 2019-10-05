function pass_val(pass) {
    var regPass = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,9}$/;
    if (regPass.test(pass) == false) {
        document.getElementById("passstatus").innerHTML = "<span class='warning'>Please enter you password between 7-9 character atleast one number, alphabet, special character</span>";

    } else {
        document.getElementById("passstatus").innerHTML = "<span class='valid'>Thanks for entering password</span>";
    }


}

function checkPass() {

    var pass = document.getElementById('pass');
    var confpass = document.getElementById('confpass');

    var message = document.getElementById('confirmMessage');

    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if (pass.value == confpass.value) {

        confpass.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"

    } else {

        passconf.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}




// function email_validate(email) {
//     var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

//     if (regMail.test(email) == false) {
//         document.getElementById("status").innerHTML = "<span class='warning'>Email address is not valid yet.</span>";
//     } else {
//         document.getElementById("status").innerHTML = "<span class='valid'>Thanks, you have entered a valid Email address!</span>";
//     }
// }

function username_validate(username) {
    var regMail = /^[a-zA-Z0-9+]{5,7}$/;
    if (regMail.test(username) == false) {
        document.getElementById("unamestatus").innerHTML = "<span class='warning'>Username Should contain 5 to 7 alphanumeric character</span>";
    } else {
        document.getElementById("unamestatus").innerHTML = "<span class='valid'>Thanks, you have entered a valid Username!</span>";
    }
}

function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}




(function () {
    'use strict';
    window.addEventListener('load', function () {

        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {

                    switch (form.id) {

                        case "addBanner":



                            banner();
                            break;

                        case "addNewPlan":

                            addPlan();
                            event.preventDefault();
                            event.stopPropagation();
                            break;

                        case "addPlanMeadDesc":

                            addMeal();
                            event.preventDefault();
                            event.stopPropagation();
                            break;

                        case "addCustdata":

                            addCustomerdata();
                            event.preventDefault();
                            event.stopPropagation();
                            break;

                    }
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();




$('#sliderinput').on('change', function () {



    var fileName = $(this).val();

    $(this).next('.custom-file-label').html(fileName);
})

$('#custprofileinput').on('change', function () {

    var fileName = $(this).val();

    $(this).next('.custom-file-label').html(fileName);
})

$('#addplaninput').on('change', function () {

    var fileName = $(this).val();

    $(this).next('.custom-file-label').html(fileName);
})

$('#mealdescinput').on('change', function () {

    var fileName = $(this).val();

    $(this).next('.custom-file-label').html(fileName);
})


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


var data = [{
    "plan": "Wholesome Membership",
    "plandesc": "",
    "planimg": [],
    "meals": [{
        "name": "Biryani",
        "description": "Royal Biryani",
        "image": "C:\Mypic\d.jpg"
    },
    {
        "name": "Pan Pizza",
        "description": "Pizza with beans",
        "image": "C:\Mypic\e.jpg"
    },
    {
        "name": "Mendu Vada",
        "description": "Mendu vada with sambahar",
        "image": "C:\Mypic\f.jpg"

    }


    ]
},
{
    "plan": "Essential Membership",
    "meals": [{
        "name": "Burger",
        "description": "sada burger",
        "image": "C:\Mypic\g.jpg"
    },
    {
        "name": "Chole Bhature",
        "description": "Bhature with onion",
        "image": "C:\Mypic\h.jpg"
    },
    {
        "name": "Samosa",
        "description": "Samosa with sweet chutney",
        "image": "C:\Mypic\i.jpg"
    }
    ]
},
{
    "plan": "Vegetarian Membership",
    "meals": [{
        "name": "green salad",
        "description": "Carrot, Radish",
        "image": "C:\Mypic\j.jpg"
    },
    {
        "name": "Idli",
        "description": "Chutney , Sambhar",
        "image": "C:\Mypic\k.jpg"
    },
    {
        "name": "Paneer",
        "description": "Palak, Paneer",
        "image": "C:\Mypic\l.jpg"
    }
    ]
}

];
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
});

var plantemplate = {
    "Id": 0,
    "Name": "",
    "Description": "",
    "BannerPic": ""
};

var mealtemplate = {
    "Id": 0,
    "PlanId": 0,
    "Name": "string",
    "Description": "string",
    "MealPic": "string",
    "Category": "string"
};

function addPlan() {
    var plan = $("#plan").val();
    var ckplandesc = CKEDITOR.instances.planDesc.getData();
    if (plan !== "") {
        plantemplate.Name = plan;
        plantemplate.Description = ckplandesc;
        plantemplate.BannerPic = stringPath;
        data.push(plantemplate);

        console.log(data);
        debugger;
        //sendXhrHttpRequest("/api/plans/AddPlan", plantemplate, addPlanSuccess, addPlanErr, "POST");
        sendRequest("/plans/AddPlan", plantemplate, addPlanSuccess, addPlanErr, "POST");

    }
}

function addPlanSuccess(result) {
    debugger;
    if (result) {
        $("#planDataRes").removeClass().addClass("successResp").html(result);
    }
    //resetform("addNewPlan");
}

function addPlanErr(err) {
    debugger;
    if (err) {
        $("#planDataRes").removeClass().addClass("errorResp").html(err.statusText);
    }
}




function addMeal() {
    var meal = $("#meal").val();
    var mealdesc = CKEDITOR.instances.mealdesc.getData();
    var addSelectPlan = $("#ddSelectPlan option:selected").text();
    var addSelectPlanValue = $("#ddSelectPlan option:selected").val();

    if (meal !== "") {
        mealtemplate.Name = meal;
        mealtemplate.Description = mealdesc;
        mealtemplate.MealPic = stringPath;
        mealtemplate.PlanId = addSelectPlanValue;
        mealtemplate.Category = "Lunch";
        debugger;
        //sendXhrHttpRequest("/api/meals/AddMeal", plantemplate, addMealSuccess, addMealErr, "POST");
        sendRequest("/meals/AddMeal", mealtemplate, addMealSuccess, addMealErr, "POST");

    }

}

function addMealSuccess(result) {
    debugger;
    if (result) {
        $("#mealDataResp").removeClass().addClass("successResp").html(result);
    }
}

function addMealErr(err) {
    if (err) {
        $("#mealDataResp").removeClass().addClass("errorResp").html(err.statusText);
    }
}

var custData = {
    "customer": [{
        "customername": "Ashok",
        "custDesc": "Good Person",
        "custprofileinput": "C:\Mypic\a.jpg"

    },

    {
        "customername": "Ramesh",
        "custDesc": "Kind Person",
        "custprofileinput": "C:\Mypic\b.jpg"

    },

    {
        "customername": "Mahendra",
        "custDesc": "Smart ",
        "custprofileinput": "C:\Mypic\c.jpg"

    }
    ]

};

var custtemplate = {
    "customername": "",
    "custDesc": "",
    "custprofileinput": ""

};




function addCustomerdata() {
    debugger;
    var customername = $("#customername").val();
    var custDesc = $("#custDesc").val();
    var customerStoryData = {
        "key": "CustomerStory",
        "value": ""
    }
    if (customername !== "") {
        custtemplate.customername = customername;
        custtemplate.custDesc = custDesc;
        custtemplate.custprofileinput = stringPath;
        var arrCustomerStory = [];
        sendRequest("/configitems/GetConfigItems/CustomerStory", {}, function (result) {
            debugger;
            if (result && result.length && result[result["length"] - 1]['value'] !== "") {
                arrCustomerStory = JSON.parse(result[result["length"] - 1]['value']);
            }
            arrCustomerStory.push(custtemplate);
            customerStoryData.value = JSON.stringify(arrCustomerStory);
            sendRequest("/configitems/UpdateConfigItems", customerStoryData, addCustStorySuccess, addCustStoryError, "POST");

        }, addCustStoryError, "GET");
    }

}

function addCustStorySuccess(result) {
    debugger;
    if (result) {
        $("#custStoryDataResp").removeClass().addClass("successResp").html(result);
    }
}

function addCustStoryError(err) {
    debugger;
    if (err) {
        $("#custStoryDataResp").removeClass().addClass("errorResp").html(err.statusText);
    }
}

$("#custprofileinput", "#sliderinput", "#mealdescinput", "#addplaninput", "#introinput").on("change", convertImgToBase64);

function convertImgToBase64(inputFile, imageid) {

    if (inputFile.files && inputFile.files[0]) {

        var FR = new FileReader();

        FR.addEventListener("load", function (e) {
            document.getElementById(imageid).src = e.target.result;


            if (stringPath !== "") {
                stringPath = "";


            }
            stringPath = e.target.result;

        });

        FR.readAsDataURL(inputFile.files[0]);
    }

}