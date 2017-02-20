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
	desc:any;
	category:any;
	message:string;

	constructor(private http:Http,private questionService:questionService){}

	ngOnInit() {
		this.isShowResult = false;
		this.isShowAnimation = false;
    }

	getResult(){
		this.questionService.getResults(this.description)
		//this.questionService.getResultsSlowly(this.description)
        .then(result => {
        	this.isShowAnimation = false;

        	this.result = result;
        	let code = this.result['code']
        	if(code == 1){
        		this.isShowResult = false;
        		this.message = "需要更多描述"
        	}
        	else{
        		this.isShowResult = true;
        		this.category = this.result['category']
        		this.desc = this.result['desc']
        	}

        })
        .catch(error=>{
        	this.desc = error.statusText;
        });

	}

	onClickTextarea()
	{
		this.isShowAnimation = true;
		this.message = '';
	}
}
