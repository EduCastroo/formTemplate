import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

@Input() form: any;

  constructor() { }

  ngOnInit() {
  }

  // verificaValidTouched(campo){
  // return !campo.valid && campo.touched
  // }

  // aplicaCssErro(campo){
  //   return{
  //     'has-error': this.verificaValidTouched(campo),
  //     'has-feedback': this.verificaValidTouched(campo)
  //   }
  // }

}
