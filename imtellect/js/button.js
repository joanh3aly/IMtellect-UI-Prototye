$(document).ready(function() {
    var obutton = document.getElementById('obutton');
    $(".info").hide();
    $(".item img").click(function() {
        $(".info").slideToggle();
    });
});