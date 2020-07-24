$(document).ready(function () {
    $("#look-for-country").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".search-filter .country-search-filter").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});