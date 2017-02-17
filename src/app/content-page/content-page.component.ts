import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http }       from '@angular/http';
import { questionService } from '../question.service';
import { HeaderComponent } from '../header/header.component';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  	result:any;
	description:string;
	isShowResult:boolean;
	isShowAnimation:boolean;

	constructor(private http:Http,private questionService:questionService){}

	ngOnInit() {
		this.isShowResult = false;
		this.isShowAnimation = false;
    }

	getResult(){
		this.isShowResult = true;
		this.questionService.getResults(this.description)
		//this.questionService.getResultsSlowly(this.description)
        .then(result => {
        	this.isShowAnimation = false;
        	this.result = result;
        })
        .catch(error=>{
        	this.result = error.statusText;
        });

	}

	onClickTextarea()
	{
		this.isShowAnimation = true;
	}
}
