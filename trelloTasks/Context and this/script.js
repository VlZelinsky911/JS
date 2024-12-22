//Реалізуйте систему бронювання номерів у готелі. 
// Вона повинна дозволяти створювати номери, 
// бронювати номери і виводити інформацію про заброньовані номери. 
// Використовуйте правильне прив'язування контексту this в методах класу.

class Hotel {
	constructor() {
		this.rooms = [];
		this.bookings = [];

	}

	addRoom(number ,type) {
		this.rooms.push({number ,type});
		console.log(`Номер ${number} (${type}) додано.`);
	}
	
	bookRoom(roomNumber, questName){
		 const room = this.rooms.find(r => r.number === roomNumber);
		 if(!this.rooms.includes(roomNumber)){
			console.log(`Номер ${roomNumber} не знайдено.`);
			return;
		 }
		 else if(this.bookings.some(b => b.roomNumber === roomNumber)){
		 console.log(`Номер ${roomNumber} вже заброньовано.`);
		 return;
		 }
		 else{
		 this.bookings.push({roomNumber, questName});
		 console.log(`Номер ${roomNumber} заброньовано для ${questName}.`);

		 }
		}


	listBookings(){
		if(this.bookings.length === 0){
			console.log("Заброньованих номерів немає.");
			return;
		}else{
		console.log("Заброньовані номери:");
			this.bookings.forEach(booking => {
				console.log(`Номер ${booking.roomNumber} - Гість: ${booking.questName}`);
		})
		}
	}
}

const myHotel = new Hotel();


const addRoom = myHotel.addRoom.bind(myHotel);
const bookRoom = myHotel.bookRoom.bind(myHotel);
const listBookings = myHotel.listBookings.bind(myHotel);

addRoom(103, "Люкс");
addRoom(111, "Делюкс");

bookRoom(99,"Іван Іванович");
bookRoom(111, "Санчизес");

listBookings();




// Завдання: Система управління бібліотекою
// Реалізуй клас Library, який буде відповідати за управління книгами в бібліотеці. 
// Він повинен мати такі можливості:

// Додати книгу: метод addBook(bookName), який додає книгу до бібліотеки.
// Якщо книга вже є, потрібно вивести відповідне повідомлення.
// Позичити книгу: метод borrowBook(bookName), який дозволяє позичити книгу, якщо вона доступна.
// Якщо книги немає або її вже позичено, вивести повідомлення про це.
// Показати список доступних книг: метод getAvailableBooks(), який виводить список усіх доступних книг.
// Показати список позичених книг: метод getBorrowedBooks(), який виводить список усіх позичених книг.
// Умови:
// Клас повинен правильно використовувати this у своїх методах.
// Тобі потрібно вручну забезпечити прив’язку контексту (через bind, call або apply) для методів класу, якщо вони будуть викликані поза контекстом класу.



console.log("------------------------------------------------");

class Library {
	constructor() {
		this.books = [];
		this.borrowing = [];
		this.available =[];
	}

	addBook(bookName){
		if(this.books.includes(bookName)){
			console.log(`Книга ${bookName} вже є в бібліотеці !!!`);
			return;
		}else{
		this.books.push(bookName);
		console.log(`Книга ${bookName} успішно додана!`);
		}
	}

	
	borrowBook(book ,fullName){
		if(!this.books.includes(book)){
		console.log(`Халепа, книгу ${book} не знайдено.`);
		return;
		}else if(this.borrowing.some(b => b.book === book)){
			console.log(`Халепа, книгу ${book} вже позичено.`);
			return;
		}else{
			this.borrowing.push({book, fullName});
			console.log(`Книгу ${book} позичив ${fullName}.`);
		}
	}

	getAvailableBooks(){
		const availableBooks = this.books.filter(book => !this.borrowing.some(b => b.book === book));
		if (availableBooks.length === 0) {
			console.log("Немає доступних книг.");
		} else {
			availableBooks.forEach(book => {
				console.log(`Книга "${book}" є доступною.`);
			});
		}
	}

	getBorrowedBooks(){
		if(this.borrowing.length === 0){
			console.log("Немає позичиних книг.");
		}else{
			this.borrowing.forEach(borrowed =>{
				console.log(`Книга "${borrowed.book}" вже позичена ${borrowed.fullName}.`);
			})
		}
	}
}

const library = new Library();

const addBook = library.addBook.bind(library);
const borrowBook = library.borrowBook.bind(library);
const getAvailableBooks = library.getAvailableBooks.bind(library);
const getBorrowedBooks = library.getBorrowedBooks.bind(library);

addBook("Троє Поросят");
addBook("Географія 10 клас");
addBook("Географія 9 клас");

borrowBook("Троє Поросят", "Дональд Трамп");

getAvailableBooks();
getBorrowedBooks();