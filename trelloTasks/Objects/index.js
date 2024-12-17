//Створіть об'єкт, який представляє книгу з властивостями title, author та year.

const book = {
	title: "Rich and poor dad",
	autor: "Robert Kiyosaki",
	year: 1997
}
console.log(book);

// Додайте нову властивість genre до об'єкта книги.

Object.assign(book,{gender : "it"});

console.log(book);

//Видаліть властивість year з об'єкта книги.

delete book.year;
console.log(book);
