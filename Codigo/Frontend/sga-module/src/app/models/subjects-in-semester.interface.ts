import {Subject} from './subject.interface';

export interface SubjectsInSemester {
  studentId: number;
  semester: number;
  subjects: Subject[];
}
