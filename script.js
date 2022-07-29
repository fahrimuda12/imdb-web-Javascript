$.ajax({
  url: "http://www.omdbapi.com/?apikey=1bdb8a7c&s=Avengers",
  success: (result) => {
    const movie = result.Search;
    let cards = "";

    movie.forEach((result) => {
      cards += `<div class="card col-4" style="width: 18rem;">
      <img src="${result.Poster}" class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">${result.Title}</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
   </div>`;
    });

    $(".movie-container").html(cards);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});

console.log("hai");
