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

	dataSource:any = [{
		
	}]

}
