
function sendRequest(endpoint, jsondata, succFunc, errorFunc, requestType) {
    debugger;
    var apiurl = "http://localhost:8045/api/";

    var bearertoken = JSON.parse(localStorage.getItem('lofatadminaccesstoken'));

    $.ajax({
        url: apiurl + endpoint,
        data: JSON.stringify(jsondata),
        type: requestType,
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + JSON.parse(bearertoken).access_token,
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
    var bearertoken = JSON.parse(localStorage.getItem('lofatadminaccesstoken'));
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
    xhr.setRequestHeader('Authorization', 'Bearer ' + JSON.parse(bearertoken).access_token);
    debugger;
    xhr.send(dataPayload);

}