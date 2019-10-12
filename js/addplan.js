$('#addplaninput').on('change', function () {

    var fileName = $(this).val();

    $(this).next('.custom-file-label').html(fileName);
})


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


var plantemplate = {
    "Id": 0,
    "Name": "",
    "Description": "",
    "plandays": "",
    "planamount": "",
    "BannerPic": ""
};
var stringPath = "";

function addPlan() {
    debugger;    
     var plan = $("#plan").val();
     var plandays =$("#plandays").val();
     var planamount=$("#planamount").val();
     var ckplandesc = CKEDITOR.instances.planeditor.getData();
 
     
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

        //  $("#planDataRes").removeClass().addClass("successResp").html(result);

        $(".toast-body").html(result);
        $(".toast").toast('show');

        // $("#planDataRes").toast(result);
     }
     //resetform("addNewPlan");
 }
 
 function addPlanErr(err) {
     debugger;
     if (err) {
        $("#planDataRes").toast(result);

        //  $("#planDataRes").removeClass().addClass("errorResp").html(err.statusText);
     }
 }
 

$(document).ready(function () {
    populateSelect();
    

    
});
