import { Component, OnInit } from '@angular/core';
import { RequestService } from './service/request.service';
import { Book } from './interface/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'angularhomework';
  show: boolean = false;
  books: any = {};
  buttonText: string = 'Show books';

  constructor(private booksRequest: RequestService) {}

  toggleShow(): void {
    this.show = !this.show;
    this.show ? (this.buttonText = 'Hide books') : (this.buttonText = 'Show books');
  }

  onRequestService(): void {
    this.booksRequest
      .getBooks()
      .subscribe((response) => (this.books = response));
  }
  ngOnInit(): void {
    this.onRequestService();
  }
}
