import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TwitterNluComponent } from './components/twitter-nlu/twitter-nlu.component';
import { CosNluComponent } from './components/cos-nlu/cos-nlu.component';
import { TextNluComponent } from './components/text-nlu/text-nlu.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitterNluComponent,
    CosNluComponent,
    TextNluComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
