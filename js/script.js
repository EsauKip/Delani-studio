$(document).ready(function() {

    $("#design").click(function() {
        $("#design-showing").toggle();
        $(".hide-design-image").toggle();
    })

    $("#development").click(function() {
        $("#development-showing").toggle();
        $(".hide-development-image").toggle();
    })

    $("#productManagement").click(function() {
        $("#product-management-showing").toggle();
        $(".hide-product-management").toggle();
    })
    $(".Hover").hover(function() {
            $(this).animate({ opacity: '1' });
        },
        function() {
            $(this).animate({ opacity: '0' });
        })

});
var contactUsValidation = function() {

    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var sms = document.getElementById("message").value;

    // validation

    if (name.length < 2 || name == " ") {
        alert("Please enter a valid name! \nName must be filled")
        return false;
    };

    atPosition = email.indexOf("@");
    dotPosition = email.lastIndexOf(".");

    if (email == " ") {
        alert("Email must be filled!")
        return false;
    };

    if (atPosition <= 2) {
        alert("Provide a valid Email address!")
        return false;
    };

    if (dotPosition == -1) {
        alert("Provide a valid email address.")
        return false;
    };

    if (sms == " " || sms < 2) {
        alert("You have not entered any message, or your message is too short.")
        return false;
    } else {
        alert("Hi " + name + ", your message was successfully sent. Thank you for reaching out to us.")
    }
};