import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  private question = {}
  
  constructor() { }

  ngOnInit() {
  }

}
