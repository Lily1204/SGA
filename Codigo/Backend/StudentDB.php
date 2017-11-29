<?php
require_once('Config.php');// Requiriendo datos de la BD

    class StudentDB {        

        protected $mysqli; // Variable global que guardara la conexion a la BD
     
        // Constructor de la clase para conexion a la BD con MySQL        
        public function __construct(){
            try{
                $this->mysqli = new mysqli (LOCALHOST, USER, PASSWORD, DATABASE);                
            }catch (mysqli_sql_exception $e) {                
                http_response_code(500); // En caso de no poder realizar la conexion a la BD 
                //responde con un codigo de error                              
                exit;                
            }
        }      

        // Busca un alumno en la BD por su ID
        public function getPeople($id=0){
            $stmt = $this->mysqli->prepare("SELECT * FROM students WHERE noctrl = ?;");
            $stmt->bind_param('i', $id);
            $stmt->execute();
            $result = $stmt->get_result();            
            $people = $result->fetch_all(MYSQLI_ASSOC);
            $stmt->close();
            return $people;
        }

        // Muestra todoS alumnos de la BD registrado en la tabla alumnos
        public function getPeoples(){
            $result = $this->mysqli->query('SELECT * FROM students');
            $peoples = $result->fetch_all(MYSQLI_ASSOC);
            $result->close();
            return $peoples;
        }

        // Muestra un grupo en especifico con los alumnos inscritos en el por su ID
        public function getGroup($id=0){
            $sql = "SELECT a.noctrl, a.lastname, a.s_lastname, a.name, a.semester
                    FROM students as a natural join student_group as ag
                    WHERE ag.idgrupo = ?;";
            $query = $this->mysqli->prepare($sql);
            $query->bind_param('i', $id);
            $query->execute();
            $result = $query->get_result();
            $group = $result->fetch_all(MYSQLI_ASSOC);
            $query->close();
            return $group;
        }

        // Mostrar todos los grupos a cargo del maestro que inicio la sesion //En este caso la maestra < Julia - >
        public function getGroups(){
            $sql = "SELECT g.id, g.hour, ag.idaula, a.capacity
                    FROM professor_group as pg inner join groups as g on pg.idgrupo = g.id 
                    inner join classroom_group as ag on g.id = ag.idgrupo inner join classrooms as a on ag.idaula = a.id
                    WHERE pg.idprofe = 986;";
            $query =  $this->mysqli->query($sql);
            $groups = $query->fetch_all(MYSQLI_ASSOC);
            $query->close();
            return $groups;
        }

        // Agregar un estudiante a la BD
        public function addperson ($id, $lastname, $s_lastname, $name, $birthdate, $bloodtype, $status, $semester, $ideng){
            $query = "INSERT INTO students VALUES (?,?,?,?,?,?,?,?,?);";
            $new = $this->mysqli->prepare($query);
            $new->bind_param('issssssii', $id, $lastname, $s_lastname, $name, $birthdate, $bloodtype, $status, $semester, $ideng);
            $result = $new->execute();
            $new->close();
            return $result;
        }

        // Eliminar un estudiante de la BD por su id
        public function deletePerson ($id){            
            $sql = "DELETE FROM students WHERE noctrl=?";
            $dPerson = $this->mysqli->prepare($sql);
            $dPerson->bind_param("i", $id);
            $dPerson->execute();
            $dPerson->close;
        }

        // Editar datos de un alumno en la BD >>>>> AUN FALTA IMPLEMENTARLO <<<<<<<
        
        public function updatePerson ($id, $lastname, $s_lastname, $name, $birtdate, $bloodtype, $status, $semester, $ideng){
            if ($this->searchID($id)){
                $sql = "UPDATE students SET lastname=?, s_lastname=?, name=?, birtdate=?, bloodtype=?, status=?, semester=?, idinge=? WHERE noctrl = ?;";
                $query = $this->mysqli->prepare($sql);    
                $query->bind_param("si", $lastname, $s_lastname, $name, $birthdate, $bloodtype, $status, $semester, $ideng, $id);
                $result = $query->execute();
                $query->close();
                return $result;
            }            
            return false;
        }

        // Verificacion de existencia de un ID cuando intente actualizar
        function searchID ($id){
            $sql = "SELECT * FROM students WHERE noctrl=?";
            $stmt = $this->mysqli->prepare($sql);
            $stmt->bind_param("i", $id);
            if ($stmt->execute()){
                $stmt->store_result();
                if ($stmt->num_rows == 1){
                    return true;
                }
            }
            return false;
        }

    }
?>