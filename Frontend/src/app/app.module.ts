import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { Browser } from 'protractor';
import { CreateComponent } from './create/create.component';
import { GetComponent } from './get/get.component';
import { JoinComponent } from './join/join.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ShowCodeComponent } from './show-code/show-code.component';
import { ErrorComponent } from './error/error.component';
import { JoinSuccessComponent } from './join-success/join-success.component';
import { CookieService } from 'ngx-cookie-service';
import { SaveSuccessComponent } from './save-success/save-success.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    GetComponent,
    JoinComponent,
    ShowCodeComponent,
    ErrorComponent,
    JoinSuccessComponent,
    SaveSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{provide : NZ_I18N, useValue: en_US}, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
