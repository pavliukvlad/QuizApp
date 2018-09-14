import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Test } from '../../models/test';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  tests: Test[];

  constructor(
    private testService: TestService,
    private router: Router) { }

  ngOnInit() {
    this.getAllTests();
  }

  getAllTests(){
    this.testService.getAllTests().subscribe(tests => this.tests = tests);
  }

  removeTest(testGuid: string){
    this.testService.removeTest(testGuid).subscribe(() => this.getAllTests());
  }

}
