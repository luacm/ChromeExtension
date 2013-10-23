$(document).ready(function() {
    $("a").hover(function() {
        $("a").css("visibility:hidden;");
        $("a").attr("href", "#");
    }, function() {
        $("a").text("Neener");
        $("a").css("visibility:visibile;");
    });
});
