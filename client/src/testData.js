const movies = [
  {
    title: "The Shawshank Redemption",
    date: 1994,
    rating: 9.2,
    link:
      "https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=3Y245R815ARWH0WKQA3C&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1",
  },
  {
    title: "The Godfather",
    date: 1972,
    rating: 9.1,
    link:
      "https://www.imdb.com/title/tt0068646/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=3Y245R815ARWH0WKQA3C&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_2",
  },
  {
    title: "The Dark Knight",
    date: 2008,
    rating: 9.0,
    link:
      "https://www.imdb.com/title/tt0468569/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=3Y245R815ARWH0WKQA3C&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_4",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    date: 2003,
    rating: 8.9,
    link:
      "https://www.imdb.com/title/tt0167260/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=3Y245R815ARWH0WKQA3C&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_7",
  },
  {
    title: "Fight Club",
    date: 1999,
    rating: 8.8,
    link:
      "https://www.imdb.com/title/tt0137523/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=3Y245R815ARWH0WKQA3C&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_11",
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
  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Action._CB1513316166_SX233_CR0,0,233,131_AL_.jpg",
    alt: "action image",
  },
  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Adventure._CB1513316166_SX233_CR0,0,233,131_AL_.jpg",
    alt: "adventure image",
  },
  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Animation._CB1513316167_SX233_CR0,0,233,131_AL_.jpg",
    alt: "animation image",
  },
  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Comedy._CB1513316167_SX233_CR0,0,233,131_AL_.jpg",
    alt: "comedy image",
  },
  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Crime._CB1513316167_SX233_CR0,0,233,131_AL_.jpg",
    alt: "crime image",
  },
  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Drama._CB1513316168_SX233_CR0,0,233,131_AL_.jpg",
    alt: "drama image",
  },
  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Fantasy._CB1513316168_SX233_CR0,0,233,131_AL_.jpg",
    alt: "fantasy image",
  },
  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Horror._CB1513316168_SX233_CR0,0,233,131_AL_.jpg",
    alt: "horror image",
  },
  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Mystery._CB1513316168_SX233_CR0,0,233,131_AL_.jpg",
    alt: "mystery image",
  },
  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Romance._CB1513316168_SX233_CR0,0,233,131_AL_.jpg",
    alt: "romance image",
  },
  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Sci-Fi._CB1513316168_SX233_CR0,0,233,131_AL_.jpg",
    alt: "sci-fi image",
  },

  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Superhero._CB1513316168_SX233_CR0,0,233,131_AL_.jpg",
    alt: "superhero image",
  },

  {
    src:
      "https://m.media-amazon.com/images/G/01/IMDb/genres/Thriller._CB1513316169_SX233_CR0,0,233,131_AL_.jpg",
    alt: "thriller image",
  },
];

module.exports = {
  movies,
  genre,
  reviews,
  categories,
};
