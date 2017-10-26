import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    logging(controlNumber: number, password: string) {
        console.log('Numero de control: ' + controlNumber + ' Contraseña: ' + password);
        return true;
    }
}
