import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormModule } from './template-form/template-form.module';
import { DataFormModule } from './data-form/data-form.module';
import { HeaderComponent } from './header/header.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true
    }),
    HttpClientModule,
    AppRoutingModule,
    TemplateFormModule,
    ModalModule.forRoot(),
    NgxSpinnerModule,
    DataFormModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
