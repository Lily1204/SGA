/**
 * Clase para el componente de Academic Load Dialog
 **/

/**
 * Librerias por default de angular
 * */
import {Component, Inject} from '@angular/core';
/**
 * Iconos e interfaz de font awesome
 * */
import {faExclamationTriangle} from '@fortawesome/fontawesome-free-solid';
/**
 * Librerias de angular material
 * */
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
/**
 * Tipos de datos
 * */
import {DialogData} from '../../../models/dialog-data.interface';

@Component({
  selector: 'app-academic-load-dialog',
  templateUrl: './academic-load-dialog.component.html'
})
export class AcademicLoadDialogComponent {

  exclamationTriangle = faExclamationTriangle;

  constructor(public dialogRef: MatDialogRef<AcademicLoadDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
}
