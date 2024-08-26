import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithSupportCliComponent } from './with-support-cli/with-support-cli.component';
import { withoutSupportCliComponent } from './without-support-cli/without-support-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    WithSupportCliComponent,
    withoutSupportCliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
