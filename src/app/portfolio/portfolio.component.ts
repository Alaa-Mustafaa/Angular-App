import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
condition:boolean=false;
sourcee:string='';
  getSource(source:string){
    this.sourcee=source;
    console.log(this.sourcee);
    this.condition=true;


  }

}
