import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  password='';
  onButtonClick() {
    console.log(this.includeLetters);
    this.password ='MY PASS';
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  getPassword(){
    return this.password;
  }
  getName(){
    return'thien';
  }
}
