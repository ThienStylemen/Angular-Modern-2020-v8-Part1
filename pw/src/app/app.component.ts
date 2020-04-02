import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password='';

  onChangeLength(value: string){  //typescript
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onButtonClick() {
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    
    if (this.includeLetters) validChars+=letters;
    if (this.includeNumbers) validChars+=numbers;
    if (this.includeSymbols) validChars+=symbols;

    let generatedPassword='';
    for(let i=0;i<this.length;i++){
      let index = Math.floor(Math.random()*validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
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
