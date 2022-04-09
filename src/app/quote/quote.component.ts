import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Wise Quotes';
  quotes: Quote[]=[
    new Quote(1,'Denis','Graditude',`If you look at what you have in life, you'll always have more. IF you look at what you don't have you'll anever have enough.`,'Oprah Winfrey', new Date(2022,8,12),0,0),
    new Quote (2,'Wendy','Curiousity',`I have no special talents, I am only passionately curious.`,'Albert Einstein', new Date(2022,7,14),0,0),
    new Quote (3,'Michael','Humanity',` What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of the others.`,'Nelson Mandela',new Date(2022,6,3),0,0),
    new Quote(4,'Allan','Leadership',`The very essence of leadership is that you have to have vision.You can't blow an uncertain trumpet.`,'Theodore M.Hesburgh',new Date(2022,8,7),0,0),
    new Quote(5,'Theo','Goals',`If you set your Goals ridiculously high and it's a failure, you will fail above everyone else's success.`,'James Cameron',new Date(2022,8,17),0,0),
    new Quote(6,'Fallon','Life',`Twenty years from now you will be more disappointed by the things you didnt do than by the ones you did do`,'Mark Twain', new Date(2022,7,15),0,0),
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

  addNewQuote(quote){
    let quotelength = this.quotes.length;
    quote.id =quotelength+1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
