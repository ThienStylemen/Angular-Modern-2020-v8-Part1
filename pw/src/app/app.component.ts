import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password='';
  onButtonClick() {
    console.log(`
      About to generate password with the following
      Includes Letters${this.includeLetters}
      Includes Numbers${this.includeNumbers}
      Includes Symbols${this.includeSymbols}
    `);
    this.password ='MY PASS';
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = ! this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  getPassword(){
    return this.password;
  }
  getName(){
    return'thien';
  }
}
