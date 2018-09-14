import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private questions: Question[];

  constructor(
    private questionService: QuestionService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(){
    var testGuid = this.router.snapshot.paramMap.get("testGuid");
    this.questionService.getAllQuestions(testGuid).subscribe(questions => this.questions = questions);
  }
}
