import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	questionSet;
	question;
	username;
	constructor(private http:Http){}


	getQuestions(){
		this.questionSet =
			this.http.get('/api/things/{'+this.question+'}')
			.map(res=>{
				//console.log(res.json().message);
				return res.json().message;
			})
		}

}
