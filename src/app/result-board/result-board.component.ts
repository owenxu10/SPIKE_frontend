import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'result-board',
  templateUrl: './result-board.component.html',
  styleUrls: ['./result-board.component.css']
})
export class ResultBoardComponent implements OnInit {
  
  @Input()
  result: string;

  constructor() {}

  ngOnInit() {

  }

}
