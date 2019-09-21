function pass_val(pass1) {
    var regPass = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,9}$/;
    if (regPass.test(pass1) == false) {
        document.getElementById("status1").innerHTML = "<span class='warning'>Please enter you password between 7-9 character atleast one number, alphabet, special character</span>";

    } else {
        document.getElementById("status1").innerHTML = "<span class='valid'>Thanks for entering password</span>";
    }


}

function checkPass() {

    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');

    var message = document.getElementById('confirmMessage');

    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if (pass1.value == pass2.value) {

        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"

    } else {

        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}




function email_validate(email) {
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if (regMail.test(email) == false) {
        document.getElementById("status").innerHTML = "<span class='warning'>Email address is not valid yet.</span>";
    } else {
        document.getElementById("status").innerHTML = "<span class='valid'>Thanks, you have entered a valid Email address!</span>";
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

function readBannerImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#imageBanner')
                .attr('src', e.target.result)
                .width(140)
                .height(140);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function readAddPlan(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#imagePlan')
                .attr('src', e.target.result)
                .width(140)
                .height(140);
        };

        reader.readAsDataURL(input.files[0]);
    }
}



var data = [{
        "plan": "Wholesome Membership",
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
    var ele = document.getElementById('ddSelectPlan');
    for (var i = 0; i < data.length; i++) {

        ele.innerHTML = ele.innerHTML +
            '<option value>' + data[i]['plan'] + '</option>';

    }
}


$(document).ready(function() {
    populateSelect();
});

var plantemplate = {
    "plan": "",
    "meals": []
};
var mealtemplate = {
    "name": "",
    "description": "",
    "image": "",
}

function addPlan() {
    var plan = $("#plan").val();

    if (plan !== "") {
        plantemplate.plan = plan;
        data.push(plantemplate);

        console.log(data);
    }
}

var stringPath = "";

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

                debugger;

                v.meals.push(mealtemplate)
                return;
            }
        });
    }

}

function readFileMealDesc() {
    if (this.files && this.files[0]) {

        var FR = new FileReader();

        FR.addEventListener("load", function(e) {
            document.getElementById("imageMealDesc").src = e.target.result;


            if (stringPath !== "") {
                stringPath = "";


            }
            stringPath = e.target.result;

        });

        FR.readAsDataURL(this.files[0]);
    }

}


document.getElementById("mealdescinput").addEventListener("change", readFileMealDesc);


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

        },

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

       debugger;
        custData.customer.push(custtemplate);

        console.log(custData);
    }

}

function readFileCust() {
    if (this.files && this.files[0]) {

        var FR = new FileReader();

        FR.addEventListener("load", function(e) {
            document.getElementById("imageCustStories").src = e.target.result;


            if (stringPath !== "") {
                stringPath = "";


            }
            stringPath = e.target.result;

        });

        FR.readAsDataURL(this.files[0]);
    }

}


document.getElementById("custprofileinput").addEventListener("change", readFileCust);