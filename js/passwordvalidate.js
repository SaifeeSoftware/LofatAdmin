function pass_val(pass) {
    var regPass = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,9}$/;
    if (regPass.test(pass) == false) {
        document.getElementById("passstatus").innerHTML = "<span class='warning'>Please enter you password between 7-9 character atleast one number, alphabet, special character</span>";

    } else {
        document.getElementById("passstatus").innerHTML = "<span class='valid'>Thanks for entering password</span>";
    }
}

function checkPass() {

    var pass = document.getElementById('pass');
    var confpass = document.getElementById('confpass');

    var message = document.getElementById('confirmMessage');

    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if (pass.value == confpass.value) {

        confpass.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"

    } else {

        passconf.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
}

// function email_validate(email) {
//     var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

//     if (regMail.test(email) == false) {
//         document.getElementById("status").innerHTML = "<span class='warning'>Email address is not valid yet.</span>";
//     } else {
//         document.getElementById("status").innerHTML = "<span class='valid'>Thanks, you have entered a valid Email address!</span>";
//     }
// }

function username_validate(username) {
    var regMail = /^[a-zA-Z0-9+]{5,7}$/;
    if (regMail.test(username) == false) {
        document.getElementById("unamestatus").innerHTML = "<span class='warning'>Username Should contain 5 to 7 alphanumeric character</span>";
    } else {
        document.getElementById("unamestatus").innerHTML = "<span class='valid'>Thanks, you have entered a valid Username!</span>";
    }
}

function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}
