/**
 * Clase para el componente de Academic Load Form
 **/

/**
 * Librerias por default de angular
 * */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
/**
 * Interface de tipo "Subject"
 * */
import {Subject} from '../../../../models/subject.interface';

/**
 * Declaracion de componente tomando las anotaciones de angular
 * selector = Indica el nombre que tomara la etiqueta del componente
 * templateUrl = Indica la ubicacion de la template de html para el componente
 * */
@Component({
  selector: 'app-academic-load-item',
  templateUrl: './academic-load-item.component.html'
})
/**
 * Clase AcademicLoadItemComponent que implementa
 * la interfaz OnInit para escuchar
 * el momento en que se crea el componente
 * */
export class AcademicLoadItemComponent implements OnInit {

  /**
   * Declaracion de un valor de entrada
   * del componente
   * */
  @Input() subject: Subject;

  /**
   * Declaracion de un evento del componente
   * */
  @Output() selectedItem: EventEmitter<any>;

  /**
   * Variable usada para saber si el
   * item es seleccionado o no
   * */
  _selectedItem: boolean;

  /**
   * Variable usada para saber si el
   * item esta desabilitado
   * */
  _disabled: boolean;

  /**
   * Constructor de la clase
   * */
  constructor() {
    /**
     * Inicializacion del objecto
     * */
    this.selectedItem = new EventEmitter<any>();
  }

  /**
   * Metodo implementado por la interfaz OnInit
   * */
  ngOnInit() {
    /**
     * Deshabilita la seleccion
     * del elemento segun los
     * valores de la materia
     * */
    this._disabled = this.subject.qualification && this.subject.qualification >= 70;
  }

  /**
   * Metodo que escucha la
   * iteracion del usuario
   * con el componente
   * */
  onSelectedItem() {
    if (!this._disabled) {
      /**
       * Si el componente no esta
       * deshabilitado cambia el
       * valor de la variable
       * "selectedItem" a lo contrario
       * de su valor actual y emite un
       * evento con la informacion del
       * componente
       * */
      this._selectedItem = !this._selectedItem;
      this.selectedItem.emit({selected: this._selectedItem, subject: this.subject});
    }
  }
}
