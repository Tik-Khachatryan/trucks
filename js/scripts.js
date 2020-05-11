// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


$(document).ready(function() {

    $("#more").click(function () {
        $('html, body').animate({
            scrollTop: $("#header_scroll").offset().top
        }, 1100);
    });

});