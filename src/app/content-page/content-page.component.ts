import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http }       from '@angular/http';
import { questionService } from '../question.service';
import { HeaderComponent } from '../header/header.component';
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/map'


@Component({
  selector: 'content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  	result:any;
	description:string;
	isShowResult:boolean;
	isLoading:boolean;

	constructor(private http:Http,private questionService:questionService){}

	ngOnInit() {
		this.isLoading = false;
		this.isShowResult = false;
    }

	getResult(){
		this.isShowResult = true;
		this.isLoading = true;

		// this.questionService.getResults(this.description)
		this.questionService.getResultsSlowly(this.description)
        .then(result => {
        	this.result = result;
        	this.isLoading = false;
        	console.log(this.result);
        });

		}

}
