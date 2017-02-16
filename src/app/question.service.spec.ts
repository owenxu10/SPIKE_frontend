/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { questionService } from './question.service';

describe('QuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [questionService]
    });
  });

  it('should ...', inject([questionService], (service: questionService) => {
    expect(service).toBeTruthy();
  }));
});
