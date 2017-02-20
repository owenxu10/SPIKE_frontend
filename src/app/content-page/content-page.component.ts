import { Component, OnInit } from '@angular/core';
import { questionService } from '../question.service';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  isTyped:boolean;
	result:any;
	description:string;
	isShowResult:boolean;
	isShowAnimation:boolean;
	desc:any;
	category:any;
	message:string;
	hintText:string;
	descSample=["脚踝扭伤好几周了，一直肿着，走路很疼",
				"吃东西卡到嗓子了",
				"宝宝反复发烧，吃了退烧药后两个多小时都没有效果",
				"我十六岁了，脸上这些小疙瘩怎么才能好",
				"甲状腺的检查结果请医生帮忙看看"];

	constructor(private questionService:questionService){}

	ngOnInit() {
	  this.isTyped = false;
		this.isShowResult = false;
		this.isShowAnimation = false;
		let descNum = Math.floor((Math.random() * 5));
		this.hintText = this.descSample[descNum];
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
		if(this.hintText != ""){
	  	this.description = this.hintText;
      this.hintText = "";
		}

	}

}
