import { Component, OnInit } from '@angular/core';
import { Test } from '../../models/test';
import { Question } from '../../models/question'
import { TestService } from '../../services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  test: Test = {};
  isInvalid: boolean;

  constructor(
    private testService: TestService,
    private router: Router) { }

  ngOnInit() {
  }

  createTest() {
    if (!this.test.Name || !this.test.Description || !this.test.TestTimeLimit || !this.test.QuestionTimeLimit) {
      this.isInvalid = true;
      return;
    }
    
    this.testService.createTest(this.test).subscribe(() => this.router.navigate(["admin/tests"]));
  }
}
