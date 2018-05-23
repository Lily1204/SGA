import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {LoggingRequest} from '../models/logging-request';
import {UserData} from '../models/user-data.interface';
import {SubjectsInSemester} from '../models/subjects-in-semester.interface';
import {Subject} from '../models/subject.interface';
import {StudentData} from '../models/student-data.interface';
import {AddressData} from '../models/address-data.interface';
import {ReportCardData} from '../models/report-card-data.interface';
import {ScheduleData} from '../models/schedule-data.interface';

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

  public studentData(controlNumber: number): Observable<StudentData> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.get<StudentData>(`/student/basic_data`, {params});
  }

  public updateStudentData(controlNumber: number, studentData: StudentData): Observable<any> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.post(`/student/basic_data`, studentData, {params});
  }

  public addressData(controlNumber: number): Observable<AddressData> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.get<AddressData>(`/student/address_data`, {params});
  }

  public updateAddressData(controlNumber: number, addressData: AddressData): Observable<any> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.post(`/student/address_data`, addressData, {params});
  }

  public reportCard(controlNumber: number): Observable<ReportCardData> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.get<ReportCardData>(`/student/report_card`, {params});
  }

  public scheduleData(controlNumber: number): Observable<ScheduleData> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.get<ScheduleData>(`/student/schedule_data`, {params});
  }
}
