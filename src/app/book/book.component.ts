import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']

})
export class BookComponent implements OnInit {

  books: Book[];
  book = new Book();
  constructor(private _bookService: BookService, private ngxService: NgxUiLoaderService) { }

  getBooks(): void {
    this.ngxService.start();
    this._bookService.getAllBooks()
      .subscribe((bookData) => {
        this.books = bookData;
        console.log(bookData);
        this.ngxService.stop();
      }, (error) => {
        console.log(error);
        this.ngxService.stop();
      });
  }

  addBook(): void {
    this.ngxService.start();
    this._bookService.addBook(this.book)
      .subscribe((response) => {
        console.log(response);
        this.reset();
        this.getBooks();
        this.ngxService.stop();
      }, (error) => {
        console.log(error);
        this.ngxService.stop();
      });
  }

  private reset() {
    this.book.id = null;
    this.book.author = null;
    this.book.title = null;
  }

  deleteBook(bookId: String) {
    this.ngxService.start();
    this._bookService.deleteBook(bookId)
      .subscribe((response) => {
        console.log(response);
        this.getBooks();
        this.ngxService.stop();
      }, (error) => {
        console.log(error);
        this.ngxService.stop();
      });
  }

  getBookById(bookId: String) {
    this.ngxService.start();
    this._bookService.getBookById(bookId)
      .subscribe((bookData)=>{
        console.log(bookData);
        this.book=bookData;
        this.getBooks();
        this.ngxService.stop();
      },(error)=>{
        console.log(error);
        this.ngxService.stop();
      });
  }

  ngOnInit(): void {
    this.getBooks();
  }

}
