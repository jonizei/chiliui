import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractModalModule } from './abstract-modal/absract-modal.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalService } from './core/service/modal.service';
import { OutletService } from './core/service/outlet.service';
import { RecordService } from './core/service/record.service';
import { MainPageModule } from './main-page/main-page.module';
import { ToggleSliderModule } from './toggle-slider/toggle-slider.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    CommonModule,
    HttpClientModule,
    ToggleSliderModule,
    AbstractModalModule
  ],
  providers: [
    RecordService,
    OutletService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
