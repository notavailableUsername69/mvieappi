// Fetch movie data from an API or JSON file
fetch('movie-data.json')
  .then(response => response.json())
  .then(data => {
    // Get the movies container element
    const moviesContainer = document.querySelector('.movies');

    // Iterate over the movie data
    data.forEach(movie => {
      // Create elements for each movie
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');

      const imageElement = document.createElement('img');
      imageElement.src = movie.image;
      imageElement.alt = movie.title;

      const titleElement = document.createElement('h3');
      titleElement.textContent = movie.title;

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = movie.description;

      const trailerLinkElement = document.createElement('a');
      trailerLinkElement.href = movie.trailer;
      trailerLinkElement.target = '_blank';
      trailerLinkElement.textContent = 'Watch Movie';

      // Append elements to the movie container
      movieElement.appendChild(imageElement);
      movieElement.appendChild(titleElement);
      movieElement.appendChild(descriptionElement);
      movieElement.appendChild(trailerLinkElement);

      moviesContainer.appendChild(movieElement);
    });
  })
  .catch(error => {
    console.log('Error fetching movie data:', error);


// Add event listener to "Read More" button
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', function () {
    const movie = this.closest('.movie');
    const description = movie.querySelector('.description');
    description.classList.toggle('expanded');

    if (description.classList.contains('expanded')) {
      description.style.webkitLineClamp = 'unset';
      this.textContent = 'Read Less';
    } else {
      description.style.webkitLineClamp = '3'; // Adjust the number of lines to be displayed
      this.textContent = 'Read More';
    }
  });
});
});

    
  
