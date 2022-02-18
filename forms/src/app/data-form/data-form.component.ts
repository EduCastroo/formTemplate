import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  // isVisible: any;
  // isSelected: boolean = false
  // opcaoselec: boolean = false;
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




  onSubmit(f: any){
    console.log(f)

  this.http.post('enderecoServer/formUsuario', JSON.stringify(f.value));

  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}



  ngOnInit() {
    this.validation();
  }

  public validation(): void {
    this.formulario = this.formBuilder.group({

    // CADASTRO
    razSocCad:  [null, Validators.required],
    cnpjCad: [null,[Validators.required, Validators.maxLength(18),]],
    endCad: [null, Validators.required],
    cepCad: [null,[Validators.required, Validators.maxLength(9)]],
    cidadeCad: [null, Validators.required],
    estadoCad: [null, Validators.required],
    socioCad: [null, Validators.required],
    cargoCad: [null, Validators.required],
    cpf1Cad: [null, Validators.required],
    rg1Cad: [null, Validators.required],
    cpf2Cad: [null, Validators.required],
    rg2Cad: [null, Validators.required],
    end2Cad: [null, Validators.required],
    cep2Cad: [null,[Validators.required, Validators.maxLength(9)]],

    // DADOS NECESSÁRIOS
    data: [null, Validators.required],
    razSoc: [null, Validators.required],
    cnpj: [null,[Validators.required, Validators.maxLength(18),]],
    inscEst: [null, Validators.required],
    inscMun: [null, Validators.required],
    fone: [null, [Validators.required , Validators.maxLength(18)]],
    fone2: [null, [Validators.required, Validators.maxLength(11)]],
    email: [null, [Validators.required, Validators.email]],
    nomeFin: [null, Validators.required],
    fone3: [null, [Validators.required, Validators.maxLength(11)]],
    emailFin: [null, [Validators.required, Validators.email]],
    cargo: [null, Validators.required],
    contMv: [null, Validators.required],
    cep: [null,[Validators.required, Validators.maxLength(9)]],
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
    razSoc3:  [null, Validators.required],

    // QUESTIONÁRIO
    radio1: [null, Validators.required],
    radio2: [null, Validators.required],
    radio3: [null, Validators.required],
    radio4: [null, Validators.required],
    textarea5: [null],
    textarea6: [null],
    radio7: [null, Validators.required],
    textarea7: [null],
    radio8: [null, Validators.required],
    textarea8: [null],
    radio9: [null, Validators.required],
    textarea9: [null],
    radio10: [null, Validators.required],
    textarea10: [null],
    radio11: [null, Validators.required],
    textarea11: [null],
    radio12: [null, Validators.required],
    textarea12: [null],
    radio13: [null, Validators.required],
    textarea13: [null],
    radio14: [null, Validators.required],
    radio15: [null, Validators.required],
    textarea15: [null],
    radio16: [null, Validators.required],
    textarea16: [null],
    radio17: [null, Validators.required],
    radio18: [null, Validators.required],
    radio19: [null, Validators.required],
    textarea19: [null],
    radio20: [null, Validators.required],


    data2: [null, Validators.required],
    nomeLeg: [null, Validators.required],
    rgRep: [null, Validators.required],
    cargoRep: [null, Validators.required],
    })
  }

  postar(){
    if (!this.formulario.valid) {
      console.log("Formulário inválido");
      return;
    }
    console.log("Formulário válido", this.formulario.value);
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
