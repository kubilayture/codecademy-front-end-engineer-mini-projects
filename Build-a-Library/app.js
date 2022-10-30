class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = true;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }
    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
    getAverageRating() {
        let ratingsSum = this.ratings.reduce(
            (curSum, rating) => curSum + rating,
            0
        );
        return ratingsSum / this.ratings.length;
    }
    addRatings(val) {
        this.ratings.push(val);
    }
}
// Book class
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}
// Movie class
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
}
// Instance book
const historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRatings(4);
historyOfEverything.addRatings(5);
historyOfEverything.addRatings(6);
console.log(historyOfEverything.getAverageRating());
// Instance movie
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
historyOfEverything.addRatings(1);
historyOfEverything.addRatings(1);
historyOfEverything.addRatings(5);
console.log(historyOfEverything.getAverageRating());
