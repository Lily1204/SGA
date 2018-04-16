import {Component} from '@angular/core';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html'
})
export class ReportCardComponent {

    // Datos del estudiante
    student = [
      { date: '04/06/2017', name: 'Damian Emerson Zamora Celiseo', career: 'Sistemas Computacionales', progress: 65, qualification: 92}
    ];
  
    // Datos que iran dentro del DataTable
    // Nombre de las columnas para la tabla
    displayedColumns = ['id', 'subject', 'score', 'credits'];
  
    // Datos que llenara la tabla en su respectiva columna
    dataSource: any = [
      { id: 1, subject: 'Lenguajes y Automatas 1', score: 90, credits: 5 },
      { id: 2, subject: 'Ingenieria de software', score: 100, credits: 5 },
      { id: 3, subject: 'Metodologias emergentes para la web', score: 95, credits: 5 },
      { id: 4, subject: 'Administracion de Base de Datos', score: 99, credits: 5 },
      { id: 5, subject: 'Lenguajes de interfaz', score: 98, credits: 4},
      { id: 6, subject: 'Redes de computadora', score: 100, credits: 5}
    ]

}
