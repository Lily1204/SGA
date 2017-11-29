<?php
    if (isset($_SERVER['HTTP_ORIGIN'])) {  
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");  
        header('Access-Control-Allow-Credentials: true');  
        header('Access-Control-Max-Age: 86400');   
        header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, DELETE");
        header('Access-Control-Allow-Headers: Content-Type');
    }  
    // Rest --> Switch para recepcion de solicitudes dependiendo el metodo del header
    //(GET, POST, PUT, DELETE).
    require_once("StudentDB.php");
    
    class StudentApi {
        public function Api() {
            header('Content-Type: application/SJON');// Tipo de archivo entrante : JSON
            $method = $_SERVER['REQUEST_METHOD'];
            switch($method){
                case 'GET':  //Consulta de datos                   
                    //echo 'GET';
                    $this->getStudents();
                    $this->getGroups();
                    break;
                case 'POST':  //Insercion de nuevo dato   
                    //echo 'POST';
                    $this->addStudent();
                    break;
                case 'PUT':  //Actualizar 
                    //echo'PUT';
                    $this->editStudent();
                    break;    
                case 'DELETE':  //Elimina tupla 
                    echo 'DELETE';
                    $this->removeStudent();
                    break;
                case 'OPTIONS':
                    echo 'Options';
                    break;
                default:  //Metodo no soportado
                    $this->response(405);
                    break;                                
            }//fin del switch
        }//fin de la funcion "Api"


        // Respuesta al cliente
        function response ($code=200, $status="", $message=""){
            http_response_code($code);
            if (!empty($status) && !empty($message)){
                $response = array("status" => $status, "message"=>$message);
                echo json_encode($response, JSON_PRETTY_PRINT);
            }            
        }
         
        // Obtener todos los grupos (del profesor a cargo) o solo un grupo en especifico
        function getGroups (){
            if($_GET['action']=='groups')  {
                $db = new StudentDB();
                if(isset($_GET['id'])){
                    $response = $db->getGroup($_GET['id']);                
                    echo json_encode($response,JSON_PRETTY_PRINT);                    
                }else{ 
                    $response = $db->getGroups();              
                    echo json_encode($response,JSON_PRETTY_PRINT);                    
                }
            }else{
                $this->response(400);
            }                 
        }

        // Obtiene todos los alumnos de la BD 
        function getStudents(){
            if($_GET['action']=='peoples'){         
                $db = new StudentDB();
                if(isset($_GET['id'])){//muestra 1 solo registro si es que existiera ID                 
                    $response = $db->getPeople($_GET['id']);                
                    echo json_encode($response,JSON_PRETTY_PRINT);                    
                }else{ //muestra todos los registros                   
                    $response = $db->getPeoples();              
                    echo json_encode($response,JSON_PRETTY_PRINT);                    
                }
            }else{
            $this->response(400);
            }       
        }

        // Agrega un nuevo alumno a la BD    
        function addStudent (){
            if($_GET['action'] =='people'){
                //Decodificar un JSON de entrada con los datos de la nueva persona
                $strInputData = json_decode(file_get_contents('php://input'));
                $saveData = (array)$strInputData;                
                if (empty($saveData)){
                    $this->response(422, "Sin datos","No agrego ningun dato, Verificar JSON");
                }else
                    if (isset ( $strInputData->noctrl, 
                                $strInputData->lastname, 
                                $strInputData->s_lastname,
                                $strInputData->name,
                                $strInputData->birthdate,
                                $strInputData->bloodtype,
                                $strInputData->status,
                                $strInputData->semester,
                                $strInputData->idinge) ){
                        $npeople = new StudentDB();
                        $npeople->addperson( $strInputData->noctrl, 
                                             $strInputData->lastname, 
                                             $strInputData->s_lastname,
                                             $strInputData->name,
                                             $strInputData->birthdate,
                                             $strInputData->bloodtype,
                                             $strInputData->status,
                                             $strInputData->semester,
                                             $strInputData->idinge);
                        $this->response(200,"Perfecto","Se inserto un nuevo dato a la BD");
                    }else{
                        $this->response(422,"Incompleto","Falta un dato en el JSON");
                    }
            }else{
                $this->response(400);
            }
        }
       
        // Eliminar un alumno de la BD 
        function removeStudent( ){
            if ($_GET['action'] == 'people'){//verifica peticion
                $db = new StudentDB();//crea un objeto instanciado 
                if (isset($_GET['id'])){//verifica si existe un segundo parametro 
                    $db->deletePerson($_GET['id']);//envia dato recibido como paramatro a la funcion
                    $this->response(204);//responde codigo especial para eliminacion
                    exit;
                }
            }
            $this->response(400);
        }

        // Actualizar datos de un estudiante 

        function editStudent (){
            if ( isset($_GET['action']) && isset($_GET['id'])){
                if ($_GET['action'] == "people"){
                    $content = json_decode(file_get_contents('php://input'));
                    $arrayContent = (array)$content;
                    if (empty($arrayContent)){
                        $this->response(422, "Error", "No hay nada en el JSON, Verifiquelo");
                    }else if (isset($strInputData->lastname, 
                                    $strInputData->s_lastname,
                                    $strInputData->name,
                                    $strInputData->birthdate,
                                    $strInputData->bloodtype,
                                    $strInputData->status,
                                    $strInputData->semester,
                                    $strInputData->idinge
                                    )){
                                $db = new StudentDB();
                                $db->updatePerson($_GET['id'], 
                                    $strInputData->lastname, 
                                    $strInputData->s_lastname,
                                    $strInputData->name,
                                    $strInputData->birthdate,
                                    $strInputData->bloodtype,
                                    $strInputData->status,
                                    $strInputData->semester,
                                    $strInputData->idinge);
                                $this->response(200, "Guardado", "Se actualizaron los datos");
                            }else{
                                $this->response(422,"Error", "El dato no esta definido");
                            }
                            exit;
                }
            }
            $this->response(400, "Error","No hizo nada");
        }

        // Actualizar datos de un estudiante en especifico  <<<<<< PENDIENTE validando datos y sin cambiar  ID
        /*function updateData(){
            if ($_GET['action'] == 'alumno'){
                $db = new StudentDB();
                if (isset($_GET['id'])){
                    $db->updateData($_GET['id']);
                    this->response(200);
                    exit;
                }
            }
            $this->response(404);
        }  */     
        

    }//fin de la clase


?>


