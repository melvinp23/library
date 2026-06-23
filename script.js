const myLibrary = [];

function Book(title, author, pages, read) {
	this.id = crypto.randomUUID();
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

const book1 = new Book(`Lord of the Rings`, `J.R.R. Tolkien`, 500, false);

function addBookToLibrary() {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const pages = document.getElementById('pages').value;
	const read = document.getElementById('read').checked;

	const newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
	console.log(myLibrary);
}

const newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', function () {
	let newBookForm = document.querySelector('#new-book-form');
	newBookForm.style.display = 'block';
});

const newBookForm = document.querySelector('#new-book-form');
newBookForm.addEventListener('submit', function (event) {
	event.preventDefault();
	addBookToLibrary();
});
