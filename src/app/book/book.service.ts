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

}
