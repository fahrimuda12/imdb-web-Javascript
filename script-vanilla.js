const searchInput = document.querySelector("[data-search]");
const movieHtml = document.querySelector(".movie-container");
console.log(searchInput);
searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  search(value);
});

const search = function (input) {
  console.log(input);
  fetch(
    "http://www.omdbapi.com/?apikey=1bdb8a7c&s=" +
      (input != " " ? input : "avengers")
  )
    .finally(() => {
      let loading = `<div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>`;
      movieHtml.innerHTML = loading;
    })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      let movie = "";
      data.Search.forEach((result) => {
        movie += `<div class="card col-4" style="width: 18rem;">
                      <img src="${result.Poster}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${result.Title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>`;
      });

      movieHtml.innerHTML = movie;
    })
    .catch((err) => {
      console.log(err.responseText);
    });
};
