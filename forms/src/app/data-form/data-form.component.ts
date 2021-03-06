import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DilligenceService } from '../services/Dilligence.service';
import { Partner } from '../Model/Partner';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Attachments } from '../Model/Attachments';
import { Guid } from '../helpers/Guid';
import { AzureBlobStorageService } from 'src/app/services/azure-blob-storage.service.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PartnerService } from '../services/Partner.service';
import { AttachmentService } from '../services/Attachment.service';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})


export class DataFormComponent implements OnInit {

  @ViewChild('anexo')
  attachmentVariable: ElementRef;
  modalRef?: BsModalRef;
  formulario!: FormGroup;


  box: boolean = true
  box7: boolean = true
  box8: boolean = true
  box9: boolean = true
  box10: boolean = true
  box11: boolean = true
  box12: boolean = true
  box13: boolean = true
  box15: boolean = true
  box16: boolean = true
  box19: boolean = true

  get f(): any{
    return this.formulario.controls;
  }

  submit(){
    console.log(this.formulario.value);
  }


  changeQuiz(e: any) {
    if (e.target.value == 1) {
      this.box = true
    } else {
      this.box = false
    }
  }

  changeQuiz7(e: any) {
    if (e.target.value == 1) {
      this.box7 = true
    } else {
      this.formulario.controls['employmentRelationshipWithMV_TextArea7'].setValue("");
      this.box7 = false
    }
  }


  changeQuiz8(e: any) {
    if (e.target.value == 1) {
      this.box8 = true
    } else {
      this.formulario.controls['employeeServicesHaveAnEmploymentRelationshipWithMv_TextArea8'].setValue("");
      this.box8 = false
    }
  }

  changeQuiz9(e: any) {
    if (e.target.value == 1) {
      this.box9 = true
    } else {
      this.formulario.controls['anyPartnerInTheLast3YearsHaveYouBeenPublicServant_TextArea9'].setValue("");
      this.box9 = false
    }
  }

  changeQuiz10(e: any) {
    if (e.target.value == 1) {
      this.box10 = true
    } else {
      this.formulario.controls['anyPartnerOrAdministratorRunningForPublicOffice_TextArea10'].setValue("");
      this.box10 = false
    }
  }

  changeQuiz11(e: any) {
    if (e.target.value == 1) {
      this.box11 = true
    } else {
      this.formulario.controls['anyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee_TextArea11'].setValue("");
      this.box11 = false
    }
  }

  changeQuiz12(e: any) {
    if (e.target.value == 1) {
      this.box12 = true
    } else {
      this.formulario.controls['theCompanyHasRelationsWithOtherCountries_TextArea12'].setValue("");
      this.box12 = false
    }
  }

  changeQuiz13(e: any) {
    if (e.target.value == 1) {
      this.box13 = true
    } else {
      this.formulario.controls['theCompanyUsesIntermediariesToCloseDeals_TextArea13'].setValue("");
      this.box13 = false
    }
  }


  changeQuiz15(e: any) {
    if (e.target.value == 1) {
      this.box15 = true
    } else {
      this.formulario.controls['theCompanyHasALgpdProgram_TextArea15'].setValue("");
      this.box15 = false
    }
  }

  changeQuiz16(e: any) {
    if (e.target.value == 1) {
      this.box16 = true
    } else {
      this.formulario.controls['theCompanyHasADataProtectionOfficer_TextArea16'].setValue("");
      this.box16 = false
    }
  }

  changeQuiz19(e: any) {
    if (e.target.value == 1) {
      this.box19 = true
    } else {
      this.formulario.controls['describeTheSecurityTechniquesAdopted_TextArea19'].setValue("");
      this.box19 = false
    }
  }


  constructor(
    private formBuilder: FormBuilder,
    private service: DilligenceService,
    private partnerService: PartnerService,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private blobService: AzureBlobStorageService,
    private AttachmentService: AttachmentService)
    {}

partners: Partner[] = [];
attachments: Attachments[] = [];
partnerget: any = [];
selectedFiles: any[] = [];
selectedAttachments: Attachments[] = [];
attachmentget: any = [];
deleteItem: any;
deleteAttachment: any;

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
    this.toastr.error("CPF j?? cadastrado", "Erro");
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



  ngOnInit() {
    this.validation();
  }

  public validation(): void {
    this.formulario = this.formBuilder.group({

    // CADASTRO S??CIOS
    partners: [[]],
    attachments: [[]],
    namePartner: [null],
    occupationPartner: [null],
    cpfPartner: [null],
    rgPartner: [null],
    participationPercentage: [null],
    adressPartner:  [null],
    cepPartner:  [null],


    // DADOS NECESS??RIOS
    id: [0],
    numberEmployees: [null, Validators.required],
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

    // QUESTION??RIO
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
    this.formulario.patchValue(
      {
        attachments : this.selectedAttachments,
        technicalAbilityToPerform : this.formulario.value.technicalAbilityToPerform == "0"? false : true,
        companyHaveAnIntegrityOrComplianceProgram : this.formulario.value.companyHaveAnIntegrityOrComplianceProgram == "0"? false : true,
        involvementInInvestigationsFraudCorruption : this.formulario.value.involvementInInvestigationsFraudCorruption == "0"? false : true,
        theCompanyBeenPartOfCEISAndCNEP : this.formulario.value.theCompanyBeenPartOfCEISAndCNEP == "0"? false : true,
        employmentRelationshipWithMV : this.formulario.value.employmentRelationshipWithMV == "0"? false : true,
        employeeServicesHaveAnEmploymentRelationshipWithMv : this.formulario.value.employeeServicesHaveAnEmploymentRelationshipWithMv == "0"? false : true,
        anyPartnerInTheLast3YearsHaveYouBeenPublicServant : this.formulario.value.anyPartnerInTheLast3YearsHaveYouBeenPublicServant == "0"? false : true,
        anyPartnerOrAdministratorRunningForPublicOffice : this.formulario.value.anyPartnerOrAdministratorRunningForPublicOffice == "0"? false : true,
        anyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee : this.formulario.value.anyPartnerIsSpouseOrLivesInAStableUnionFromSomeMvEmployee == "0"? false : true,
        theCompanyHasRelationsWithOtherCountries : this.formulario.value.theCompanyHasRelationsWithOtherCountries == "0"? false : true,
        theCompanyUsesIntermediariesToCloseDeals : this.formulario.value.theCompanyUsesIntermediariesToCloseDeals == "0"? false : true,
        theCompanyPerformsTreatmentUnderTheTermsOfTheLgpd : this.formulario.value.theCompanyPerformsTreatmentUnderTheTermsOfTheLgpd == "0"? false : true,
        theCompanyHasALgpdProgram : this.formulario.value.theCompanyHasALgpdProgram == "0"? false : true,
        theCompanyHasADataProtectionOfficer : this.formulario.value.theCompanyHasADataProtectionOfficer == "0"? false : true,
        theCompanyIsAbleToMeetTheRightsOfHoldersOfPersonalData : this.formulario.value.theCompanyIsAbleToMeetTheRightsOfHoldersOfPersonalData == "0"? false : true,
        employeesReceiveTraining : this.formulario.value.employeesReceiveTraining == "0"? false : true,
        describeTheSecurityTechniquesAdopted : this.formulario.value.describeTheSecurityTechniquesAdopted == "0"? false : true,
        allTransfersAndSharingOfPersonalDataCarriedOut : this.formulario.value.allTransfersAndSharingOfPersonalDataCarriedOut == "0"? false : true,

      }
    );
    if(this.formulario.value.id == 0){
      this.service.save(this.formulario?.value).subscribe((resultado: any) => {
        this.service.downloadPDF(resultado.id).subscribe(
          (response: any) => {
            var blob = new Blob([response], { type: 'application/pdf' });
            let fileName = "";
            fileName = `${resultado.corporateName}.pdf`;
            saveAs(blob, fileName);
            this.resetar();
            this.spinner.hide();
            this.toastr.success("Informa????es salvas com sucesso!", "Sucesso");
          },
          (error: any) => {
            this.toastr.error("Ocorreu um erro. Por favor, contate o suporte!", "Erro");
          }
        );

      }, error => {
        this.spinner.hide();
        this.toastr.error("Ocorreu um erro. Por favor, contate o suporte!", "Erro");
      });
    }else{
      this.service.update(this.formulario?.value).subscribe((resultado: any) => {
        this.service.downloadPDF(resultado.id).subscribe(
          (response: any) => {
            var blob = new Blob([response], { type: 'application/pdf' });
            let fileName = "";
            fileName = `${resultado.corporateName}.pdf`;
            saveAs(blob, fileName);
            this.resetar();
            this.spinner.hide();
            this.toastr.success("Informa????es salvas com sucesso!", "Sucesso");
          },
          (error: any) => {
            this.toastr.error("Ocorreu um erro. Por favor, contate o suporte!", "Erro");
          }
        );
      }, error => {
        this.spinner.hide();
        this.toastr.error("Ocorreu um erro. Por favor, contate o suporte!", "Erro");
      });
    }


  }

public resetar(): void{
  this.formulario.reset();
  this.partnerget = [];
  this.selectedAttachments = [];
  this.attachmentVariable.nativeElement.value = "";
}

  consultaCEP() {

  let cep = this.formulario.get("cep")?.value;

  cep = cep.replace (/\D/g, '');

  if (cep != null && cep !== '') {
    let validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)){

      this.service.consultaCEP(cep)
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

    consultaCNPJ() {

      let cnpj = this.formulario.get("cnpj")?.value;

      if (cnpj != null && cnpj !== '') {
        this.spinner.show();
        this.service.consultaCnpj(cnpj)
        .subscribe((dados: any) => {
          if(dados != null){
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
          }
            this.spinner.hide();
        },error => {
          this.toastr.error("Ocorreu um erro. Por favor, contate o suporte!", "Erro");
        });

      }
    }

    selectFiles(event: any): void {
      this.selectedFiles = event.target.files;
      for (let index = 0; index < this.selectedFiles.length; index++) {
        const element = this.selectedFiles[index];
        var ext = element.name.split('.').pop().toLowerCase();
        if (ext !== "pdf") {
          this.toastr.info("S?? s??o permitidos arquivos .pdf", "Aten????o");
          this.selectedFiles = null as any;
          event.target.value = null;
          break;
        }
      }
    }

    saveClick(){
      if (!this.selectedFiles || this.selectedFiles.length == 0) {
      this.toastr.warning("Por favor, anexe os documentos exigidos.", "Aten????o!");
      }
      else {
        this.spinner.show();
        for (let i = 0; i < this.selectedFiles.length; i++) {

          let nameImage = this.selectedFiles[i].name;

          let filename = `${Guid.newGuid()}/${this.selectedFiles[i].name.replace(/\s/g, "")}`;
          this.blobService.uploadFile(this.selectedFiles[i], filename, ()=> {

            var img = new Attachments();
            img.id = 0;
            img.name = nameImage;
            img.url = this.blobService.getFinalURL(filename);

            this.selectedAttachments.push(img);

            if(this.selectedAttachments.length == this.selectedFiles.length){
              this.postar();
            }
          });
        }

      }
    }
    removerSocio(item: any){
      this.partnerget = this.partnerget.filter((x: { cpfPartner: any; }) => x.cpfPartner != item.cpfPartner);
      this.formulario.controls['partners'].setValue(this.partnerget);
      }
    removerAttachment(item: any){
        this.formulario.value.attachments = this.formulario.value.attachments.filter((x: { id: any; }) => x.id != item.id);
        }

    validarCpf(){
      var item = this.partnerget.filter((x: { cpfPartner: any; }) => x.cpfPartner == this.formulario.value.cpfPartner);
      if (item.length > 0)
        return false;
      else
        return true
      }



    openModal(template: TemplateRef<any>, item: any) {
      this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
      this.deleteItem = item;
    }

    openModalAttachment(template: TemplateRef<any>, item: any) {
      this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
      this.deleteAttachment = item;
    }

    confirm() {
    if (this.deleteItem.id == undefined){
      this.removerSocio(this.deleteItem);
      this.modalRef?.hide();
      this.deleteItem = null;
    }else{
      this.spinner.show();

      this.partnerService.deletePartner(this.deleteItem.id!).subscribe(
        (response) => {
          this.spinner.hide();
          this.modalRef!.hide();
          this.toastr.success('O s??cio deletado com sucesso.', 'Sucesso!');
          this.removerSocio(this.deleteItem);
          this.deleteItem = null;

        },
        (error) => {
          this.spinner.hide();
          this.modalRef!.hide();
          this.toastr.error("Ocorreu um erro. Por favor, contate o suporte!", "Erro");
          this.deleteItem = null;
        }
      );
    }
    }

    decline() {
      this.modalRef!.hide();
      this.deleteItem = null;
    }

    confirmAttachment() {
      this.spinner.show();

        this.AttachmentService.deleteAttachment(this.deleteAttachment.id!).subscribe(
          (response) => {
            this.spinner.hide();
            this.modalRef!.hide();
            this.toastr.success('O anexo foi deletado com sucesso.', 'Sucesso!');
            this.removerAttachment(this.deleteAttachment);
            this.deleteAttachment = null;

          },
          (error) => {
            this.spinner.hide();
            this.modalRef!.hide();
            this.toastr.error("Ocorreu um erro. Por favor, contate o suporte!", "Erro");
            this.deleteAttachment = null;
          }
        );
      }

      declineAttachment() {
        this.modalRef!.hide();
        this.deleteAttachment = null;
      }
}


