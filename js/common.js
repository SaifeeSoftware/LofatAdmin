
function sendRequest(endpoint, jsondata, succFunc, errorFunc, requestType) {

	var apiurl = "http://localhost:8045/api/";

    var bearertoken = JSON.parse(localStorage.getItem('lofatadminaccesstoken'));

	$.ajax({
		

		url: apiurl + endpoint,

		data: JSON.stringify(jsondata),

		contentType: "application/json; charset=utf-8",

		type: requestType,

		dataType: "json",

		success: function(result) {
			debugger;
			succFunc(result);
		},
		error: function(err) {
			debugger;
			errorFunc(err);
		},

		
		headers: {"Authorization": "Bearer " + bearertoken.access_token}


	});
}

function sendXhrHttpRequest(endpoint, accountdata, succFunct, errorFunct) {
	
	
	var apiurl = "http://localhost:8045";


	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;
	var url = apiurl + endpoint;

	xhr.addEventListener("readystatechange", function() {
		
		if (this.readyState === 4) {
			debugger;	
			if(this.status == 200) { 
				debugger;
				result = this.responseText;
				//alert(result);
			//	alert("we made it");
			} else {
				alert( " An error has occurred: " + this.statusText);
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

	xhr.open("POST", url);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader("Accept", "application/json");

	debugger;
	xhr.send(accountdata);

}