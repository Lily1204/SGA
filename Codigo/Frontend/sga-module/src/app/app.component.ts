/**
 * Clase para el componente de layout
 **/

/**
 * Librerias por default de angular
 * */
import {Component} from '@angular/core';
/**
 * Libreria de rxjs que añade soporte para programación funcional
 * */
import 'rxjs/operators/filter';

/**
 * Declaracion de componente tomando las anotaciones de angular
 * selector = Indica el nombre que tomara la etiqueta del componente
 * templateUrl = Indica la ubicacion de la template de html para el componente
 * styleUrls = Indica un arreglo de ubicaciones donde están los estilos popios
 * del componente
 * */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
/**
 * Clase AppComponent
 */
export class AppComponent {
}
