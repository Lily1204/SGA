import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfessorService} from '../../services/professor.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    constructor(private route: ActivatedRoute, private professorService: ProfessorService) {
    }

    ngOnInit(): void {
        console.log(this.route);
        this.professorService.getAllStudents().subscribe(next => console.log(next), error => console.log(error));
    }
}
