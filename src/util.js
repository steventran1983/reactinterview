//create the swame function as above but return a list 10 random movies names
export function fakeAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movieList = [
        "The Shawshank Redemption",
        "The Godfather",
        "The Dark Knight",
        "Pulp Fiction",
        "Forrest Gump",
        "Inception",
        "Fight Club",
        "The Matrix",
        "Goodfellas",
        "The Lord of the Rings: The Return of the King",
      ];
      resolve(movieList);
    }, 3000);
  });
}
