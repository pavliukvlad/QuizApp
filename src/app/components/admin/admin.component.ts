import { Component, OnInit } from '@angular/core';
import { Test } from '../../models/test';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TestService } from '../../services/test.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private testService: TestService,
    private router: Router,
    private location: Location) { 
    }

  ngOnInit() {
  }

  signOut(){
    this.authService.signOut().subscribe(data => this.router.navigate(["/login"]));
  }
}
