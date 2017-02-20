import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';
import { ResultBoardComponent } from './result-board/result-board.component';
import { questionService } from './question.service';
import { IndexpageComponent } from './indexpage/indexpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentPageComponent,
    LoadingAnimationComponent,
    ResultBoardComponent,
    IndexpageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [questionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
