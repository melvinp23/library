export default (() => {
	const myLibrary = [];

	function Book(title, author, pages, status) {
		this.id = crypto.randomUUID();
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.status = status;
	}

	function addBookToLibrary() {
		const title = document.getElementById('title').value;
		const author = document.getElementById('author').value;
		const pages = document.getElementById('pages').value;
		const status = document.getElementById('status').value;

		const newBook = new Book(title, author, pages, status);
		myLibrary.push(newBook);
		console.log(myLibrary);

		render();
		form.reset();
	}

	const newBookBtn = document.querySelector('#new-book-btn');
	newBookBtn.addEventListener('click', function () {
		let newBookForm = document.querySelector('#form');
		newBookForm.style.display = 'block';
	});

	const dialog = document.getElementById('my-dialog');
	const addBtn = document.getElementById('submit-button');
	const newBookForm = document.querySelector('#form');

	newBookForm.addEventListener('submit', function (event) {
		event.preventDefault();
		addBookToLibrary();
	});

	addBtn.addEventListener('click', () => {
		dialog.close();
	});

	function render() {
		const display = document.querySelector('#library-container');
		const books = document.querySelectorAll('.book');
		books.forEach(book => display.removeChild(book));

		for (let i = 0; i < myLibrary.length; i++) {
			createBook(myLibrary[i]);
		}
	}

	function createBook(item) {
		const library = document.querySelector('#library-container');
		const bookContainer = document.createElement('div');
		const titleContainer = document.createElement('p');
		const authorContainer = document.createElement('p');
		const pagesContainer = document.createElement('p');
		const readContainer = document.createElement('p');
		const removeBtn = document.createElement('button');

		bookContainer.classList.add('book');
		bookContainer.setAttribute('id', myLibrary.indexOf(item));

		titleContainer.textContent = `Title: ${item.title}`;
		titleContainer.classList.add('title');
		bookContainer.appendChild(titleContainer);

		authorContainer.textContent = `Author: ${item.author}`;
		authorContainer.classList.add('author');
		bookContainer.appendChild(authorContainer);

		pagesContainer.textContent = `# of Pages: ${item.pages}`;
		pagesContainer.classList.add('pages');
		bookContainer.appendChild(pagesContainer);

		readContainer.classList.add('readBtn');
		bookContainer.appendChild(readContainer);
		if (item.status === 'read') {
			readContainer.textContent = 'Status: Read';
		} else {
			readContainer.textContent = 'Status: Not Read';
		}

		removeBtn.textContent = 'Remove';
		removeBtn.setAttribute('id', 'removeBtn');
		bookContainer.appendChild(removeBtn);

		library.appendChild(bookContainer);

		removeBtn.addEventListener('click', function () {
			myLibrary.splice(myLibrary.indexOf(item), 1);
			render();
		});
	}
})();
