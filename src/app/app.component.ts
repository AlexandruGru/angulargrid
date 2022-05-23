import { Component, OnInit, Output } from '@angular/core';
import { RequestService } from './service/request.service';

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
  inputValue: string = '';

  constructor(private booksRequest: RequestService) {}

  toggleShow(): void {
    this.show = !this.show;
    this.show
      ? (this.buttonText = 'Hide books')
      : (this.buttonText = 'Show books');
  }
  onRequestService(): void {
    this.booksRequest
      .getBooks()
      .subscribe((response) => (this.books = response));
  }
  addInputValue(value: string) {
    this.inputValue = value
    console.log('parents value', value)
  }
  ngOnInit(): void {
    this.onRequestService();
  }
}
