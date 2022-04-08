export class Quote {
  // id: number;
  // name: string='';
  // quote: string='';
  // title: string='';
  // author: string='';

  showInfo: boolean;
  constructor(public id:number, public name: string, public quote: string, public title: string, public author: string,public datePosted: Date)
    {
      this.showInfo=false;
    }
}
