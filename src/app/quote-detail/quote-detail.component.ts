import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quoty:Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(index){
    this.quoty.likes+=1;
  }
  downvote(index){
    this.quoty.dislikes+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
