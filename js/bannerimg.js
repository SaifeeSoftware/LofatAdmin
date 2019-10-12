$('#sliderinput').on('change', function () {
    var fileName = $(this).val();

    $(this).next('.custom-file-label').html(fileName);
})



var stringPath = "";
var banImg = {
    "img": [{
        "sliderimg": "C:\Mypic\ab.jpg"
    },
    {
        "sliderimg": "C:\Mypic\ac.jpg"
    },
    {
        "sliderimg": "C:\Mypic\ad.jpg"
    },
    ]
};

var imgTemplate = {
    "sliderimg": ""
};

function banner() {
    imgTemplate.sliderimg = stringPath;
    banImg.img.push(imgTemplate);
}

