import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage  {

  num1: any;
 array = [];
  list: any;
  constructor() { }

 
  calcular(){
     // eslint-disable-next-line radix
     var numero = parseInt(this.num1);
     this.array = [];
   // eslint-disable-next-line eqeqeq
    for (let i = 1; i <= 13; i++) {
      this.list = `${numero} x ${i} = ${numero*i}`;
      this.array.push({value: this.list});
   }
   }
  

}
