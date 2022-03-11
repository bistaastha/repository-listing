import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LanguageLabelComponent } from './language-label/language-label.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LanguageLabelComponent,
    RepositoryDetailsComponent,
    UserDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
