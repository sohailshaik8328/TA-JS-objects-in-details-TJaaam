class BookList {
    constructor(index) {
        this.books = [];
        this.index = index;
    }

    add(book = []) {
        this.books.push(book);
        return this.books;
    }
    getCurrentBook() {
        return this.books[this.index];
    }
    getNextBook() {
        return this.books[this.index + 1]
    }
    getPrevBook() {
        return this.books[this.index - 1]
    }
    changeCurrentBook(newBook) {
        this.books = newBook;
        return this.books;
    }
}

class Book extends BookList{
    constructor(books, index, title, category, author, isRead = false, finishedDate) {
        super(books, index)
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }

    markBookAsRead() {
        this.isRead = true;
        this.finishedDate = new Date();
    }
}

let book1 = new Book("book", 1, "title", "category", "author", true, new Date())