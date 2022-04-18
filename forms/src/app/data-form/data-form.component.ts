import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DilligenceService } from './Dilligence.service';
import { Partner } from '../Model/Partner';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


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
    private service: DilligenceService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService

  ) {

  }

partners: Partner[] = [];
partnerget: any = [];

cadSocio(){
  if(this.validarCpf()){
    let partner: Partner = new Partner();
    partner.namePartner = this.formulario.value.namePartner;
    partner.occupationPartner = this.formulario.value.occupationPartner;
    partner.cpfPartner = this.formulario.value.cpfPartner;
    partner.rgPartner = this.formulario.value.rgPartner;
    partner.participationPercentage = this.formulario.value.participationPercentage;
    partner.adressPartner = this.formulario.value.adressPartner;
    partner.cepPartner = this.formulario.value.cepPartner;


    this.partnerget.push(partner);
    this.formulario.controls['partners'].setValue(this.partnerget);
    this.resetform();
  } else {
    alert("CPF já cadastrado!");
  }

}
resetform(){
this.formulario.controls['namePartner'].setValue("");
this.formulario.controls['occupationPartner'].setValue("");
this.formulario.controls['cpfPartner'].setValue("");
this.formulario.controls['rgPartner'].setValue("");
this.formulario.controls['participationPercentage'].setValue("");
this.formulario.controls['adressPartner'].setValue("");
this.formulario.controls['cepPartner'].setValue("");
}

removerSocio(item: any){
this.partnerget = this.partnerget.filter((x: { cpfPartner: any; }) => x.cpfPartner != item.cpfPartner);
this.formulario.controls['partners'].setValue(this.partnerget);
}

validarCpf(){
var item = this.partnerget.filter((x: { cpfPartner: any; }) => x.cpfPartner == this.formulario.value.cpfPartner);
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

    // CADASTRO SÓCIOS
    partners: [[]],
    namePartner: [null],
    occupationPartner: [null],
    cpfPartner: [null],
    rgPartner: [null],
    participationPercentage: [null],
    adressPartner:  [null],
    cepPartner:  [null],


    // DADOS NECESSÁRIOS
    numberEmployees: [null, Validators.required],
    // date: [null, Validators.required],
    corporateName: [null, Validators.required],
    cnpj: [null, Validators.required],
    stateRegistration: [null, Validators.required],
    municipalRegistration: [null, Validators.required],
    primaryPhone: [null, Validators.required],
    secondaryPhone: [null, Validators.required],
    email: [null, Validators.required],
    financialContact: [null, Validators.required],
    financialPhone: [null, Validators.required],
    financialEmail: [null, Validators.required],
    occupation: [null, Validators.required],
    mvContact: [null, Validators.required],
    cep: [null, Validators.required],
    addressNumber: [null, Validators.required],
    complement: [null],
    street: [null, Validators.required],
    district: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    account: [null, Validators.required],
    agency: [null, Validators.required],
    operation: [null, Validators.required],
    bank: [null, Validators.required],
    favored: [null, Validators.required],

    // QUESTIONÁRIO
    technicalAbilityToPerform: [false, Validators.required],
    companyHaveAnIntegrityOrComplianceProgram: [false, Validators.required],
    involvementInInvestigationsFraudCorruption: [false, Validators.required],
    theCompanyBeenPartOfCEISAndCNEP: [false, Validators.required],
    clientsInWhichItProvidedSimilarServices_TextArea5: [null],
    describeTheActivitiesOfYourCompanyCNAEs_TextArea6: [null],
    employmentRelationshipWithMV: [false, Validators.required],
    employmentRelationshipWithMV_TextArea7: [null],
    employeeServicesHaveAnEmploymentRelationshipWithMv: [false, Validators.required],
    employeeServicesHaveAnEmploymentRelationshipWithMv_TextArea8: [null],
    anyPartnerInTheLast3YearsHaveYouBeenPublicServant: [false, Validators.required],
    anyPartnerInTheLast3YearsHaveYouBeenPublicServant_TextArea9: [null],
    anyPartnerOrAdministratorRunningForPublicOffice: [false, Validators.required],
    anyPartnerOrAdministratorRunningForPublicOffice_TextArea10: [null],
    anyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee: [false, Validators.required],
    anyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee_TextArea11: [null],
    theCompanyHasRelationsWithOtherCountries: [false, Validators.required],
    theCompanyHasRelationsWithOtherCountries_TextArea12: [null],
    theCompanyUsesIntermediariesToCloseDeals: [false, Validators.required],
    theCompanyUsesIntermediariesToCloseDeals_TextArea13: [null],
    theCompanyPerformsTreatmentUnderTheTermsOfTheLgpd: [false, Validators.required],
    theCompanyHasALgpdProgram: [false, Validators.required],
    theCompanyHasALgpdProgram_TextArea15: [null],
    theCompanyHasADataProtectionOfficer: [false, Validators.required],
    theCompanyHasADataProtectionOfficer_TextArea16: [null],
    theCompanyIsAbleToMeetTheRightsOfHoldersOfPersonalData: [false, Validators.required],
    employeesReceiveTraining: [false, Validators.required],
    describeTheSecurityTechniquesAdopted: [false, Validators.required],
    describeTheSecurityTechniquesAdopted_TextArea19: [null],
    allTransfersAndSharingOfPersonalDataCarriedOut : [false, Validators.required],


    representativeName: [null, Validators.required],
    rgRepresentative: [null, Validators.required],
    occupationRepresentative: [null, Validators.required],

    })
  }


 postar(): void{
    this.formulario.value.technicalAbilityToPerform = this.formulario.value.technicalAbilityToPerform == "0"? false : true;
    this.formulario.value.companyHaveAnIntegrityOrComplianceProgram = this.formulario.value.companyHaveAnIntegrityOrComplianceProgram == "0"? false : true;
    this.formulario.value.involvementInInvestigationsFraudCorruption = this.formulario.value.involvementInInvestigationsFraudCorruption == "0"? false : true;
    this.formulario.value.theCompanyBeenPartOfCEISAndCNEP = this.formulario.value.theCompanyBeenPartOfCEISAndCNEP == "0"? false : true;
    this.formulario.value.employmentRelationshipWithMV = this.formulario.value.employmentRelationshipWithMV == "0"? false : true;
    this.formulario.value.employeeServicesHaveAnEmploymentRelationshipWithMv = this.formulario.value.employeeServicesHaveAnEmploymentRelationshipWithMv == "0"? false : true;
    this.formulario.value.anyPartnerInTheLast3YearsHaveYouBeenPublicServant = this.formulario.value.anyPartnerInTheLast3YearsHaveYouBeenPublicServant == "0"? false : true;
    this.formulario.value.anyPartnerOrAdministratorRunningForPublicOffice = this.formulario.value.anyPartnerOrAdministratorRunningForPublicOffice == "0"? false : true;
    this.formulario.value.anyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee = this.formulario.value.anyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee == "0"? false : true;
    this.formulario.value.theCompanyHasRelationsWithOtherCountries = this.formulario.value.theCompanyHasRelationsWithOtherCountries == "0"? false : true;
    this.formulario.value.theCompanyUsesIntermediariesToCloseDeals = this.formulario.value.theCompanyUsesIntermediariesToCloseDeals == "0"? false : true;
    this.formulario.value.theCompanyPerformsTreatmentUnderTheTermsOfTheLgpd = this.formulario.value.theCompanyPerformsTreatmentUnderTheTermsOfTheLgpd == "0"? false : true;
    this.formulario.value.theCompanyHasALgpdProgram = this.formulario.value.theCompanyHasALgpdProgram == "0"? false : true;
    this.formulario.value.theCompanyHasADataProtectionOfficer = this.formulario.value.theCompanyHasADataProtectionOfficer == "0"? false : true;
    this.formulario.value.theCompanyIsAbleToMeetTheRightsOfHoldersOfPersonalData = this.formulario.value.theCompanyIsAbleToMeetTheRightsOfHoldersOfPersonalData == "0"? false : true;
    this.formulario.value.employeesReceiveTraining = this.formulario.value.employeesReceiveTraining == "0"? false : true;
    this.formulario.value.describeTheSecurityTechniquesAdopted = this.formulario.value.describeTheSecurityTechniquesAdopted == "0"? false : true;
    this.formulario.value.allTransfersAndSharingOfPersonalDataCarriedOut = this.formulario.value.allTransfersAndSharingOfPersonalDataCarriedOut == "0"? false : true;
    this.service.save(this.formulario?.value).subscribe((resultado) => {
      this.resetar();
      this.toastr.success("Informações salvas com sucesso!", "Sucesso");
    }, error => {
      this.toastr.error("Ocorreu um erro. Por favor, contate o suporte!", "Erro");
      console.log(error);
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
      complement: dados.complemento,
      street: dados.logradouro,
      district: dados.bairro,
      city: dados.localidade,
      state: dados.uf
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

      let cnpj = this.formulario.get("cnpj")?.value;

      if (cnpj != null && cnpj !== '') {

        this.http.get(`https://localhost:44315/api/dilligence/Dilligence/cnpj/${cnpj}`)
        .subscribe((dados: any) => {
          dados.technicalAbilityToPerform = dados.technicalAbilityToPerform ? "1":"0";
          dados.companyHaveAnIntegrityOrComplianceProgram = dados.companyHaveAnIntegrityOrComplianceProgram ? "1":"0";
          dados.involvementInInvestigationsFraudCorruption = dados.involvementInInvestigationsFraudCorruption ? "1":"0";
          dados.theCompanyBeenPartOfCEISAndCNEP = dados.theCompanyBeenPartOfCEISAndCNEP ? "1":"0";
          dados.employmentRelationshipWithMV = dados.employmentRelationshipWithMV ? "1":"0";
          dados.employeeServicesHaveAnEmploymentRelationshipWithMv = dados.employeeServicesHaveAnEmploymentRelationshipWithMv ? "1":"0";
          dados.anyPartnerInTheLast3YearsHaveYouBeenPublicServant = dados.anyPartnerInTheLast3YearsHaveYouBeenPublicServant ? "1":"0";
          dados.anyPartnerOrAdministratorRunningForPublicOffice = dados.anyPartnerOrAdministratorRunningForPublicOffice ? "1":"0";
          dados.anyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee = dados.anyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee ? "1":"0";
          dados.theCompanyHasRelationsWithOtherCountries = dados.theCompanyHasRelationsWithOtherCountries ? "1":"0";
          dados.theCompanyUsesIntermediariesToCloseDeals = dados.theCompanyUsesIntermediariesToCloseDeals ? "1":"0";
          dados.theCompanyPerformsTreatmentUnderTheTermsOfTheLgpd = dados.theCompanyPerformsTreatmentUnderTheTermsOfTheLgpd ? "1":"0";
          dados.theCompanyHasALgpdProgram = dados.theCompanyHasALgpdProgram ? "1":"0";
          dados.theCompanyHasADataProtectionOfficer = dados.theCompanyHasADataProtectionOfficer ? "1":"0";
          dados.theCompanyIsAbleToMeetTheRightsOfHoldersOfPersonalData = dados.theCompanyIsAbleToMeetTheRightsOfHoldersOfPersonalData ? "1":"0";
          dados.employeesReceiveTraining = dados.employeesReceiveTraining ? "1":"0";
          dados.describeTheSecurityTechniquesAdopted = dados.describeTheSecurityTechniquesAdopted ? "1":"0";
          dados.allTransfersAndSharingOfPersonalDataCarriedOut = dados.allTransfersAndSharingOfPersonalDataCarriedOut ? "1":"0";
          this.formulario.patchValue(dados);
          this.partnerget = dados.partners;
        },error => {
          alert("Erro!");
        });
      }
    }

}


