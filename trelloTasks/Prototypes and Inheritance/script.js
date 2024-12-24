function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

Book.prototype.getInfo = function(){
	console.log(`Title: ${this.title}, Author: ${this.author}`);
}



function EBook(title, author, year, fileSize) {
	Book.call(this,title, author, year);
	this.fileSize = fileSize;
}

EBook.prototype = Object.create(Book.prototype);
EBook.prototype.constructor = EBook;

EBook.prototype.download = function () {
	console.log(`Title: ${this.title}, file size: ${this.fileSize}MB`);
}

const book = new Book("Clean Code", "Robert C. Martin", 2008);
book.getInfo();

const ebook = new EBook("You Don't Know JS", "Kyle Simpson", 2014, 5);
ebook.getInfo();
ebook.download();
