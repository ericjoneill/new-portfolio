console.log("Connected!");

AOS.init();

$(".nav-link:not(#navbarDropdown)").click(function() {
    if (!$(".nav-link").hasClass("dropdown-toggle") && !$("#mobile-nav-button").hasClass("show")) {
        $("#mobile-nav-button").removeClass("fa-bars").addClass("fa-times");
    } else {
        $("#mobile-nav-button").removeClass("fa-times").addClass("fa-bars");
    }
})

$("#mobile-nav-button").click(function() {
    if (!$("#navbarSupportedContent").hasClass("show")) {
        $("#mobile-nav-button").removeClass("fa-bars").addClass("fa-times");
    } else  {
        $("#mobile-nav-button").removeClass("fa-times").addClass("fa-bars");
    }
})

$("#navbarSupportedContent").on('show.bs.collapse', function () {
    $('.nav-link:not(#navbarDropdown)').click(function () {
        $("#navbarSupportedContent").collapse('hide');
    });
});