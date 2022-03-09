import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from './Usuario.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;


  caixa: boolean = false
  caixa7: boolean = false
  caixa8: boolean = false
  caixa9: boolean = false
  caixa10: boolean = false
  caixa11: boolean = false
  caixa12: boolean = false
  caixa13: boolean = false
  caixa15: boolean = false
  caixa16: boolean = false
  caixa19: boolean = false

  get f(): any{
    return this.formulario.controls;
  }

  submit(){
    console.log(this.formulario.value);
  }

  changeQuiz(e: any) {
    console.log(e.target.value);
    if (e.target.value == 1) {
      this.caixa = true
    } else {
      this.caixa = false
    }
  }

  changeQuiz7(e: any) {
    console.log(e.target.value);
    if (e.target.value == 1) {
      this.caixa7 = true
    } else {
      this.caixa7 = false
    }
  }

  changeQuiz8(e: any) {
    console.log(e.target.value);
    if (e.target.value == 1) {
      this.caixa8 = true
    } else {
      this.caixa8 = false
    }
  }

  changeQuiz9(e: any) {
    console.log(e.target.value);
    if (e.target.value == 1) {
      this.caixa9 = true
    } else {
      this.caixa9 = false
    }
  }

  changeQuiz10(e: any) {
    console.log(e.target.value);
    if (e.target.value == 1) {
      this.caixa10 = true
    } else {
      this.caixa10 = false
    }
  }

  changeQuiz11(e: any) {
    console.log(e.target.value);
    if (e.target.value == 1) {
      this.caixa11 = true
    } else {
      this.caixa11 = false
    }
  }

  changeQuiz12(e: any) {
    console.log(e.target.value);
    if (e.target.value == 1) {
      this.caixa12 = true
    } else {
      this.caixa12 = false
    }
  }

  changeQuiz13(e: any) {
    console.log(e.target.value);
    if (e.target.value == 1) {
      this.caixa13 = true
    } else {
      this.caixa13 = false
    }
  }


  changeQuiz15(e: any) {
    console.log(e.target.value);
    if (e.target.value == 1) {
      this.caixa15 = true
    } else {
      this.caixa15 = false
    }
  }

  changeQuiz16(e: any) {
    console.log(e.target.value);
    if (e.target.value == 1) {
      this.caixa16 = true
    } else {
      this.caixa16 = false
    }
  }

  changeQuiz19(e: any) {
    console.log(e.target.value);
    if (e.target.value == 1) {
      this.caixa19 = true
    } else {
      this.caixa19 = false
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private service: UsuarioService
  ) {}



  ngOnInit() {
    this.validation();
  }

  public validation(): void {
    this.formulario = this.formBuilder.group({

    // CADASTRO


    socioCad: [null, Validators.required],
    cargoCad: [null, Validators.required],
    cpf1Cad: [null, Validators.required],
    rg1Cad: [null, Validators.required],
    cpf2Cad: [null, Validators.required],
    rg2Cad: [null, Validators.required],
    socio2Cad: [null, Validators.required],
    cargo2Cad: [null, Validators.required],
    end2Cad: [null, Validators.required],
    cep2Cad: [null, Validators.required],
    numFunc: [null, Validators.required],
    percentPart1: [null, Validators.required],
    percentPart2: [null, Validators.required],

    // DADOS NECESSÁRIOS
    data: [null, Validators.required],
    razSoc: [null, Validators.required],
    cnpj: [null, Validators.required],
    inscEst: [null, Validators.required],
    inscMun: [null, Validators.required],
    fone: [null, Validators.required],
    fone2: [null, Validators.required],
    email: [null, Validators.required],
    nomeFin: [null, Validators.required],
    fone3: [null, Validators.required],
    emailFin: [null, Validators.required],
    cargo: [null, Validators.required],
    contMv: [null, Validators.required],
    cep: [null, Validators.required],
    numero: [null, Validators.required],
    complemento: [null],
    rua: [null, Validators.required],
    bairro: [null, Validators.required],
    cidade: [null, Validators.required],
    estado: [null, Validators.required],
    conta: [null, Validators.required],
    agencia: [null, Validators.required],
    op: [null, Validators.required],
    banco: [null, Validators.required],
    favorecido: [null, Validators.required],
    // razSoc3:  [null, Validators.required],

    // QUESTIONÁRIO
    Quest1: [false, Validators.required],
    Quest2: [false, Validators.required],
    Quest3: [false, Validators.required],
    Quest4: [false, Validators.required],
    textarea5: [null],
    textarea6: [null],
    Quest7: [false, Validators.required],
    textarea7: [null],
    Quest8: [false, Validators.required],
    textarea8: [null],
    Quest9: [false, Validators.required],
    textarea9: [null],
    Quest10: [false, Validators.required],
    textarea10: [null],
    Quest11: [false, Validators.required],
    textarea11: [null],
    Quest12: [false, Validators.required],
    textarea12: [null],
    Quest13: [false, Validators.required],
    textarea13: [null],
    Quest14: [false, Validators.required],
    Quest15: [false, Validators.required],
    textarea15: [null],
    Quest16: [false, Validators.required],
    textarea16: [null],
    Quest17: [false, Validators.required],
    Quest18: [false, Validators.required],
    Quest19: [false, Validators.required],
    textarea19: [null],
    Quest20 : [false, Validators.required],


    data2: [null, Validators.required],
    nomeLeg: [null, Validators.required],
    rgRep: [null, Validators.required],
    cargoRep: [null, Validators.required],

    })
  }


 postar(): void{
    this.formulario.value.Quest1 = this.formulario.value.Quest1 == "0"? false : true;
    this.formulario.value.Quest2 = this.formulario.value.Quest2 == "0"? false : true;
    this.formulario.value.Quest3 = this.formulario.value.Quest3 == "0"? false : true;
    this.formulario.value.Quest4 = this.formulario.value.Quest4 == "0"? false : true;
    this.formulario.value.Quest7 = this.formulario.value.Quest7 == "0"? false : true;
    this.formulario.value.Quest8 = this.formulario.value.Quest8 == "0"? false : true;
    this.formulario.value.Quest9 = this.formulario.value.Quest9 == "0"? false : true;
    this.formulario.value.Quest10 = this.formulario.value.Quest10 == "0"? false : true;
    this.formulario.value.Quest11 = this.formulario.value.Quest11 == "0"? false : true;
    this.formulario.value.Quest12 = this.formulario.value.Quest12 == "0"? false : true;
    this.formulario.value.Quest13 = this.formulario.value.Quest13 == "0"? false : true;
    this.formulario.value.Quest14 = this.formulario.value.Quest14 == "0"? false : true;
    this.formulario.value.Quest15 = this.formulario.value.Quest15 == "0"? false : true;
    this.formulario.value.Quest16 = this.formulario.value.Quest16 == "0"? false : true;
    this.formulario.value.Quest17 = this.formulario.value.Quest17 == "0"? false : true;
    this.formulario.value.Quest18 = this.formulario.value.Quest18 == "0"? false : true;
    this.formulario.value.Quest19 = this.formulario.value.Quest19 == "0"? false : true;
    this.formulario.value.Quest20 = this.formulario.value.Quest20 == "0"? false : true;
    // console.log(this.formulario.value.radio1)
    this.service.save(this.formulario?.value).subscribe((resultado) => {console.log("cadastrado com sucesso");

  });

  }

public resetar(): void{
  this.formulario.reset();
}

consultaCEP() {

  let cep = this.formulario.get("cep")?.value;

  cep = cep.replace (/\D/g, '');

  if (cep != null && cep !== '') {
    let validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)){

      this.http.get(`//viacep.com.br/ws/${cep}/json/`)
        .pipe(map((dados: any) => dados))
        .subscribe(dados => this.populaDadosForm(dados));
    }
  }
}

populaDadosForm(dados: any){

  this.formulario.patchValue({
      cep: dados.cep,
      complemento: dados.complemento,
      rua: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
  });


  }



}

