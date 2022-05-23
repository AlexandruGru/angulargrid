import { Component, Input } from '@angular/core';
import { Book } from '../interface/book';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input() book: any;
    
}
