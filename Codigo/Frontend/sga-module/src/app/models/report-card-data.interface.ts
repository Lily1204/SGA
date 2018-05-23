import {Subject} from './subject.interface';

export interface ReportCardData {
  date: string;
  name: string;
  career: string;
  progress: number;
  qualification: number;
  subjects: Subject[];
}
