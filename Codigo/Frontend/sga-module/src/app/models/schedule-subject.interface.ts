import {ScheduleRoom} from './schedule-room.interface';

export interface ScheduleSubject {
  subject: string;
  hour: string;
  room: ScheduleRoom;
}
