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




(function() {
    'use strict';
    window.addEventListener('load', function() {

        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
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
                            break;

                        case "addCustdata":


                            addCustomerdata();
                            break;

                    }
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();




$('#sliderinput').on('change', function() {



    var fileName = $(this).val();

    $(this).next('.custom-file-label').html(fileName);
})

$('#custprofileinput').on('change', function() {

    var fileName = $(this).val();

    $(this).next('.custom-file-label').html(fileName);
})

$('#addplaninput').on('change', function() {

    var fileName = $(this).val();

    $(this).next('.custom-file-label').html(fileName);
})

$('#mealdescinput').on('change', function() {

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

function populateSelect() {

    var ele = $('#ddSelectPlan');
    for (var i = 0; i < data.length; i++) {

        $(ele).html($(ele).html() + '<option value>' + data[i]['plan'] + '</option>');

    }
}



$(document).ready(function() {
    populateSelect();
});

var plantemplate = {
    "Id": 0,
    "Name": "",
    "Description": "",
    "BannerPic": ""
};

var mealtemplate = {
    "name": "",
    "description": "",
    "image": "",
}

function addPlan() {
    var plan = $("#plan").val();
    var plandesc = $("#planDesc").val();
    if (plan !== "") {
        plantemplate.Name = plan;
        plantemplate.Description = plandesc;
        plantemplate.BannerPic = stringPath;
        data.push(plantemplate);

        console.log(data);
        debugger;
        //sendXhrHttpRequest("/api/plans/AddPlan", plantemplate, addPlanSuccess, addPlanErr, "POST");
        sendRequest("plans/AddPlan", plantemplate, addPlanSuccess, addPlanErr, "POST");

    }
}

function addPlanSuccess(result) {

}

function addPlanErr(err) {

}



function addMeal() {
    var meal = $("#meal").val();
    var mealdesc = $("#mealdesc").val();
    var addSelectPlan = $("#ddSelectPlan option:selected").text();

    if (meal !== "") {
        mealtemplate.mealdesc = mealdesc;
        mealtemplate.meal = meal;
        mealtemplate.image = stringPath;


        $.each(data, function(i, v) {
            if (v.plan === addSelectPlan) {

                v.meals.push(mealtemplate)
                return;
            }
        });
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
    var customername = $("#customername").val();
    var custDesc = $("#custDesc").val();

    if (customername !== "") {

        custtemplate.customername = customername;
        custtemplate.custDesc = custDesc;

        custtemplate.custprofileinput = stringPath;


        custData.customer.push(custtemplate);

        console.log(custData);
    }

}



$("#custprofileinput", "#sliderinput", "#mealdescinput", "#addplaninput").on("change", convertImgToBase64);


function convertImgToBase64(inputFile, imageid) {

    if (inputFile.files && inputFile.files[0]) {

        var FR = new FileReader();

        FR.addEventListener("load", function(e) {
            document.getElementById(imageid).src = e.target.result;


            if (stringPath !== "") {
                stringPath = "";


            }
            stringPath = e.target.result;

        });

        FR.readAsDataURL(inputFile.files[0]);
    }

}