// $.ajax({
// 	method: 'get',
// 	url: 'https://swapi.dev/api/people/',
// })
// .then((response) => {
// 	response.results.forEach((person) => {
// 		$('#people').append($('<li>').text(person.name));
// 	});
// });

// Cannot figure out how to select the first object (first movie) in the array.

$.ajax({
	method: 'get',
	url: 'https://swapi.dev/api/films/',
}).then((response) => {
	response.results.forEach((film) => {
		let first = $(film.episode_id[0]);
		console.log(first);
		let ul = $('<ul>')
			.append($('<li>').text(film.title))
			.append($('<li>').text(film.release_date))
			.append($('<li>').text(film.episode_id))
			.append($('<li>').text(film.opening_crawl))
			.append($('<li>').text(film.director))
			.append($('<li>').text(film.producer));
		$('div').append(ul);
	});
});

let clickButton = (event) => {
	event.preventDefault();
	$('li').toggle();
};

$('button').on('click', clickButton);
