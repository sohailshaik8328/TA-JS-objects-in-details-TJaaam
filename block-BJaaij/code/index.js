class Book{
    constructor(title, category, author) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;;
        this.finishedDate = null;
    }

    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = Date.now();
    }
}

class BookList {
    constructor() {
        this.books = [];
        this.currentBookIndex = 0;
    }

    add(book = []) {
        this.books = this.books.concat(book);
        return this.books;
    }
    getCurrentBook() {
        return this.books[this.currentBookIndex];
    }
    getNextBook() {
        this.currentBookIndex = this.currentBookIndex + 1;
        return this.books[this.currentBookIndex]
    }
    getPrevBook() {
        this.currentBookIndex = this.currentBookIndex - 1
        return this.books[this.currentBookIndex]
    }
    changeCurrentBook(index) {
        this.books = index;
        return this.books;
    }
}



let book1 = new Book("title1", "categoty1", "author1");
let book2 = new Book("title2", "categoty2", "author2");
let book3 = new Book("title3", "categoty3", "author3");
let book4 = new Book("title4", "categoty4", "author4");
let book5 = new Book("title5", "categoty5", "author5");


let library = new BookList();
library.add([book1, book2, book3, book4, book5]);
