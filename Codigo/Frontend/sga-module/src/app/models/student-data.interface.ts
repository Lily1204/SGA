import {TutorData} from './tutor-data.interface';

export interface StudentData {
  name?: string;
  middleName?: string;
  lastName?: string;
  mothersLastName?: string;
  career?: string;
  semester?: number;
  birthday?: string;
  placeOfBirth?: string;
  stateOfBirth?: string;
  bloodType?: string;
  email?: string;
  telephone?: number;
  father?: TutorData;
  mother?: TutorData;
  tutor?: TutorData;
}
