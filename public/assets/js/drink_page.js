$(function () {
    $(".create").on("submit", function(event) {
        event.preventDefault();

        let newDrink = {
            drink_name: $("#drink").val().trim(),
            tried: 0
        };

        $.ajax("/api/drinks", {
            type: "POST",
            data: newDrink
        }).then(
            function() {
                console.log("Created new drink");
                location.reload();
            }
        );
    });

    $(".triiied").on("click", function (event) {
        let id = $(this).data("id");
        console.log(id);
        let newDrink = $(this).data("tried");
        console.log("Current drink state: ", newDrink);
        let newDrinkState = {
            tried: !newDrink
        };

        $.ajax("/api/drinks/" + id, {
            type: "PUT",
            data: newDrinkState
        }).then(
            function () {
                console.log("Changed tried to", newDrinkState);
                location.reload();
            }
        );
    });

    $(".delete-drink").on("click", function(event) {
        let id = $(this).data("id");
    
        $.ajax("/api/drinks/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("Deleted drink", id);
            location.reload();
          }
        );
      });
});
