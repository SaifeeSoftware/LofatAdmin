
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
                            event.preventDefault();
                            event.stopPropagation();
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

function sendRequest(endpoint, jsondata, succFunc, errorFunc, requestType) {
    debugger;
    var apiurl = "http://localhost:8045/api";

    var bearertoken = JSON.parse(localStorage.getItem('lofatadminaccesstoken'));
    if (!bearertoken.hasOwnProperty("access_token") && bearertoken["access_token"] == "") {
        window.location.href = "./login.html";
    }
    $.ajax({
        url: apiurl + endpoint,
        data: JSON.stringify(jsondata),
        type: requestType,
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + bearertoken.access_token,
            "Content-Type": "application/json"
        },
        success: function(result) {
            debugger;
            if (succFunc) {
                succFunc(result);
            }
        },
        error: function(err) {
            debugger;
            if (errorFunc) {
                errorFunc(err);
            }
        }
    });
}

function sendXhrHttpRequest(endpoint, dataPayload, succFunct, errorFunct, requestType) {

    debugger;
    var apiurl = "http://localhost:8045";
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    var url = apiurl + endpoint;

    xhr.addEventListener("readystatechange", function() {

        if (this.readyState === 4) {
            debugger;
            if (this.status == 200) {
                debugger;
                result = this.responseText;
                //alert(result);
                //	alert("we made it");
            } else {
                alert(" An error has occurred: " + this.statusText);
            }


            succFunct(this.responseText);
            console.log(this.responseText);
        }

        if (this.readyState === 0) {
            debugger;
            errorFunct(this.responseText);
            console.log(this.responseText);
        }

    });

    xhr.open(requestType, url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
    debugger;
    xhr.send(dataPayload);

}

function resetform(formName) {
    $("#" + formName).trigger("reset");
}