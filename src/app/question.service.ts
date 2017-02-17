import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class questionService {

    constructor(private http: Http) { }
  
    getResults(description:string): Promise<string> {
    return this.http.get('/api/things/{'+description+'}')
               .toPromise()
               .then(res => res.json().message as string)
               .catch(error=>{
               		console.error('An error occurred', error);
               		return Promise.reject(error.message || error);
               });
    }

    getResultsSlowly(description:string): Promise<string> {
	  return new Promise(resolve => {
	    // Simulate server latency with 2 second delay
	    setTimeout(() => resolve(this.getResults(description)), 4000);
	  });
	}

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error);
	  return Promise.reject(error.message || error);
	}
}


