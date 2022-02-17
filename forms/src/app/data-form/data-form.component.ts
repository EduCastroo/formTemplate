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

    // QUESTIONÁRIO
    radio7: [null, Validators.required],
    textarea7: [null]
    // radio7: [null, Validators.required],
    // radio8: [null, Validators.required],
    // radio9: [null, Validators.required],
    // radio10: [null, Validators.required],
    // radio11: [null, Validators.required],
    // radio12: [null, Validators.required],
    // radio13: [null, Validators.required],
    // radio15: [null, Validators.required],
    // radio16: [null, Validators.required],
    // radio19: [null, Validators.required],

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

isVisible: boolean = true;

}
