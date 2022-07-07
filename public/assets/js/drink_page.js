$(function () {

    //create and add
    $(".create").on("submit", function(event) {
        event.preventDefault();

        let newDrink = {
            //value for drink_name
            drink_name: $("#drink").val().trim(),
            //default is false
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

    //try button
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

    //delete button
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
