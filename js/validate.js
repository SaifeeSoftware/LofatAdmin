function validateForm() {
    var x = document.forms["myForm"]["fchoose"].value;
    if (x == "") {
      alert("Please fill in this field");
      return false;
    }
  }
  
  function validateForm1() {
    var x = document.forms["myForm1"]["nplan"].value;
    if (x == "") {
      alert("Please fill in this field");
      return false;
    }
  }
  
  function validateForm2() {
    var x = document.forms["myForm2"]["nplan"].value;
    if (x == "") {
      alert("Please fill in this field");
      return false;
    }
  }

  function validateForm3() {
    var x = document.forms["myForm3"]["nplan"].value;
    if (x == "") {
      alert("Please fill in this field");
      return false;
    }
  }

  $(document).ready(function() {
    $('#fileForm').bootstrapValidator({
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


