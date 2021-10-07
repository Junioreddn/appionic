import { Component, OnInit } from '@angular/core';
import { NumeroserviceService } from '../numeroservice.service';

@Component({
  selector: 'app-numeroletra',
  templateUrl: './numeroletra.page.html',
  styleUrls: ['./numeroletra.page.scss'],
})
export class NumeroletraPage  {

  num1:string;
  Result:any;
  constructor(private Converter:NumeroserviceService) { }

  Calcular(){

    this.Result = this.Converter.numeroAconstras(this.num1);
    

  }

}
