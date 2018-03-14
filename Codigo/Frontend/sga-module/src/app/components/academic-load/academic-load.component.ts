/**
 * Clase para el componente de Academic Load
 **/

/**
 * Librerias por default de angular
 * */
import {Component, OnDestroy, OnInit} from '@angular/core';
/**
 * Servicio que obtiene informacion del estudiante
 * */
import {StudentService} from '../../services/student.service';
import {Subscription} from 'rxjs/Subscription';

/**
 * Declaracion de componente tomando las anotaciones de angular
 * selector = Indica el nombre que tomara la etiqueta del componente
 * templateUrl = Indica la ubicacion de la template de html para el componente
 * */
@Component({
    selector: 'app-academic-load',
    templateUrl: './academic-load.component.html'
})
/**
 * Clase LayoutComponent que implementa las interfaces OnInit y
 * OnDestroy para escuchar el momento en que se crea y en el
 * que se destruye el componente
 * */
export class AcademicLoadComponent implements OnInit, OnDestroy {

    /**
     * Variable para almacenar en memoria
     * el cardex del alumno
     * */
    subjectsInSemester: any;

    /**
     * Variable para almacenar los
     * creditos disponibles para el alumno
     * */
    availableCredits: number;

    /**
     * Variable para almacenar la cantidad
     * minima de creditos a seleccionar
     * para que el sistema permita terminar
     * la carga
     * */
    minorCredits: number;

    /**
     * Variable para almacenar los creditos
     * seleccionados
     * */
    selectedCredits: number;

    /**
     * Variable para almacenar las materias
     * seleccionadas
     * */
    selectedSubjects: any[];

    /**
     * Variable para almacenar todas las subscripciones
     * */
    subscriptions: Subscription;

    /**
     * Constructor de la clase
     * */
    constructor(private studentService: StudentService) {
        /**
         * Inicializacion del objeto
         * */
        this.subscriptions = new Subscription();
        /**
         * Inicializacion de las variables
         * en 0 para que no provoquen errores por undefined
         * */
        this.availableCredits = 35;

        this.minorCredits = 22;

        this.selectedCredits = 0;

        this.selectedSubjects = [];
    }

    /**
     * Metodo implementado por la interfaz OnInit
     * */
    ngOnInit(): void {
        /**
         * Se añade una subscripcion
         * */
        this.subscriptions.add(
            /**
             * Llamada al servicio "subjectsInSemester" el cual
             * pide el cardex del alumno
             * */
            this.studentService.subjectsInSemester().subscribe(subjects => {
            this.subjectsInSemester = subjects;
        }));
    }

    /**
     * Metodo implementado por la interfaz OnDestroy
     * */
    ngOnDestroy(): void {
        /**
         * Llamada al metodo unsubscribe que desuscribe
         * todas las subscripciones añadidas
         */
        this.subscriptions.unsubscribe();
    }

    onValueChanges(value) {
        this.selectedSubjects = value;
        this.selectedCredits = 0;
        this.selectedSubjects.forEach((item) => this.selectedCredits += item.credits);
    }

    onSendAcademicLoad() {
    }

    onPrintAcademicLoad() {
    }
}
