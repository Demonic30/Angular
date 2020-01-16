import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fontSize = '';
  msg = '';
  fontColor = '';
  text = '';

  name = '';
  lname = '';
  fullName = '';

  num1 = '';
  num2 = '' ;
  result = '' ;
  sum = 0;

  constructor() { }

  ngOnInit() {
    this.msg = 'Home Word';
    this.fontSize = '50px';
    this.fontColor = 'blue';
    this.text = 'golf';
  }

  setName() {
    return this.fullName = this.name + ' ' + this.lname;
  }

  setNum(){
    return this.result = this.num1+this.num2;
  }

  clear() {
    return this.fullName = '',this.name = '', this.lname = '',this.result = '', this.num1 ='', this.num2 = '';
  }

  sumNumber(){
    return this.sum = Number(this.num1) + Number(this.num2);
  }

}
