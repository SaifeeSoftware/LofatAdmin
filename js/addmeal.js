

$('#mealdescinput').on('change', function () {

    var fileName = $(this).val();

    $(this).next('.custom-file-label').html(fileName);
})

var mealtemplate = {
    "Id": 0,
    "PlanId": 0,
    "Name": "string",
    "Description": "string",
    "MealPic": "string",
    "Category": "string"
};

var stringPath = "";

function addMeal() {
    var meal = $("#meal").val();
    var mealdesc = CKEDITOR.instances.mealeditor.getData();
    var addSelectPlan = $("#ddSelectPlan option:selected").text();
    var addSelectPlanValue = $("#ddSelectPlan option:selected").val();

    if (meal !== "") {
        mealtemplate.Name = meal;
        mealtemplate.Description = mealdesc;
        mealtemplate.MealPic = stringPath;
        mealtemplate.PlanId = addSelectPlanValue;
        mealtemplate.Category = "Lunch";
        debugger;
        //sendXhrHttpRequest("/api/meals/AddMeal", plantemplate, addMealSuccess, addMealErr, "POST");
        sendRequest("/meals/AddMeal", mealtemplate, addMealSuccess, addMealErr, "POST");
    }

}


function addMealSuccess(result) {
    debugger;
    if (result) {
        $("#mealDataResp").removeClass().addClass("successResp").html(result);
    }
}

function addMealErr(err) {
    if (err) {
        $("#mealDataResp").removeClass().addClass("errorResp").html(err.statusText);
    }
}
