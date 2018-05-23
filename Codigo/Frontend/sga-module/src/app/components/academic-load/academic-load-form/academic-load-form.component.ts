/**
 * Clase para el componente de Academic Load Form
 **/

/**
 * Librerias por default de angular
 * */
import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Declaracion de componente tomando las anotaciones de angular
 * selector = Indica el nombre que tomara la etiqueta del componente
 * templateUrl = Indica la ubicacion de la template de html para el componente
 * */
@Component({
  selector: 'app-academic-load-form',
  templateUrl: './academic-load-form.component.html'
})
/**
 * Clase AcademicLoadFormComponent
 * */
export class AcademicLoadFormComponent {

  /**
   * Declaracion de un valor de entrada
   * del componente
   * */
  @Input() subjectsInSemester: any;

  /**
   * Declaracion de un evento del componente
   * */
  @Output() valueChanges: EventEmitter<any>;

  value: any[];

  /**
   * Constructor de la clase
   * */
  constructor() {
    /**
     * Inicializacion de la variable "value"
     * */
    this.value = [];
    /**
     * Inicializacion del objecto
     * */
    this.valueChanges = new EventEmitter<any>();
  }

  /**
   * Metodo que escucha el estado de cada
   * elemento que representa una materia
   * */
  onSelectedItem(event: any) {
    if (event.selected) {
      /**
       * Si el valor de la variable
       * "selected" es "true" se
       * añade el valor de la variable
       * "subject" al arreglo "value"
       * */
      this.value.push(event.subject);
    } else {
      /**
       * Si el valor de la variable
       * "selected" es "false" se
       * filtran los valores del
       * arreglo "value" para
       * eliminar la materia que se
       * ha eliminado buscandola por
       * su clave unica
       * */
      this.value = this.value.filter((item) => item.code !== event.subject.code);
    }
    /**
     * Llama al metodo "onValueChanges"
     * */
    this.onValueChanges();
  }

  /**
   * Metodo "onValueChanges"
   * */
  onValueChanges() {
    /**
     * Emite un evento que puede
     * ser escuchando por el
     * componente padre
     * */
    this.valueChanges.emit(this.value);
  }
}
