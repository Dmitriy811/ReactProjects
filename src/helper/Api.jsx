export const searchURl = (serchQuery) =>
	fetch(`http://www.omdbapi.com/?apikey=70c8d2a4&s={${serchQuery}}`)
		.then(response => response.json())
		.then(data => data.Search)