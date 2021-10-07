import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage {

  num1:string="";
  num2:string="";
  Res:string="";
  constructor() { }


  Calcular(){

    this.Res = this.num1 + this.num2;
  }

}
