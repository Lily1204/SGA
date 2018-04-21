/**
 * Clase para el componente de Login
 **/

/**
 * Librerias por default de angular
 * */
import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
/**
 * Servicio que obtiene informacion del estudiante
 * */
import {StudentService} from '../../services/student.service';
/**
 * Librerias de rxjs que añade soporte para programación funcional
 * */
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/finally';
/**
 * Icono de "Spinner" e interfaz de font awesome
 * */
import {faSpinner} from '@fortawesome/fontawesome-free-solid';
import {IconDefinition} from '@fortawesome/fontawesome';

/**
 * Declaracion de componente tomando las anotaciones de angular
 * selector = Indica el nombre que tomara la etiqueta del componente
 * templateUrl = Indica la ubicacion de la template de html para el componente
 * styleUrls = Indica la ubicacion de los archivos de estilos para el componente
 * */
@Component({
    selector: 'app-logging',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
/**
 * Clase LoginComponent que implementa la interfaz OnDestroy
 * para escuchar el momento en que se destruye el componente,
 * parte final de su ciclo de vida
 * */
export class LoginComponent implements OnDestroy {

    /**
     * Variable que indicara cuando se este cargando los datos del servidor tras la petición del usuario
     * */
    loading: boolean;

    /**
     * Variable para almacenar una referencia al formulario de login
     * */
    form: FormGroup;

    /**
     * Variable para almacenar todas las subscripciones
     * */
    subscription: Subscription;

    /**
     * Referencia al icono "spinner" de font awesome
     * */
    loadIcon: IconDefinition = faSpinner;

    /**
     * Constructor de la clase
     * */
    constructor(formBuilder: FormBuilder, private studentService: StudentService, private router: Router) {
        /**
         * Inicializacion del formulario
         * */
        this.form = formBuilder.group({
            controlNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
            password: ['', Validators.required]
        });

        /**
         * Inicializacion del objeto
         * */
        this.subscription = new Subscription();
    }

    /**
     * Metodo implementado por la interfaz OnDestroy
     * */
    ngOnDestroy(): void {
        /**
         * Llamada al metodo unsubscribe que desuscribe
         * todas las subscripciones añadidas
         */
        this.subscription.unsubscribe();
    }

    /**
     * Metodo que escucha la iteraccion del usuario con el boton
     * */
    onClickLoggingButton() {
        /**
         * Se cambia el valor de la variable para
         * indicar el comienzo de la peticion al servidor
         */
        this.loading = true;
        /**
         * Se añade una subscripcion
         * */
        this.subscription.add(
            /**
             * Llamada al servicio "userLogin" el cual envia
             * al servidor la información introducida por el
             * usuario y pide la confirmacion de que los datos
             * sean validos
             * */
            this.studentService.userLogin(this.form.value)
            /**Cuando el servicio recibe la respuesta del
             * servidor cambia el valor de la variable para
             * indicar al usuario que termino de cargar
             * */
                .finally(() => this.loading = false)
                /**
                 * This finally method may be deleted when the user login service be finished
                 * */
                // .finally(() => this.router.navigate(['home']))
                .subscribe((response) => {
                    /**Recibe la respuesta del servidor en caso
                     * de que se haya completado con exito
                     * */
                    console.log(response);
                }, () => {
                    /**
                     * Recibe la respuesta en caso de que algo haya fallado
                     * */
                }));
    }
}
