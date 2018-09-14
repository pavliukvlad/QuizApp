import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Test } from '../../models/test';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {

  test: Test;

  constructor(
    private testService: TestService,
    private router: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.getSelectedTest();
  }

  getSelectedTest(){
    var guid = this.router.snapshot.paramMap.get("testId");
    this.testService.getTestByGuid(guid).subscribe(test => this.test = test);
  }

  saveTest(){
    this.testService.updateTest(this.test.Guid, this.test).subscribe(() => this.route.navigate(["admin/tests"]));
  }

}
