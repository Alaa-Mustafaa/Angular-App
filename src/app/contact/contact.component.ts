import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  word:String='';
  condition1:boolean=false;
  condition2:boolean=false;
  condition3:boolean=false;
  condition4:boolean=false;

  writing(value:any){
    this.word=value.target.value;
 
    if(this.word === "")
    {
      this.condition1=false;
      this.condition2=false;
      this.condition3=false;
      this.condition4=false;    
    }
    else{
      if(value.target.id =="userName"){
        this.condition1=true;
        this.condition2=false;
        this.condition3=false;
        this.condition4=false;


      }
      else if(value.target.id == "userAge"){
        this.condition2=true;
        this.condition1=false;
        this.condition3=false;
        this.condition4=false;
      }
      else if(value.target.id == "userEmail"){
        this.condition3=true;
        this.condition4=false;
        this.condition2=false;
        this.condition1=false;

      }
      else if(value.target.id == "userPassword"){
        this.condition4=true;
        this.condition1=false;
        this.condition2=false;
        this.condition3=false;
      }
    }
  

  
}

}