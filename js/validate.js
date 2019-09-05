
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validate() {
    
    var fchoose= document.adminForm.fchoose.value;
    var nameplan=document.adminForm.nameplan.value;
    var selectedplanname=document.adminForm.selectedplanname.value;

    var namemeal=document.adminForm.namemeal.value;
     var descmeal=document.adminForm.descmeal.value;


    var cust_name=document.adminForm.cust_name.value;
     var cust_desc=document.adminForm.cust_desc.value;
    var fchooseprofile=document.adminForm.fchooseprofile.value;

 var fileErr=addplanErr=selectErr=mealErr=mealdescErr=custnameErr=custdesc=ErrfilecErr=true;
 if(fchoose=="")
{
printError("fileErr","Please Select a file");
}
else
 {
printError("fileErr","");
fileErr=false;
}

if(nameplan=="")
{
printError("addplanErr","Please add plan");
}
else
 {
printError("addplanErr","");
addplanErr=false;
}

if(selectedplanname=="Please select")
{
printError("selectErr","Please select");
}
else
 {
printError("selectErr","");
selectErr=false;
}

if(namemeal=="")
{
printError("mealErr","Please fill");
}
else
 {
printError("mealErr","");
mealErr=false;
}

if(descmeal=="")
{
printError("mealdescErr","Please fill");
}
else
 {
printError("mealdescErr","");
mealdescErr=false;
}

if(cust_name=="")
{
printError("custnameErr","Please fill");
}
else
 {
printError("custnameErr","");
custnameErr=false;
}

if(cust_desc=="")
{
printError("custdesc","Please fill");
}
else
 {
printError("custdesc","");
custdesc=false;
}

if(fchooseprofile=="")
{
printError("ErrfilecErr","Please fill");
}
else
 {
printError("ErrfilecErr","");
ErrfilecErr=false;
}

};
// function bannerImage() {
//     var x = document.forms["bannerForm"]["fchoose"].value;
//     if (x == "") {
//         alert("Please provide an input");
//       return false;
//     }
//     return true;
//   }
  


//   function newPlan() {
//     var x = document.forms["planForm"]["nameplan"].value;
//     if (x == "") {
     
//       return false;
//     }
//     return true;
//   }
//  function newMeal(){
//                 var x = document.forms["planForm"]["nameplan"].value;
//                     if (x == "") {
//                      alert("Please provide an input");
//                     return false;
//                     }
//       return true;
//     }

//    function addMeal(addMealForm)
//    {
//          var ddl = document.getElementById("ddSelectPlan");
//         var selectedValue = ddl.options[ddl.selectedIndex].value;
//         if (selectedValue == "Please select")
//             {
//                 alert("Please select anyone from Select list");
//                 return false;
//              } 
//       return true;
//     }
  
//   function addMeal() {
//     var x = document.forms["addMealForm"]["selectedplanname","namemeal","descmeal"].value;
//     if (x == "") {
      
//       return false;
//     }
//   }

//   function custStories() {
//     var x = document.forms["customerForm"]["cust_name","cust_desc","f_choose"].value;
//     if (x == "") {
      
//       return false;
//     }
//   }

 function addMeal(){
    var s1=document.getElementById('ddSelectPlan').value;
    if(s1=="Please select"){
        alert("Please select any one from the list ");
     return false;
    }
   return true;
   }

  

  $('#sliderinput').on('change',function(){
    //get the file name
    

    var fileName = $(this).val();
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
})
$('#custprofileinput').on('change',function(){
    //get the file name
    var fileName = $(this).val();
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
})


  $(document).ready(function() {
    $('#bannerForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fchoose: {
                validators: {
                    file: {
                        extension: 'jpeg,png',
                        type: 'image/jpeg,image/png',
                        maxSize: 2048 * 1024,
                        message: 'The selected file is not valid'
                    }
                }
            }
        }
    });
});




var data = [{
    "Wholesome": [{
            "meal": "Biryani",
            "description": "Royal Biryani"
        },
        {
            "meal": "Pan Pizza",
            "description": "Pizza with beans"
        },
        {
            "meal": "Mendu Vada",
            "description": "Mendu vada with sambahar"
        }
    ]
},
{
    "Essential": [{
            "meal": "Burger",
            "description": "sada burger"
        },
        {
            "meal": "Chole Bhature",
            "description": "Bhature with onion"
        },
        {
            "meal": "Samosa",
            "description": "Samosa with sweet chutney"
        }
    ]
},
{
    "Vegetarian": [{
            "meal": "green salad",
            "description": "Carrot, Radish"
        },
        {
            "meal": "Idli",
            "description": "Chutney , Sambhar"
        },
        {
            "meal": "Paneer",
            "description": "Palak, Paneer"
        }
    ]
}
]


