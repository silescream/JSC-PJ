let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};
console.log(personalMovieDB.count);
function addMovie() {
let lastSeenFilm = prompt('Один из последних просмотренных фильмов?', '');
let lastSeenFilmRate = prompt ('На сколько оцените его?', '');
personalMovieDB.movies[lastSeenFilm] = lastSeenFilmRate;
console.log(personalMovieDB);
}
addMovie();
addMovie();