import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';
import { ResultBoardComponent } from './result-board/result-board.component';
import { questionService } from './question.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentPageComponent,
    LoadingAnimationComponent,
    ResultBoardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [questionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
