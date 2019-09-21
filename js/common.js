function sendRequest(endpoint, jsondata, succFunc, errorFunc, requestType) {
    var apiurl = "http://localhost:8080/api/"

    $.ajax({
        url: apiurl + endpoint,

        data: JSON.stringify(jsondata),

        contentType: "application/json; charset=utf-8",

        type: requestType,

        dataType: "json",

        success: function(result) {
            succFunc(result);
        },
        error: function(err) {
            errorFunc(err);
        }

    });
}