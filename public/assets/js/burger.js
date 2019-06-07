// Import MySQL connection.
const isBurgerValueValid = function(burgername){
  return burgername.length >= 10;
}

const isDevouredTrue = function(value){
  return value === true
}

const isDevouredFalse = function(value) {
  return value === false
}

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $('.change-devoured').on('click', function(event) {
    event.preventDefault();
     const id = $(this).data('id');
     const newBurger = $(this).data('newdevoured');
    console.log(id)
    console.log(newBurger)
    const newBurgerState = {
      devoured: newBurger
    };
    console.log(newBurgerState)
    // Send the PUT request.
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newBurgerState
    }).then(function() {
        console.log("jaldjkaljk")
        console.log('changed devoured to', newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $('.btn-primary').on('click', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $('#ca').val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(
      function() {
        console.log('created new Burger');
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
