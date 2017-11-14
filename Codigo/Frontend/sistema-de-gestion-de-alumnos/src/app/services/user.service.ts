import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

    logging(loginInfo: any) {
        console.log(loginInfo);
        return new Observable(observer => {
            localStorage.setItem('token', '123456');
            localStorage.setItem('userName', `{"user": ${loginInfo.user},"name": "Julio", "lastName": "Perez", "rol": "${loginInfo.rol}"}`);
            observer.next('authenticate');
        });
    }

    getUserInfo() {
        // localStorage.getItem('token')
    }
}
