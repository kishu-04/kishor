$(document).ready(function () {
    $("#submitBtn").click(function () {
        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            address: $("#address").val(),
        };

        $.ajax({
            type: "POST",
            url: "submit.php",
            data: formData,
            success: function (response) {
                $("#result").html(response);
            },
            error: function () {
                $("#result").html("<p style='color:red;'>An error occurred.</p>");
            },
        });
    });
});
