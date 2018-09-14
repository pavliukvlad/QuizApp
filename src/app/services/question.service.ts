import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private readonly getQuestionsUrl = "api/Apilike/GetQuestionsByTestGuid/?testGuid=";
  private readonly getQuestionByGuidUrl = "api/Apilike/GetQuestionByGuid/?questionGuid=";
  private readonly updateQuestionUrl = "api/Apilike/UpdateQuestion";

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllQuestions(testGuid: string): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.getQuestionsUrl + testGuid);
  }

  getQuestionByGuid(questionGuid: string): Observable<Question>{
    return this.httpClient.get<Question>(this.getQuestionByGuidUrl + questionGuid);
  }

  updateQuestion(questionGuid: string, question: Question){
    return this.httpClient.post(this.updateQuestionUrl, {questionGuid: questionGuid, question: question});
  }
}
