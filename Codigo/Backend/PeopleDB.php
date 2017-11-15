<?php
//include 'Config.php';

    class PeopleDB {
        protected $mysqli;

        
        const LOCALHOST = 'localhost';
        const USER = 'root';
        const PASSWORD = '';
        const DATABASE = 'sistema';
               
        //Constructor de la clase para conexion a la BD con MySQL
        public function __construct(){
            try{
                $this->mysqli = new mysqli (self::LOCALHOST, self::USER, self::PASSWORD, self::DATABASE);
            }catch (mysqli_sql_exception $e) {
                //Si no se puede realizar la conexion
                http_response_code(500);
                exit;                
            }
        }


        //Busca un id especifico en la BD
        public function getPeople($id=0){
            $stmt = $this->mysqli->prepare("SELECT * FROM alumno WHERE no_ctrl = ?;");
            $stmt->bind_param('i', $id);
            $stmt->execute();
            $result = $stmt->get_result();            
            $people = $result->fetch_all(MYSQLI_ASSOC);
            $stmt->close();
            return $people;
        }

        //Muestra todo el contenido de la BD 
        public function getPeoples(){
            $result = $this->mysqli->query('SELECT * FROM alumno');
            $peoples = $result->fetch_all(MYSQLI_ASSOC);
            $result->close();
            return $peoples;
        }

        //Agrega una persona a la BD
        public function addperson ($id, $name, $lastname){
            $query = "INSERT INTO alumno VALUES (?,?,?);";
            $new = $this->mysqli->prepare($query);
            $new->bind_param('iss', $id, $name, $lastname);
            $result = $new->execute();
            $new->close();
            return $result;
        }

        //Eliminar una persona de la BD
        public function deletePeople ($id){            
            $sql = "DELETE FROM alumnos WHERE no_ctrl=?";
            $dPerson = $this->mysqli->prepare($sql);
            $dPerson->bind_param("i", $id);
            $nPerson->execute();
            $nPerson->close;
        }

    }
?>