class Media{
    constructor (title, isCheckedOut, ratings){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }

    set title(nTitle){
        this._title = nTitle;
    }

    set isCheckedOut(value){
        this._isCheckedOut = value;
    }

    set ratings(nRatings){
        this._ratings = nRatings;
    }

    getAverageRating() {
        let averageRating = this.ratings.reduce((a, b) => a + b);
        return averageRating / this.ratings.length;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut === !this.isCheckedOut;
    }

    addRating(val) {
        if (typeof val !== Number) {
            return 'Please rate us!';
        } else {
            this._ratings.push(val);
        }
    }
}

class Book extends Media{
    constructor(title, author, pages) {
        super(title);
        this._author=author;
        this._pages=pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    set author(nAuthor){
        this._author = nAuthor;
    }

    set pages(numbPages){
        this._pages = numbPages;
    }
}

class Movie extends Media{
    constructor(title, director, runTimer){
        super(title);
        this._director=director;
        this._runTimer=runTimer;
    }

    get director() {
        return this._director;
    }

    get runTimer() {
        return this._runTimer;
    }

    set director(nDirector){
        this._director = nDirector;
    }

    set runTimer(nRunTimer){
        this._runTimer = nRunTimer;
    }
}

class CD extends Media{
    constructor(title, artist, songs){
        super(title);
        this._artist=artist;
        this._songs=songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    set artist(nArtist){
        this._artist = nArtist;
    }

    set songs(nSongs){
        this._songs = nSongs;
    }
}

let newBook = new Book('Tema pentru acasa', 'Nicolae Dabija', 428);
newBook.toggleCheckOutStatus();
newBook.addRating(10);
newBook.addRating(7);
newBook.addRating(9.5);
console.log(`The rating of this book is ${newBook.getAverageRating()}.`);
console.log(newBook);

let newMovie = new Movie('Widows', 'Steve McQueen', 190);
newMovie.toggleCheckOutStatus();
newMovie.addRating(7.5);
newMovie.addRating(8);
newMovie.addRating(2);
console.log(`The rating of this movie is ${newMovie.getAverageRating()}.`);
console.log(newMovie);

let newCD = new CD('My Time', 'Zubi');
newCD.toggleCheckOutStatus();
newCD.addRating(10);
newCD.addRating(9.8);
newCD.addRating(1);
console.log(`The rating of this CD is ${newCD.getAverageRating()}.`);
console.log(newCD);