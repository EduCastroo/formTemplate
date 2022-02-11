// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private http: HttpClient
  ) {}



  ngOnInit() {
    this.validation();
  }

  public validation(): void {
    this.formulario = this.formBuilder.group({

    data: [null, Validators.required],
    razSoc: [null, Validators.required]

    })
  }

  postar(){
    if (!this.formulario.valid) {
      console.log("Formulário inválido");
      return;
    }
    console.log("Formulário válido", this.formulario.value);
  }
  // public validation(): void {
  //   this.formulario = this.formBuilder.group({
  //     data: [null, Validators.required],
  //     razSoc: [null, Validators.required],
  //     cnpj: [null,[Validators.required, Validators.maxLength(14)]],
  //     inscEst: [null, Validators.required],
  //     inscMun: [null, Validators.required],
  //     fone: [null, [Validators.required, Validators.maxLength(11)]],
  //     fone2: [null, Validators.maxLength(11)],
  //     email: [null, [Validators.required, Validators.email]],
  //     nomeFin: [null, Validators.required],
  //     fone3: [null, Validators.maxLength(11)],
  //     emailFin: [null, [Validators.required, Validators.email]],
  //     cargo: [null, Validators.required],
  //     contMv: [null, Validators.required],
  //     cep: [null,[Validators.required, Validators.max(8)]],
  //     numero: [null, Validators.required],
  //     complemento: [null],
  //     rua: [null, Validators.required],
  //     bairro: [null, Validators.required],
  //     cidade: [null, Validators.required],
  //     estado: [null, Validators.required],
  //     conta: [null, Validators.required],
  //     agencia: [null, Validators.required],
  //     op: [null, Validators.required],
  //     banco: [null, Validators.required],
  //     favorecido: [null, Validators.required]

  //   })
  // }



//   onSubmit(){
//     console.log(this.formulario.value);

//   this.http.post('https:httpbin.org/post', JSON.stringify(this.formulario.value))
//   .subscribe((dados:any) => this.formulario = dados);

//     this.resetar();
//   }

// resetar(){
//   this.formulario.reset();
// }



}
