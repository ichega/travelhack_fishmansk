import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthComponent } from './auth/auth.component';
import { NgZorroAntdModule, NZ_I18N, ru_RU } from 'ng-zorro-antd';

import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { RegistComponent } from './regist/regist.component';
import { StemComponent } from './stem/stem.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
registerLocaleData(ru);


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegistComponent,
    StemComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
