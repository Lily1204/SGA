import {ScheduleSubject} from './schedule-subject.interface';

export interface ScheduleData {
  date: string;
  name: string;
  career: string;
  credits: number;
  subjects: ScheduleSubject[];
}
