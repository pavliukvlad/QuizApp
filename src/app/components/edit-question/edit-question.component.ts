import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  private question: Question;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion(){
    var questionGuid = this.route.snapshot.paramMap.get("questionGuid");
    this.questionService.getQuestionByGuid(questionGuid).subscribe(question => this.question = question);
  }

  updateQuestion(){
    this.questionService.updateQuestion(this.question.Guid, this.question).subscribe(() => this.router.navigate(["question"]));
  }

  addAnswer(){
    if (this.question.Answers.length >= 4){
      return;
    }
    this.question.Answers.push({});
  }
}
