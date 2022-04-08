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
    new Quote(1,'Charles','Human spirit','The human spirit must prevail over technology.','Albert Einstein', new Date(2022,8,12)),
    new Quote (2,'Wendy','Technology…','Technology… the knack of so arranging the world that we dont have to experience it.','Max Frisch', new Date(2022,7,14)),
    new Quote (3,'Michael','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2022,6,3)),
    new Quote(4,'Allan','Communication','Communications tools dont get socially interesting until they get technologically boring.','Clay Shirky',new Date(2022,8,7)),
    new Quote(5,'Theodore','Code','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2022,8,17)),
    new Quote(6,'Fallon','Tech','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn', new Date(2022,7,15)),
  ];

  quoteDelete(isRead, index){
    if(isRead){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].title}?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }

  toggle(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
