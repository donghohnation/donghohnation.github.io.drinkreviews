// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    // Create New drink
    // Add a drink form
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newDrink = {
            // Value for drink_name column is id="drink" textarea
            drink_name: $("#drink").val().trim(),
            // Default tried to false
            tried: 0
        };

        // Send the POST request.
        $.ajax("/api/drinks", {
            type: "POST",
            data: newDrink
        }).then(
            function() {
                console.log("Created new drink");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // TRIED or DRINK ME button
    $(".change-tried").on("click", function (event) {
        let id = $(this).data("id");
        console.log(id);
        // Return value for data-tried
        let newDrink = $(this).data("tried");
        console.log("Current drink state: ", newDrink);

        // Change to opposite tried state
        let newDrinkState = {
            tried: !newDrink
        };

        // Send the PUT request.
        $.ajax("/api/drinks/" + id, {
            type: "PUT",
            data: newDrinkState
        }).then(
            function () {
                console.log("Changed tried to", newDrinkState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Delete button
    $(".delete-drink").on("click", function(event) {
        let id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/drinks/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("Deleted drink", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});
