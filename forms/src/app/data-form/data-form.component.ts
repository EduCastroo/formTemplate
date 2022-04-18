import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DilligenceService } from './Dilligence.service';
import { Partner } from '../Model/Partner';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})


export class DataFormComponent implements OnInit {


  formulario!: FormGroup;


  box: boolean = false
  box7: boolean = false
  box8: boolean = false
  box9: boolean = false
  box10: boolean = false
  box11: boolean = false
  box12: boolean = false
  box13: boolean = false
  box15: boolean = false
  box16: boolean = false
  box19: boolean = false

  get f(): any{
    return this.formulario.controls;
  }

  submit(){
    console.log(this.formulario.value);
  }

  changeQuiz(e: any) {
    // console.log(e.target.value);
    if (e.target.value == 1) {
      this.box = true
    } else {
      this.box = false
    }
  }

  changeQuiz7(e: any) {
    // console.log(e.target.value);
    if (e.target.value == 1) {
      this.box7 = true
    } else {
      this.box7 = false
    }
  }

  changeQuiz8(e: any) {
    // console.log(e.target.value);
    if (e.target.value == 1) {
      this.box8 = true
    } else {
      this.box8 = false
    }
  }

  changeQuiz9(e: any) {
    // console.log(e.target.value);
    if (e.target.value == 1) {
      this.box9 = true
    } else {
      this.box9 = false
    }
  }

  changeQuiz10(e: any) {
    // console.log(e.target.value);
    if (e.target.value == 1) {
      this.box10 = true
    } else {
      this.box10 = false
    }
  }

  changeQuiz11(e: any) {
    // console.log(e.target.value);
    if (e.target.value == 1) {
      this.box11 = true
    } else {
      this.box11 = false
    }
  }

  changeQuiz12(e: any) {
    // console.log(e.target.value);
    if (e.target.value == 1) {
      this.box12 = true
    } else {
      this.box12 = false
    }
  }

  changeQuiz13(e: any) {
    // console.log(e.target.value);
    if (e.target.value == 1) {
      this.box13 = true
    } else {
      this.box13 = false
    }
  }


  changeQuiz15(e: any) {
    // console.log(e.target.value);
    if (e.target.value == 1) {
      this.box15 = true
    } else {
      this.box15 = false
    }
  }

  changeQuiz16(e: any) {
    // console.log(e.target.value);
    if (e.target.value == 1) {
      this.box16 = true
    } else {
      this.box16 = false
    }
  }

  changeQuiz19(e: any) {
    // console.log(e.target.value);
    if (e.target.value == 1) {
      this.box19 = true
    } else {
      this.box19 = false
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private service: DilligenceService
  ) {

  }

partners: Partner[] = [];
partnerget: any = [];

cadSocio(){
  if(this.validarCpf()){
    let partner: Partner = new Partner();
    partner.NamePartner = this.formulario.value.NamePartner;
    partner.OccupationPartner = this.formulario.value.OccupationPartner;
    partner.CpfPartner = this.formulario.value.CpfPartner;
    partner.RgPartner = this.formulario.value.RgPartner;
    partner.ParticipationPercentage = this.formulario.value.ParticipationPercentage;
    partner.AdressPartner = this.formulario.value.AdressPartner;
    partner.CepPartner = this.formulario.value.CepPartner;


    this.partnerget.push(partner);
    this.formulario.controls['Partners'].setValue(this.partnerget);
    this.resetform();
  } else {
    alert("CPF já cadastrado!");
  }

}
resetform(){
this.formulario.controls['NamePartner'].setValue("");
this.formulario.controls['OccupationPartner'].setValue("");
this.formulario.controls['CpfPartner'].setValue("");
this.formulario.controls['RgPartner'].setValue("");
this.formulario.controls['ParticipationPercentage'].setValue("");
this.formulario.controls['AdressPartner'].setValue("");
this.formulario.controls['CepPartner'].setValue("");
}

removerSocio(item: any){
this.partnerget = this.partnerget.filter((x: { CpfPartner: any; }) => x.CpfPartner != item.CpfPartner);
this.formulario.controls['partners'].setValue(this.partnerget);
}

validarCpf(){
var item = this.partnerget.filter((x: { CpfPartner: any; }) => x.CpfPartner == this.formulario.value.CpfPartner);
if (item.length > 0)
  return false;
else
  return true
}

  ngOnInit() {
    this.validation();
  }

  public validation(): void {
    this.formulario = this.formBuilder.group({

    // CADASTRO
    Partners: [[]],
    NamePartner: [null],
    OccupationPartner: [null],
    CpfPartner: [null],
    RgPartner: [null],
    ParticipationPercentage: [null],
    AdressPartner:  [null],
    CepPartner:  [null],



    // DADOS NECESSÁRIOS
    NumberEmployees: [null, Validators.required],
    Date: [null, Validators.required],
    CorporateName: [null, Validators.required],
    Cnpj: [null, Validators.required],
    StateRegistration: [null, Validators.required],
    MunicipalRegistration: [null, Validators.required],
    PrimaryPhone: [null, Validators.required],
    SecondaryPhone: [null, Validators.required],
    Email: [null, Validators.required],
    FinancialContact: [null, Validators.required],
    FinancialPhone: [null, Validators.required],
    FinancialEmail: [null, Validators.required],
    Occupation: [null, Validators.required],
    MvContact: [null, Validators.required],
    cep: [null, Validators.required],
    AddressNumber: [null, Validators.required],
    Complement: [null],
    Street: [null, Validators.required],
    District: [null, Validators.required],
    City: [null, Validators.required],
    State: [null, Validators.required],
    Account: [null, Validators.required],
    Agency: [null, Validators.required],
    Operation: [null, Validators.required],
    Bank: [null, Validators.required],
    Favored: [null, Validators.required],

    // QUESTIONÁRIO
    TechnicalAbilityToPerform: [false, Validators.required],
    CompanyHaveAnIntegrityOrComplianceProgram: [false, Validators.required],
    InvolvementInInvestigationsFraudCorruption: [false, Validators.required],
    TheCompanyBeenPartOfCEISAndCNEP: [false, Validators.required],
    ClientsInWhichItProvidedSimilarServices_TextArea5: [null],
    DescribeTheActivitiesOfYourCompanyCNAEs_TextArea6: [null],
    EmploymentRelationshipWithMV: [false, Validators.required],
    EmploymentRelationshipWithMV_TextArea7: [null],
    EmployeeServicesHaveAnEmploymentRelationshipWithMv: [false, Validators.required],
    EmployeeServicesHaveAnEmploymentRelationshipWithMv_TextArea8: [null],
    AnyPartnerInTheLast3YearsHaveYouBeenPublicServant: [false, Validators.required],
    AnyPartnerInTheLast3YearsHaveYouBeenPublicServant_TextArea9: [null],
    AnyPartnerOrAdministratorRunningForPublicOffice: [false, Validators.required],
    AnyPartnerOrAdministratorRunningForPublicOffice_TextArea10: [null],
    AnyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee: [false, Validators.required],
    AnyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee_TextArea11: [null],
    TheCompanyHasRelationsWithOtherCountries: [false, Validators.required],
    TheCompanyHasRelationsWithOtherCountries_TextArea12: [null],
    TheCompanyUsesIntermediariesToCloseDeals: [false, Validators.required],
    TheCompanyUsesIntermediariesToCloseDeals_TextArea13: [null],
    TheCompanyPerformsTreatmentUnderTheTermsOfTheLgpd: [false, Validators.required],
    TheCompanyHasALgpdProgram: [false, Validators.required],
    TheCompanyHasALgpdProgram_TextArea15: [null],
    TheCompanyHasADataProtectionOfficer: [false, Validators.required],
    TheCompanyHasADataProtectionOfficer_TextArea16: [null],
    TheCompanyIsAbleToMeetTheRightsOfHoldersOfPersonalData: [false, Validators.required],
    EmployeesReceiveTraining: [false, Validators.required],
    DescribeTheSecurityTechniquesAdopted: [false, Validators.required],
    DescribeTheSecurityTechniquesAdopted_TextArea19: [null],
    AllTransfersAndSharingOfPersonalDataCarriedOut : [false, Validators.required],


    RepresentativeName: [null, Validators.required],
    RgRepresentative: [null, Validators.required],
    OccupationRepresentative: [null, Validators.required],

    })
  }


 postar(): void{
    this.formulario.value.TechnicalAbilityToPerform = this.formulario.value.TechnicalAbilityToPerform == "0"? false : true;
    this.formulario.value.CompanyHaveAnIntegrityOrComplianceProgram = this.formulario.value.CompanyHaveAnIntegrityOrComplianceProgram == "0"? false : true;
    this.formulario.value.InvolvementInInvestigationsFraudCorruption = this.formulario.value.InvolvementInInvestigationsFraudCorruption == "0"? false : true;
    this.formulario.value.TheCompanyBeenPartOfCEISAndCNEP = this.formulario.value.TheCompanyBeenPartOfCEISAndCNEP == "0"? false : true;
    this.formulario.value.EmploymentRelationshipWithMV = this.formulario.value.EmploymentRelationshipWithMV == "0"? false : true;
    this.formulario.value.EmployeeServicesHaveAnEmploymentRelationshipWithMv = this.formulario.value.EmployeeServicesHaveAnEmploymentRelationshipWithMv == "0"? false : true;
    this.formulario.value.AnyPartnerInTheLast3YearsHaveYouBeenPublicServant = this.formulario.value.AnyPartnerInTheLast3YearsHaveYouBeenPublicServant == "0"? false : true;
    this.formulario.value.AnyPartnerOrAdministratorRunningForPublicOffice = this.formulario.value.AnyPartnerOrAdministratorRunningForPublicOffice == "0"? false : true;
    this.formulario.value.AnyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee = this.formulario.value.AnyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee == "0"? false : true;
    this.formulario.value.TheCompanyHasRelationsWithOtherCountries = this.formulario.value.TheCompanyHasRelationsWithOtherCountries == "0"? false : true;
    this.formulario.value.TheCompanyUsesIntermediariesToCloseDeals = this.formulario.value.TheCompanyUsesIntermediariesToCloseDeals == "0"? false : true;
    this.formulario.value.TheCompanyPerformsTreatmentUnderTheTermsOfTheLgpd = this.formulario.value.TheCompanyPerformsTreatmentUnderTheTermsOfTheLgpd == "0"? false : true;
    this.formulario.value.TheCompanyHasALgpdProgram = this.formulario.value.TheCompanyHasALgpdProgram == "0"? false : true;
    this.formulario.value.TheCompanyHasADataProtectionOfficer = this.formulario.value.TheCompanyHasADataProtectionOfficer == "0"? false : true;
    this.formulario.value.TheCompanyIsAbleToMeetTheRightsOfHoldersOfPersonalData = this.formulario.value.TheCompanyIsAbleToMeetTheRightsOfHoldersOfPersonalData == "0"? false : true;
    this.formulario.value.EmployeesReceiveTraining = this.formulario.value.EmployeesReceiveTraining == "0"? false : true;
    this.formulario.value.DescribeTheSecurityTechniquesAdopted = this.formulario.value.DescribeTheSecurityTechniquesAdopted == "0"? false : true;
    this.formulario.value.AllTransfersAndSharingOfPersonalDataCarriedOut = this.formulario.value.AllTransfersAndSharingOfPersonalDataCarriedOut == "0"? false : true;
    this.service.save(this.formulario?.value).subscribe((resultado) => {
      this.resetar();
    });

  }

public resetar(): void{
  this.formulario.reset();
  this.partnerget = [];
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
      Complement: dados.complemento,
      Street: dados.logradouro,
      District: dados.bairro,
      City: dados.localidade,
      State: dados.uf
  });


  }

  downloadPDF(id: number): any {
    return this.http.post(`https://localhost:44366/api/Dilligence/pdf?Id=1`, {}, { responseType: 'blob' }).subscribe(
      (response: any) => {
        var blob = new Blob([response], { type: 'application/pdf' });
        let fileName = "";
        fileName = `Teste.pdf`;
        saveAs(blob, fileName);
      },
      (error: any) => {
        console.log(error);
      }
    );
    }

    consultaCNPJ() {

      let cnpj = this.formulario.get("Cnpj")?.value;

      if (cnpj != null && cnpj !== '') {

        this.http.get(`https://localhost:44315/api/dilligence/Dilligence/cnpj/${cnpj}`)
        .subscribe(dados => {
          console.log(dados);
          this.formulario.setValue(dados);
        },error => {
          alert("Erro!");
        });
      }
    }

}


