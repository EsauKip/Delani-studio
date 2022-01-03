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
});