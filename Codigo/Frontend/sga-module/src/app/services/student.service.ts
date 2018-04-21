import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {LoggingRequest} from '../models/logging-request';

@Injectable()
export class StudentService {

    constructor(private http: HttpClient) {
    }

    public userLogin(body: LoggingRequest): Observable<any> {
        return this.http.post<any>(`/user/login`, body);
    }

    public subjectsInSemester() {
        const response = [
            {
                semester: 1, subjects: [
                    {code: '6g1', name: 'Lenguajes y Automatas I', credits: 5, qualification: 90},
                    {code: '6g2', name: 'Redes de Computadoras', credits: 5, qualification: 90},
                    {code: '6g3', name: 'Administración de Base de Datos', credits: 5, qualification: 90},
                    {code: '6g6', name: 'Ingenieria de Software', credits: 5, qualification: 90}
                ]
            },
            {
                semester: 2, subjects: [
                    {code: '6g1', name: 'Lenguajes y Automatas I', credits: 5},
                    {code: '6g2', name: 'Redes de Computadoras', credits: 5},
                    {code: '6g3', name: 'Administración de Base de Datos', credits: 5},
                    {code: '6g6', name: 'Ingenieria de Software', credits: 5, qualification: 90}
                ]
            },
            {
                semester: 3, subjects: [
                    {code: '6g1', name: 'Lenguajes y Automatas I', credits: 5},
                    {code: '6g2', name: 'Redes de Computadoras', credits: 5},
                    {code: '6g3', name: 'Administración de Base de Datos', credits: 5},
                    {code: '6g6', name: 'Ingenieria de Software', credits: 5}
                ]
            },
            {
                semester: 4, subjects: [
                    {code: '6g1', name: 'Lenguajes y Automatas I', credits: 5},
                    {code: '6g2', name: 'Redes de Computadoras', credits: 5},
                    {code: '6g3', name: 'Administración de Base de Datos', credits: 5},
                    {code: '6g6', name: 'Ingenieria de Software', credits: 5},
                    {code: '6g4', name: 'Lenguajes de Interfaz', credits: 4}
                ]
            },
            {
                semester: 5, subjects: [
                    {code: '6g1', name: 'Lenguajes y Automatas I', credits: 5},
                    {code: '6g2', name: 'Redes de Computadoras', credits: 5},
                    {code: '6g3', name: 'Administración de Base de Datos', credits: 5},
                    {code: '6g6', name: 'Ingenieria de Software', credits: 5}
                ]
            },
            {
                semester: 6, subjects: [
                    {code: '6g1', name: 'Lenguajes y Automatas I', credits: 5},
                    {code: '6g2', name: 'Redes de Computadoras', credits: 5},
                    {code: '6g3', name: 'Administración de Base de Datos', credits: 5},
                    {code: '6g6', name: 'Ingenieria de Software', credits: 5}
                ]
            },
            {
                semester: 7, subjects: [
                    {code: '6g1', name: 'Lenguajes y Automatas I', credits: 5},
                    {code: '6g2', name: 'Redes de Computadoras', credits: 5},
                    {code: '6g3', name: 'Administración de Base de Datos', credits: 5},
                    {code: '6g6', name: 'Ingenieria de Software', credits: 5}
                ]
            },
            {
                semester: 8, subjects: [
                    {code: '6g1', name: 'Lenguajes y Automatas I', credits: 5},
                    {code: '6g2', name: 'Redes de Computadoras', credits: 5},
                    {code: '6g3', name: 'Administración de Base de Datos', credits: 5},
                    {code: '6g6', name: 'Ingenieria de Software', credits: 5}
                ]
            }
        ];
        return new Observable((observer) => {
            setTimeout(() => observer.next(response), 500);
        });
    }

    public studetData(): Observable<any> {
      return this.http.get(``);
    }

    public studentReportCard(): Observable<any> {
      return this.http.get(``);
    }
}
