import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component'
import { ContentComponent } from './views/content/content.component'
import { AsideComponent } from './views/aside/aside.component'
import { FooterComponent } from './views/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AsideComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient, // Needed to load remote md files using [src]
      sanitize: SecurityContext.NONE, // Turn off sanitization
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
