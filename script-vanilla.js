const searchInput = document.querySelector("[data-search]");
const movieHtml = document.querySelector(".movie-container");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  search(value);
});

const search = function (input) {
  let loading = `<div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>`;
  movieHtml.innerHTML = loading;
  setTimeout(() => {
    fetch(
      "http://www.omdbapi.com/?apikey=1bdb8a7c&s=" +
        (input.length > 0 ? input : "avengers")
    )
      // .finally(() => {
      //   let loading = `<div class="spinner-border text-primary" role="status">
      //                     <span class="visually-hidden">Loading...</span>
      //                 </div>`;
      //   movieHtml.innerHTML = loading;
      // })
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
        movieHtml.innerHTML = `<h1 class="text-primary text-center my-auto mx-auto h-100">Data Not Found</h1>`;
      });
  }, 500);
};

search("avengers");
