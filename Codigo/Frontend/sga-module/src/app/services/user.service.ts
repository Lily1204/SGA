import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {LoggingRequest} from '../models/logging-request';
import {UserData} from '../models/user-data.interface';
import {SubjectsInSemester} from '../models/subjects-in-semester.interface';
import {Subject} from '../models/subject.interface';
import {StudentData} from '../models/student-data.interface';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  public userLogin(body: LoggingRequest): Observable<UserData> {
    return this.http.post<UserData>(`/user/login`, body);
  }

  public subjectsInSemester(controlNumber: number): Observable<SubjectsInSemester[]> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.get<SubjectsInSemester[]>(`/student/subjects`, {params});
  }

  public academicLoad(controlNumber: number, subjects: Subject[]): Observable<string> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.post<string>(`/student/academic_load`, {subjects}, {params});
  }

  public studentReportCard(): Observable<any> {
    // TODO
    return this.http.get(``);
  }

  public studentData(control: number): Observable<StudentData> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.get<StudentData>(`/student/basic_data`, {params});
  }

  public studentData(control: number, studentData: StudentData): Observable {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.post(`/student/basic_data`, studentData, params);
  }
}
