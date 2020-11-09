import { HttpClientModule } from '@angular/common/http';
import { RootRoutingModule } from './root-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    RootComponent,
  ],
  bootstrap: [RootComponent],
})
export class RootModule { }
