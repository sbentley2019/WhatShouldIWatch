const movies = [
  {
    title: "The Shawshank Redemption",
    date: 1994,
    rating: 9.2,
    link:
      "https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=3Y245R815ARWH0WKQA3C&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1",
    src:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    title: "The Godfather",
    date: 1972,
    rating: 9.1,
    link:
      "https://www.imdb.com/title/tt0068646/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=3Y245R815ARWH0WKQA3C&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_2",
    src:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
  },
  {
    title: "The Dark Knight",
    date: 2008,
    rating: 9.0,
    link:
      "https://www.imdb.com/title/tt0468569/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=3Y245R815ARWH0WKQA3C&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_4",
    src:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    date: 2003,
    rating: 8.9,
    link:
      "https://www.imdb.com/title/tt0167260/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=3Y245R815ARWH0WKQA3C&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_7",
    src:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  {
    title: "Fight Club",
    date: 1999,
    rating: 8.8,
    link:
      "https://www.imdb.com/title/tt0137523/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=3Y245R815ARWH0WKQA3C&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_11",
    src:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
];

const genre = [
  "action",
  "adventure",
  "animation",
  "biography",
  "comedy",
  "crime",
  "documentary",
  "drama",
  "family",
  "fantasy",
  "film noir",
  "history",
  "horror",
  "music",
  "musical",
  "mystery",
  "romance",
  "sci-fi",
  "sport",
  "superhero",
  "thriller",
  "war",
  "western",
];

const reviews = [
  {
    title: "The Meg",
    review:
      "The first horror movie I ever saw was 'Jaws'–an all-time classic filmed in 1975 by Steven Spielberg. My parents did not let me watch 'Alien,'",
    rated: 3.5,
  },
  {
    title: "Interstellar",
    review:
      "I do not know about you, but to me, about 90% of the movies you can see in cinemas nowadays are dull. I know that…",
    rated: 4.1,
  },
  {
    title: "Whiplash",
    review:
      "Directed and written by Damien Chazelle, is a film mainly about the relationship between a music teacher and his student, and what it…",
    rated: 4.2,
  },
];

const categories = [
  "action",
  "adventure",
  "animation",
  "comedy",
  "crime",
  "drama",
  "fantasy",
  "horror",
  "mystery",
  "romance",
  "sci-fi",
  "thriller",
];

module.exports = {
  movies,
  genre,
  reviews,
  categories,
};
