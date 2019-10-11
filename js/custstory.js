$('#custprofileinput').on('change', function () {

    var fileName = $(this).val();

    $(this).next('.custom-file-label').html(fileName);
})



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

var stringPath = "";

function addCustomerdata() {
    debugger;
    var customername = $("#customername").val();
    
    var custDesc = CKEDITOR.instances.custeditor.getData();
    
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