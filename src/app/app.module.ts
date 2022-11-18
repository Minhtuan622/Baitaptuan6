import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThoComponent } from './Baitap/tho/tho.component';
import { BaisaoComponent } from './Baitap/baisao/baisao.component';
import { TruyencuoiComponent } from './Baitap/truyencuoi/truyencuoi.component';
import { ShophoaComponent } from './Baitap/shophoa/shophoa.component';
import { RegisterComponent } from './Baitap/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ThoComponent,
    BaisaoComponent,
    TruyencuoiComponent,
    ShophoaComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
