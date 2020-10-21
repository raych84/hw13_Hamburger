// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
	$(".submit").on("click", function(event) {
	  var id = $(this).data("id");
	  var newBurger = $(this).data("newburger");
  
	  var newBurger = {
		burgers: newBurger
	  };
  
	  // Send the PUT request.
	  $.ajax("burgers/create" + id, {
		type: "PUT",
		data: newBurger
	  }).then(
		function() {
		  console.log("New burger created", newBurger);
		  // Reload the page to get the updated list
		  location.reload();
		}
	  );
	});
  
	$(".create-form").on("submit", function(event) {
	  // Make sure to preventDefault on a submit event.
	  event.preventDefault();
  
	  var newBurger = {
		name: $("#ca").val().trim(),
		devour: $("[name=devour]:checked").val().trim()
	  };
  
	  // Send the POST request.
	  $.ajax("burgers/create", {
		type: "POST",
		data: newBurger
	  }).then(
		function() {
		  console.log("created new burger");
		  // Reload the page to get the updated list
		  location.reload();
		}
	  );
	});
  
});
  