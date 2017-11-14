import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StudentInterface} from '../shared/student.interface';

@Injectable()
export class ProfessorService {

    constructor(private http: HttpClient) { }

    getAllStudents() {
        return this.http.get<StudentInterface[]>('http://192.168.43.81/Trabajos/ApiRestFul-php/peoples');
    }
}
