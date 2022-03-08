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

    razSocCad:  [null, Validators.required],
    cnpjCad: [null, Validators.required],
    endCad: [null, Validators.required],
    cepCad: [null, Validators.required],
    cidadeCad: [null, Validators.required],
    estadoCad: [null, Validators.required],
    socioCad: [null, Validators.required],
    cargoCad: [null, Validators.required],
    cpf1Cad: [null, Validators.required],
    rg1Cad: [null, Validators.required],
    cpf2Cad: [null, Validators.required],
    rg2Cad: [null, Validators.required],
    end2Cad: [null, Validators.required],
    cep2Cad: [null, Validators.required],

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
    numero: [0, Validators.required],
    complemento: [null],
    rua: [null, Validators.required],
    bairro: [null, Validators.required],
    cidade: [null, Validators.required],
    estado: [null, Validators.required],
    conta: [null, Validators.required],
    agencia: [null, Validators.required],
    op: [0, Validators.required],
    banco: [null, Validators.required],
    favorecido: [null, Validators.required],
    razSoc3:  [null, Validators.required],

    // QUESTIONÁRIO
    PossCapTecExecCont: [false, Validators.required],
    EmpPossProgInteComp: [false, Validators.required],
    EmpPossHistEnvFrau: [false, Validators.required],
    EmpListCeisCnep: [false, Validators.required],
    textarea5: [null],
    textarea6: [null],
    AlgumSocPossVincMv: [false, Validators.required],
    textarea7: [null],
    FuncPrestServVinMV: [false, Validators.required],
    textarea8: [null],
    AlgumSocFuncPubl: [false, Validators.required],
    textarea9: [null],
    AlgumSocConcCargPub: [false, Validators.required],
    textarea10: [null],
    AlgumSocConjFuncMv: [false, Validators.required],
    textarea11: [null],
    EmpPossRelOutPais: [false, Validators.required],
    textarea12: [null],
    EmpUsaIntFechNeg: [false, Validators.required],
    textarea13: [null],
    EmpRealizTreinLgpdMv: [false, Validators.required],
    EmpPossCertLgpd: [false, Validators.required],
    textarea15: [null],
    EmpPossEncarProtDad: [false, Validators.required],
    textarea16: [null],
    EmpEnconAptaAvalDanPess: [false, Validators.required],
    OsColabTreiCapacLgpd: [false, Validators.required],
    DescTecSegAdotPreserLgpd: [false, Validators.required],
    textarea19: [null],
    TransfeCompartLgpdAcordLei : [false, Validators.required],


    data2: [null, Validators.required],
    nomeLeg: [null, Validators.required],
    rgRep: [null, Validators.required],
    cargoRep: [null, Validators.required],

    })
  }


 postar(): void{
    this.formulario.value.PossCapTecExecCont = this.formulario.value.PossCapTecExecCont == "0"? false : true;
    this.formulario.value.EmpPossProgInteComp = this.formulario.value.EmpPossProgInteComp == "0"? false : true;
    this.formulario.value.EmpPossHistEnvFrau = this.formulario.value.EmpPossHistEnvFrau == "0"? false : true;
    this.formulario.value.EmpListCeisCnep = this.formulario.value.EmpListCeisCnep == "0"? false : true;
    this.formulario.value.AlgumSocPossVincMv = this.formulario.value.AlgumSocPossVincMv == "0"? false : true;
    this.formulario.value.FuncPrestServVinMV = this.formulario.value.FuncPrestServVinMV == "0"? false : true;
    this.formulario.value.AlgumSocFuncPubl = this.formulario.value.AlgumSocFuncPubl == "0"? false : true;
    this.formulario.value.AlgumSocConcCargPub = this.formulario.value.AlgumSocConcCargPub == "0"? false : true;
    this.formulario.value.AlgumSocConjFuncMv = this.formulario.value.AlgumSocConjFuncMv == "0"? false : true;
    this.formulario.value.EmpPossRelOutPais = this.formulario.value.EmpPossRelOutPais == "0"? false : true;
    this.formulario.value.EmpUsaIntFechNeg = this.formulario.value.EmpUsaIntFechNeg == "0"? false : true;
    this.formulario.value.EmpRealizTreinLgpdMv = this.formulario.value.EmpRealizTreinLgpdMv == "0"? false : true;
    this.formulario.value.EmpPossCertLgpd = this.formulario.value.EmpPossCertLgpd == "0"? false : true;
    this.formulario.value.EmpPossEncarProtDad = this.formulario.value.EmpPossEncarProtDad == "0"? false : true;
    this.formulario.value.EmpEnconAptaAvalDanPess = this.formulario.value.EmpEnconAptaAvalDanPess == "0"? false : true;
    this.formulario.value.OsColabTreiCapacLgpd = this.formulario.value.OsColabTreiCapacLgpd == "0"? false : true;
    this.formulario.value.DescTecSegAdotPreserLgpd = this.formulario.value.DescTecSegAdotPreserLgpd == "0"? false : true;
    this.formulario.value.TransfeCompartLgpdAcordLei = this.formulario.value.TransfeCompartLgpdAcordLei == "0"? false : true;
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

