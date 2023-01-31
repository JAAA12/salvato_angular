import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 condicion?:boolean;
 valor(){
  console.log(this.condicion)
 }
}
