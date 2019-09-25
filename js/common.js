function sendRequest(endpoint, jsondata, succFunc, errorFunc, requestType) {
	var apiurl = "http://localhost:8080/api/";


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

function sendXhrHttpRequest(endpoint, data, succFunct, errorFunct) {
	var apiurl = "http://localhost:8045/";


	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	var url = apiurl + endpoint;

	xhr.addEventListener("readystatechange", function() {
		if (this.readyState === 4) {			
			succFunct(this.responseText);			
			console.log(this.responseText);
		}
		if (this.readyState === 0) {		
			errorFunct(this.responseText);			
			console.log(this.responseText);
		}

	});

	xhr.open("POST", url);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader("Accept", "application/json");

	xhr.send(data);
}