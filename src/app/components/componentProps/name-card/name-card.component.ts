import { Component, Input} from '@angular/core';

@Component({
  selector: 'fa-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent {
 @Input() firstName: string;
 private _lastName: string;

 @Input() get lastName(){
    return this._lastName;
  }
  set lastName(value:string){
    this._lastName = value;
  }

  get fullName(){
      return this.firstName + ' ' + this.lastName
  }
}
