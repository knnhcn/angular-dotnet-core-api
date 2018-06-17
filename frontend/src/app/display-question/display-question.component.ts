import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { QuestionVirtualModel } from '../virtualModels/question.virtualmodel';

@Component({
  selector: 'display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.css']
})
export class DisplayQuestionComponent implements OnInit {

  list: QuestionVirtualModel[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getQuestions().subscribe((res: QuestionVirtualModel[]) => {
      this.list = res;
    }); 
  }

}
