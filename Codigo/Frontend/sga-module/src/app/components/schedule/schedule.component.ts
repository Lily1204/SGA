import {Component} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})


/*
	Clase ScheduleComponent
	Descripcion: Contiene la logica y los datos a mostrar en la vista html
*/

export class ScheduleComponent {

	/*
		dataStudent: variable que almacena un objeto JSON
		con los datos del alumno.
			date	--> Fecha en que salio la boleta
			name	--> Nombre cmpleto del estudiante
			career 	--> Nombre de la ingenieria que lleva
			semester--> Semestre que curso
	 */
	dataStudent:any = [{
		date: '10/06/2018',
		name: 'Damian Zamora Celiseo',
		career: 'Sistemas Computacionales',
		semester: 6
	}];


	/*
		mySchedule: variable que almacena un array de objetos
		con las materias y sus respectivas horas y un subarray de salones asignados 
		a cada una de estas. Dentro del array tendra un objeto con los 
		datos de 
			subject --> Almacena el nombre de la materia
			hour	--> Hora en la que esta se imparte
			salons	--> Almacena un subarray con los salones asignadas en cada dia de la 
						semana
	 */
	mySchedule:any = [
		{
			subject:'Automatas', 
			hour:'8-9', 
			salons:{monday:'18',tuesday:'18',wednesday:'18',thursday:'L7',friday:'L7'}
		},
		{
			subject:'Ingles', 
			hour: '9-10', 
			salons:{monday:'1',tuesday:'1',wednesday:'1',thursday:'1',friday:''}
		},
		{
			subject:'Ing. Software', 
			hour: '10-11', 
			salons:{monday:'LC02',tuesday:'LC02',wednesday:'LC02',thursday:'LC02',friday:'LC02'}
		},
		{
			subject:'Metodologias Web', 
			hour: '11-12', 
			salons:{monday:'10',tuesday:'10',wednesday:'10',thursday:'L7',friday:'L7'}
		},
		{
			subject:'Administracion DB', 
			hour: '12-13', 
			salons:{monday:'L1',tuesday:'L1',wednesday:'21',thursday:'21',friday:'21'}
		},
		{
			subject:'Lenguaje de Interfaz', 
			hour: '13-14', 
			salons:{monday:'06',tuesday:'L10',wednesday:'06',thursday:'L7',friday:''}
		},
		{
			subject:'Redes de Comp.', 
			hour: '16-17', 
			salons:{monday:'06',tuesday:'06',wednesday:'06',thursday:'06',friday:'L7'}
		},
	];


/*
	function printSchedule(){
		alert("Imprimiendo documento");
	}
*/

}
