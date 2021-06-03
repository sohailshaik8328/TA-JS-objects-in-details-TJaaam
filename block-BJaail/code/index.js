class BookList {
    constructor(root, list = []) {
        this.books = list;
        this.root = root;
    }

    add(text1, text2, img) {
        let book = new Book(text1, text2, img);
        this.books.push(book);
        this.createUI();
        return this.books.length;
    }

    handleDelete(id) {
        let index = this.books.findIndex((book) => book.id === id);
        this.books.splice(index, 1);
        this.createUI();
        return this.books.length;
    }

    createUI() {
        this.root.innerHTML = "";
        this.books.forEach(book => {
            let ui = book.createUI();
            ui.querySelector('span').addEventListener('click', this.handleDelete.bind(this, book.id));
            this.root.append(ui);
        })
    }
}

class Book {
    constructor(text1, text2, img) {
        this.text1 = text1;
        this.text2 = text2;
        this.img = img;
        this.isRead = false;
        this.id = `id - ${Date.now()}`
    }

    handleCheck() {
        this.isRead = !this.isRead;
        this.createUI();
    }

    createUI() {
        let li = document.createElement('li');
        li.classList.add("flex");

        let input = document.createElement('input');
        input.type = "checkbox";
        input.classList.add('checkbox');
        input.addEventListener('click', this.handleCheck.bind(this));

        let title = document.createElement('p');
        title.innerHTML = this.text1;

        let author = document.createElement('p');
        author.innerHTML = this.text2;

        let img = document.createElement('img');
        img.src = this.img;
        img.innerHTML = this.img;

        let deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = '❌';
        // deleteBtn.addEventListener('click', this.handleDelete);

        li.append(input, title, author, img, deleteBtn);

        return li;
    }

}
let input1 = document.querySelector('#title');
let input2 = document.querySelector('#author');
let input3 = document.querySelector('#img');

let myBook = new BookList(document.querySelector(".ul"));
// myBook.add("text1", "text2", "img");
// myBook.add("text11", "text21", "img1");

input1.addEventListener("keyup", (event) => {
    // event.preventDefault();
    if(event.keyCode === 13) {
        myBook.add(event.target.value);
    }
})

input2.addEventListener('keyup', (event) => {
    // event.preventDefault();
    if(event.keyCode === 13) {
        myBook.add(event.target.value);
    }
})

input3.addEventListener('keyup', (event) => {
    // event.preventDefault();
    if(event.keyCode === 13) {
        myBook.add(event.target.value);
    }
})