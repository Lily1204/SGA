import {Component} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

	dataStudent:any = [{
		date: '10/06/2018',
		name: 'Damian Zamora Celiseo',
		career: 'Sistemas Computacionales',
		semester: 6
	}]

	dataSource:any =[
		{subject: 'L. Interfaz', hour: ['8-9','8-9','8-9','8-9',''], salon:['06','L10','06','L7','']},
		{subject: 'Automatas', hour: ['9-10','9-10','9-10','9-10','9-10'], salon:['18','18','18','L7','L7']},
	]

}
