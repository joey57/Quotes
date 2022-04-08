import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Wise Words Quotes';
  quotes: Quote[]=[
    new Quote(1,'Charles','Human spirit','The human spirit must prevail over technology.','Albert Einstein'),
    new Quote (2,'Wendy','Technology…','Technology… the knack of so arranging the world that we dont have to experience it.','Max Frisch'),
    new Quote (3,'Michael','The great myth','The great myth of our times is that technology is communication.','Libby Larsen'),
    new Quote(4,'Allan','Communications tools','Communications tools dont get socially interesting until they get technologically boring.','Clay Shirky'),
    new Quote(5,'Theodore','Programs and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson'),
    new Quote(6,'Fallon','Technology and life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn'),
  ];

  toggle(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
