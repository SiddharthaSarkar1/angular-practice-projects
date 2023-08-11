import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowdetlComponent } from './flowdetl/flowdetl.component';
import { FlowercardComponent } from './flowercard/flowercard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyreactiveformComponent } from './myreactiveform/myreactiveform.component';
import { StarttempComponent } from './starttemp/starttemp.component';
import { MydropdowncompComponent } from './mydropdowncomp/mydropdowncomp.component';
import { WcpComponent } from './wcp/wcp.component';
import { GetapidatacompComponent } from './getapidatacomp/getapidatacomp.component';


@NgModule({
  declarations: [
    AppComponent,
    FlowdetlComponent,
    FlowercardComponent,
    MyreactiveformComponent,
    StarttempComponent,
    MydropdowncompComponent,
    WcpComponent,
    GetapidatacompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
