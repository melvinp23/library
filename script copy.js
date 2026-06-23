const myLibrary = [];

class Book {
	constructor (title, author, pages, read) {
		this.id = crypto.randomUUID();
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

function addBookToLibrary(event) {
	event.preventDefault();
	// const title = document.getElementById('title').value;
	// const author = document.getElementById('author').value;
	// const pages = document.getElementById('pages').value;
	// const read = document.getElementById('read').checked;

	const newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
	return newBook;
}

const book1 = new Book(`The Hobbit`, `J.R.R. Tolkien`, 295, `not read yet`);

function displayBooks() {
	const libraryContainer = document.getElementById('library-container');

	libraryContainer.innerHTML = '';

	myLibrary.forEach((book, index) => {
		const bookCard = document.createElement('div');
		bookCard.classList.add('book-card');
        bookCard.setAttribute('data-index', index);

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>By: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.read ? 'Read' : 'Not Read Yet'}</p>
        `;

        libraryContainer.appendChild(bookCard);
	});
}
