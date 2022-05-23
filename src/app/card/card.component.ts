import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  myInput = '';
  inputHandler(event: any) {
    this.myInput = event.target.value;
    this.addNewInputValue(this.myInput);
  }

  @Input() book: any;
  
  @Output() inputEvent = new EventEmitter<string>();
  addNewInputValue(value: string) {
    this.inputEvent.emit(value);
    console.log('value',value)
  }
}
