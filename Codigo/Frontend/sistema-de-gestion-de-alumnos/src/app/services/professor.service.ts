import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {StudentInterface} from '../shared/student.interface';

@Injectable()
export class ProfessorService {

    uri: string;

    constructor(private http: HttpClient) {
        this.uri = 'http://192.168.43.81/Trabajos/ApiRestFul-php/';
    }

    getAllStudents() {
        return this.http.get<StudentInterface[]>(this.uri + 'people');
    }

    getStudent(id: number) {
        return this.http.get<StudentInterface[]>(this.uri + 'people/' + id);
    }

    createStudent(student: any) {
        return this.http.post(this.uri + 'people', student);
    }

    updateStudent(id: number, student: any) {
        return this.http.put(this.uri + 'people/' + id, student);
    }

    deleteStudent(id: number) {
        return this.http.delete(this.uri + 'people/' + id);
    }

    getAllGroups() {
        return this.http.get<StudentInterface[]>(this.uri + 'groups');
    }

    getGroup(id: number) {
        return this.http.get<StudentInterface[]>(this.uri + 'groups/' + id);
    }

    deleteGroup(id: number) {
        return this.http.delete(this.uri + 'groups/' + id);
    }
}
