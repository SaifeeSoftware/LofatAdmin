
(function () {
    'use strict';
    window.addEventListener('load', function () {

        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {

                    switch (form.id) {

                        case "addBanner":
                            banner();
                            event.preventDefault();
                            event.stopPropagation();
                            break;

                        case "addNewPlan":

                            addPlan();
                            event.preventDefault();
                            event.stopPropagation();
                            break;

                        case "addPlanMeadDesc":

                            addMeal();
                            event.preventDefault();
                            event.stopPropagation();
                            break;

                        case "addCustdata":

                            addCustomerdata();
                            event.preventDefault();
                            event.stopPropagation();
                            break;

                    }
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

