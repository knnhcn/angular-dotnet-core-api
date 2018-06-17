import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { QuestionVirtualModel } from '../virtualModels/question.virtualmodel';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questionFormControl = new FormControl('', [
    Validators.required,
  ]);

  formQuestion: QuestionVirtualModel = new QuestionVirtualModel();
  _internQuestion: QuestionVirtualModel = new QuestionVirtualModel();
  isSaving: boolean;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  post(input: QuestionVirtualModel) {

    // Check if input is empty (undefined) and trigger formcontrol to display error.
    if(!this.formQuestion.text) {
      this.questionFormControl.markAsTouched();
      return;
    }

    // Set saving to true, to display spinner and to disable button and input.
    this.isSaving = true;

    // If needed, sanitize Input before posting.
    this._internQuestion.text = this.formQuestion.text + ' [modified by frontent logic!]';

    // Post the intern question.
    this.apiService.postQuestion(this._internQuestion).subscribe((res: QuestionVirtualModel) => {
      // Do work after posting has returned.
      alert(res.text);
      this.questionFormControl.reset();
      this.isSaving = false;
    });
  }

}