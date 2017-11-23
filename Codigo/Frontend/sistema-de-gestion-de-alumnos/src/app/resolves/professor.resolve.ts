import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ProfessorService} from '../services/professor.service';

@Injectable()
export class ProfessorResolve implements Resolve<any> {

    constructor(private professorService: ProfessorService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return null; // this.professorService.getAllStudents();
    }
}
