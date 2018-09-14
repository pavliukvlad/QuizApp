import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private readonly getTestsUrl = "api/Admin/GetAllTests";
  private readonly updateTestUrl = "api/Apilike/UpdateTest";
  private readonly getTestByGuidUrl = "api/Admin/GetTestByGuid/"
  private readonly createTestUrl = "api/Apilike/CreateTest";
  private readonly removeTestUrl = "api/Apilike/RemoveTest/";

  private selectedTest: Test;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }
  
  getAllTests():Observable<Test[]>{
    return this.httpClient.get<Test[]>(this.getTestsUrl);
  }

  getTestByGuid(guid: string): Observable<Test>{
    return this.httpClient.get<Test>(this.getTestByGuidUrl + guid);
  }

  createTest(test:Test){
    return this.httpClient.post(this.createTestUrl, test);
  }

  updateTest(testGuid: string, test: Test){
    return this.httpClient.post(this.updateTestUrl, {testGuid: testGuid, test: test});
  }

  removeTest(testGuid: string){
    return this.httpClient.post(this.removeTestUrl, { testGuid: testGuid });
  }
}
