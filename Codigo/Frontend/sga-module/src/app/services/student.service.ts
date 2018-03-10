import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {LoggingRequest} from '../components/interfaces/logging-request';

@Injectable()
export class StudentService {

    constructor(private http: HttpClient) {
    }

    public userLogin(body: LoggingRequest): Observable<any> {
        return this.http.post<any>(``, body);
    }
}
