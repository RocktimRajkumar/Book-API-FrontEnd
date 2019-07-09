import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Book } from './book';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpService: Http) { }

  getAllBooks(): Observable<Book[]> {
    return this._httpService.get("http://localhost:8082/BookAPI/api/book")
      .pipe(map((response: Response) => response.json()),
        catchError(this.handleError));
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }

  addBook(book: Book) {
    let body = JSON.stringify(book);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    if (book.id) {
      return this._httpService.put("http://localhost:8082/BookAPI/api/book/" + book.id, body, options);
    } else {
      return this._httpService.post("http://localhost:8082/BookAPI/api/book", body, options);
    }
  }

  deleteBook(bookId: String) {
    return this._httpService.delete("http://localhost:8082/BookAPI/api/book/" + bookId);

  }

  getBookById(bookId: String): Observable<Book> {
    return this._httpService.get("http://localhost:8082/BookAPI/api/book/" + bookId)
      .pipe(map((response: Response) => response.json()),
        catchError(this.handleError));
  }

}
