// Make sure we wait to attach our handlers until the DOM is fully loaded.


console.log('hello');

window.addEventListener('load', () => {

	$('#add-dat').on('submit', (e) => {

		e.preventDefault();

		const data = { burger: $('#ca').val() };

		if (!data.burger) return alert('Please enter a burger name');

		$.ajax("burgers/create", { type: "POST", data })
			.then(res => location.reload());

	});

	$('.eat-dat').on('click', e => {

		const id = e.target.dataset.id;

		$.ajax(`/burgers/${id}`, { type: "PUT", data: { id: 1 } })
			.then(res => location.reload());

	});

})





// $(function () {
// 	$("#add-dat").on("click", function (event) {
// 		event.preventDefault()
// 		var id = $(this).data("id");

// 		console.log(id);

// 		return;
// 		// Send the PUT request.
// 		$.ajax("burgers/create" + id, {
// 			type: "POST",
// 			URL: "/burgers/" + id
// 		}).then(
// 			function () {
// 				// console.log("New burger created", id);
// 				// Reload the page to get the updated list
// 				location.reload();
// 			}
// 		);
// 	});


// });
