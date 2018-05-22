package com.mx.ito.sga.module.app.dao;

import com.mx.ito.sga.module.app.models.StudentData;
import com.mx.ito.sga.module.app.models.Subject;
import com.mx.ito.sga.module.app.models.SubjectsInSemester;

import java.util.HashMap;

public class StudentDAO {

    private static HashMap<Integer, SubjectsInSemester[]> subjectsInSemester;

    private static HashMap<Integer, StudentData> studentData;

    {
        subjectsInSemester = new HashMap<>();
        subjectsInSemester.put(15011213, new SubjectsInSemester[]{
                new SubjectsInSemester(15011213, 1, new Subject[]{
                        new Subject("1g1", "Calculo Diferencial", 5, 85),
                        new Subject("1g2", "Fundamentos de Programacion", 5, 100),
                        new Subject("1g3", "Taller de etica", 4, 82),
                        new Subject("1g4", "Matematicas Discretas", 5, 90),
                        new Subject("1g5", "Taller de Administracion", 4, 90),
                        new Subject("1g6", "Fundamentos de Investigacion", 5, 75)
                }),
                new SubjectsInSemester(15011213, 2, new Subject[]{
                        new Subject("2g1", "Calculo Integral", 5, 79),
                        new Subject("2g2", "Programacion Orientada a Objetos", 5, 91),
                        new Subject("2g3", "Contabilidad Financiera", 4, 84),
                        new Subject("2g4", "Quimica", 4, 77),
                        new Subject("2g5", "Algebra Lineal", 5, 70),
                        new Subject("2g6", "Probabilidad y Estadistica", 5, 70)
                }),
                new SubjectsInSemester(15011213, 3, new Subject[]{
                        new Subject("3g1", "Calculo Vectorial", 5, 85),
                        new Subject("3g2", "Estructura de Datos", 5, 88),
                        new Subject("3g3", "Cultura Empresarial", 4, 84),
                        new Subject("3g4", "Investigacion de Operaciones", 4, 77),
                        new Subject("3g5", "Sistemas Operativos", 4, 95),
                        new Subject("3g6", "Fisica General", 5, 90)
                }),
                new SubjectsInSemester(15011213, 4, new Subject[]{
                        new Subject("4g1", "Ecuaciones Diferenciales", 5, 90),
                        new Subject("4g2", "Topicos Avanzados de Programacion", 5, 100),
                        new Subject("4g3", "Fundamentos de base de datos", 5, 82),
                        new Subject("4g4", "Metodos Numericos", 4, 100),
                        new Subject("4g5", "Principios Electricos y Aplicaiones Digita", 5, 96),
                        new Subject("4g6", "Taller de Sistemas Operativos", 4, 91)
                }),
                new SubjectsInSemester(15011213, 5, new Subject[]{
                        new Subject("5g1", "Desarrollo Sustentable", 5, 82),
                        new Subject("5g2", "Fundamentos de Telecomunicaciones", 5, 84),
                        new Subject("5g3", "Taller de Base de Datos", 4, 90),
                        new Subject("5g4", "Simulacion", 5, 87),
                        new Subject("5g5", "Fundamentos de Ingenieria de Software", 5, 98),
                        new Subject("5g6", "Arquitectura de Computadoras", 5, 90)
                }),
                new SubjectsInSemester(15011213, 6, new Subject[]{
                        new Subject("6g1", "Lenguajes y Automatas I", 5, 0),
                        new Subject("6g2", "Redes de  Computadoras", 5, 0),
                        new Subject("6g3", "Administracion de Base de Datos", 4, 0),
                        new Subject("6g4", "Graficacion", 4, 85),
                        new Subject("6g5", "Programacion Web", 5, 0),
                        new Subject("6g6", "Ingenieria de Software", 5, 0),
                        new Subject("6g7", "Lenguaje de Interfaz", 5, 0),
                        new Subject("6g8", "Metodologias Emergentes para la web", 5, 0)
                }),
                new SubjectsInSemester(15011213, 7, new Subject[]{
                        new Subject("7g1", "Lenguajes y Automatas II", 5, 0),
                        new Subject("7g2", "Conmutacion y enrutamiento de redes de datos", 5, 0),
                        new Subject("7g3", "Taller de Investigacion I", 4, 0),
                        new Subject("7g4", "Programacion Logica y Funcional", 4, 0),
                        new Subject("7g7", "Sistemas Programables", 5, 0),
                        new Subject("7g8", "Aplicaciones enriquecidas de Internet", 5, 0),
                        new Subject("7g9", "Arquitectura de Software para la web", 5, 0)
                }),
                new SubjectsInSemester(15011213, 8, new Subject[]{
                        new Subject("8g2", "Administracion de Redes", 5, 0),
                        new Subject("8g7", "Administracion de servidores de Internet", 4, 0),
                        new Subject("8g6", "Inteligencia Artificial", 4, 0),
                        new Subject("8g4", "Gestion de Desarrollo de Software", 5, 0),
                        new Subject("8g8", "Desarrollo para la web movil", 5, 0),
                        new Subject("8g3", "Taller de Investigacion II", 5, 0)
                })
        });
        subjectsInSemester.put(15011270, new SubjectsInSemester[]{
                new SubjectsInSemester(15011270, 1, new Subject[]{
                        new Subject("1g1", "Calculo Diferencial", 5, 85),
                        new Subject("1g2", "Fundamentos de Programacion", 5, 100),
                        new Subject("1g3", "Taller de etica", 4, 82),
                        new Subject("1g4", "Matematicas Discretas", 5, 90),
                        new Subject("1g5", "Taller de Administracion", 4, 90),
                        new Subject("1g6", "Fundamentos de Investigacion", 5, 75)
                }),
                new SubjectsInSemester(15011270, 2, new Subject[]{
                        new Subject("2g1", "Calculo Integral", 5, 79),
                        new Subject("2g2", "Programacion Orientada a Objetos", 5, 91),
                        new Subject("2g3", "Contabilidad Financiera", 4, 84),
                        new Subject("2g4", "Quimica", 4, 77),
                        new Subject("2g5", "Algebra Lineal", 5, 70),
                        new Subject("2g6", "Probabilidad y Estadistica", 5, 70)
                }),
                new SubjectsInSemester(15011270, 3, new Subject[]{
                        new Subject("3g1", "Calculo Vectorial", 5, 85),
                        new Subject("3g2", "Estructura de Datos", 5, 88),
                        new Subject("3g3", "Cultura Empresarial", 4, 84),
                        new Subject("3g4", "Investigacion de Operaciones", 4, 77),
                        new Subject("3g5", "Sistemas Operativos", 4, 95),
                        new Subject("3g6", "Fisica General", 5, 90)
                }),
                new SubjectsInSemester(15011270, 4, new Subject[]{
                        new Subject("4g1", "Ecuaciones Diferenciales", 5, 90),
                        new Subject("4g2", "Topicos Avanzados de Programacion", 5, 100),
                        new Subject("4g3", "Fundamentos de base de datos", 5, 82),
                        new Subject("4g4", "Metodos Numericos", 4, 100),
                        new Subject("4g5", "Principios Electricos y Aplicaiones Digita", 5, 96),
                        new Subject("4g6", "Taller de Sistemas Operativos", 4, 91)
                }),
                new SubjectsInSemester(15011270, 5, new Subject[]{
                        new Subject("5g1", "Desarrollo Sustentable", 5, 82),
                        new Subject("5g2", "Fundamentos de Telecomunicaciones", 5, 84),
                        new Subject("5g3", "Taller de Base de Datos", 4, 90),
                        new Subject("5g4", "Simulacion", 5, 87),
                        new Subject("5g5", "Fundamentos de Ingenieria de Software", 5, 98),
                        new Subject("5g6", "Arquitectura de Computadoras", 5, 90)
                }),
                new SubjectsInSemester(15011270, 6, new Subject[]{
                        new Subject("6g1", "Lenguajes y Automatas I", 5, 0),
                        new Subject("6g2", "Redes de  Computadoras", 5, 0),
                        new Subject("6g3", "Administracion de Base de Datos", 4, 0),
                        new Subject("6g4", "Graficacion", 4, 85),
                        new Subject("6g5", "Programacion Web", 5, 0),
                        new Subject("6g6", "Ingenieria de Software", 5, 0),
                        new Subject("6g7", "Lenguaje de Interfaz", 5, 0),
                        new Subject("6g8", "Metodologias Emergentes para la web", 5, 0)
                }),
                new SubjectsInSemester(15011270, 7, new Subject[]{
                        new Subject("7g1", "Lenguajes y Automatas II", 5, 0),
                        new Subject("7g2", "Conmutacion y enrutamiento de redes de datos", 5, 0),
                        new Subject("7g3", "Taller de Investigacion I", 4, 0),
                        new Subject("7g4", "Programacion Logica y Funcional", 4, 0),
                        new Subject("7g7", "Sistemas Programables", 5, 0),
                        new Subject("7g8", "Aplicaciones enriquecidas de Internet", 5, 0),
                        new Subject("7g9", "Arquitectura de Software para la web", 5, 0)
                }),
                new SubjectsInSemester(15011270, 8, new Subject[]{
                        new Subject("8g2", "Administracion de Redes", 5, 0),
                        new Subject("8g7", "Administracion de servidores de Internet", 4, 0),
                        new Subject("8g6", "Inteligencia Artificial", 4, 0),
                        new Subject("8g4", "Gestion de Desarrollo de Software", 5, 0),
                        new Subject("8g8", "Desarrollo para la web movil", 5, 0),
                        new Subject("8g3", "Taller de Investigacion II", 5, 0)
                })
        });

        studentData = new HashMap<>();
        studentData.put(15011213, new StudentData("Julio", "Adan", "Perez",
                "Garcia", "Ingenieria en Sistemas", 6,
                "10/12/1995", "Orizaba", "Veracruz", "O+",
                "julioperezag@gmail.com", "2722150807", null, null, null));
    }

    public SubjectsInSemester[] getSubjectsInSemester(Integer controlNumber) {
        return subjectsInSemester.get(controlNumber);
    }

    public StudentData getStudentData(Integer controlNumber) {
        return studentData.get(controlNumber);
    }
}
