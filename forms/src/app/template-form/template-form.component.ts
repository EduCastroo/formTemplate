import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-formulario',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {



  onSubmit(f: NgForm){
    console.log(f)

  this.http.post('enderecoServer/formUsuario', JSON.stringify(f.value));

  }


  constructor(private http: HttpClient) { }

  consultaCEP(cep: any, f: any) {

    cep = cep.replace (/\D/g, '');

    if (cep != null && cep !== '') {
      let validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)){

        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .pipe(map((dados: any) => dados))
          .subscribe(dados => this.populaDadosForm(dados, f));
      }
    }
}

populaDadosForm(dados: any, formulario: any){

formulario.form.patchValue({
    endereco: {
    cep: dados.cep,
    complemento: dados.complemento,
    rua: dados.logradouro,
    bairro: dados.bairro,
    cidade: dados.localidade,
    estado: dados.uf
  }
});


}


  ngOnInit() {
  }



}
