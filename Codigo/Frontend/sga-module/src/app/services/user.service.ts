/**
 * Clase para el servicio de usuario
 **/

/**
 * Librerias de angular
 * */
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

/**
 * Librerias de rxjs que añade soporte para programación funcional
 * */
import {Observable} from 'rxjs/internal/Observable';

/**
 * Tipos de datos
 * */
import {LoggingRequest} from '../models/logging-request';
import {UserData} from '../models/user-data.interface';
import {SubjectsInSemester} from '../models/subjects-in-semester.interface';
import {Subject} from '../models/subject.interface';
import {StudentData} from '../models/student-data.interface';
import {AddressData} from '../models/address-data.interface';
import {ReportCardData} from '../models/report-card-data.interface';
import {ScheduleData} from '../models/schedule-data.interface';

/**
 * Declaracion de servicio con las anotaciones
 * de angular
 * */
@Injectable()
/**
 * Clase UserService
 * */
export class UserService {

    /**
     * Constructor de la clase
     * */
  constructor(private http: HttpClient) {
  }

  /**
   * Servicio de autenticacion
   * */
  public userLogin(body: LoggingRequest): Observable<UserData> {
    return this.http.post<UserData>(`/user/login`, body);
  }

    /**
     * Servicio que obtiene las materias en el semestre
     * */
  public subjectsInSemester(controlNumber: number): Observable<SubjectsInSemester[]> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.get<SubjectsInSemester[]>(`/student/subjects`, {params});
  }

    /**
     * Servicio que envia las materias seleccionadas
     * */
  public academicLoad(controlNumber: number, subjects: Subject[]): Observable<string> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.post<string>(`/student/academic_load`, {subjects}, {params});
  }

    /**
     * Servicio que obtiene los datos del alumno
     * */
  public studentData(controlNumber: number): Observable<StudentData> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.get<StudentData>(`/student/basic_data`, {params});
  }

    /**
     * Servicio que envia los datos del alumno
     * */
  public updateStudentData(controlNumber: number, studentData: StudentData): Observable<any> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.post(`/student/basic_data`, studentData, {params});
  }

    /**
     * Servicio que obtiene la direccion del alumno
     * */
  public addressData(controlNumber: number): Observable<AddressData> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.get<AddressData>(`/student/address_data`, {params});
  }

    /**
     * Servicio que actualiza la direccion del alumno
     * */
  public updateAddressData(controlNumber: number, addressData: AddressData): Observable<any> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.post(`/student/address_data`, addressData, {params});
  }

    /**
     * Servicio que obtiene la boleta del alumno
     * */
  public reportCard(controlNumber: number): Observable<ReportCardData> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.get<ReportCardData>(`/student/report_card`, {params});
  }

    /**
     * Servicio que obtiene el horario actual del alumno
     * */
  public scheduleData(controlNumber: number): Observable<ScheduleData> {
    let params = new HttpParams();
    params = params.set('control_number', `${controlNumber}`);
    return this.http.get<ScheduleData>(`/student/schedule_data`, {params});
  }
}
