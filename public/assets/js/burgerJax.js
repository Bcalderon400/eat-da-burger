// make a POST request to add burger to the menu
$("#addForm").submit(e => {
    e.preventDefault();

    var burger = {
        burgerName: $("#burgerName").val().trim()
    };

    $.post("/api/burgers", burger, () => {
        location.reload();
    });
});

// make a PUT request to devour burger
$(".devourBtns").on("click", (e) => {
    var burgerId = $(e.target).attr("data-id");

    $.ajax(`/api/burgers/${burgerId}`, {
        type: "PUT"
    }).then(() => {
        location.reload();
    });
});