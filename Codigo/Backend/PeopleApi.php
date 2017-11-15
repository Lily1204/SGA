<?php
    //ApiRest --> estructura para recibir las solicitudes
    require_once("PeopleDB.php");
    
    class PeopleApi {
        public function Api() {
            header('Content-Type: application/SJON');//Tipo de archivo : JSON
            $method = $_SERVER['REQUEST_METHOD'];
            switch($method){
                case 'GET'://consulta                    
                    //echo 'GET';
                    $this->getPeoples();
                    break;
                case 'POST'://Insercion    
                    //echo 'POST';
                    $this->addPerson();
                    break;
                case 'PUT'://Actualizar
                    echo'PUT';
                    break;    
                case 'DELETE'://Eliminar
                    echo 'DELETE';
                    break;
                default: //Metodo no soportado
                    echo 'METODO NO SOPORTADO';
                    break;                                
            }//fin del switch
        }//fin de la funcion "Api"

        //Respuesta al cliente
        function response($code=200, $status="", $message=""){
            http_response_code($code);
            if (!empty($status) && !empty($message)){
                $response = array("status" => $status, "message"=>$message);
                echo json_encode($response, JSON_PRETTY_PRINT);
            }            
        }
        

        // Nota --------> enviar json 
        function getPeoples(){
            if($_GET['action']=='peoples'){         
                $db = new PeopleDB();
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

        //Agrega una nueva persona a la BD    
        function addPerson (){
            if($_GET['action'] =='peoples'){
                //Decodificar un JSON de entrada con los datos de la nueva persona
                $strInputData = json_decode(file_get_contents('php://input'));
                $saveData = (array)$strInputData;                
                if (empty($saveData)){
                    $this->response(422, "Sin datos","No agrego ningun dato, Verificar JSON");
                }else
                    if (isset ( $strInputData->id,
                                $strInputData->name,
                                $strInputData->lastName ) ){
                        $npeople = new PeopleDB();
                        $npeople->addPerson( $strInputData->id, 
                                             $strInputData->name, 
                                             $strInputData->lastName );
                        $this->response(200,"Perfecto","Se inserto un nuevo dato a la BD");
                    }else{
                        $this->response(422,"Incompleto","Falta un dato en el JSON");
                    }
            }else{
                $this->response(400);
            }
        }


        //Eliminar una persona de la BD 
        function delPerson( ){
            if ($_GET['action'] == 'people'){
                $db = new PeopleDB();
                if ($_GET['id']){
                    $db->deletePerson();
                }
            }
        }
        

    }//fin de la clase

//enviar datos por header pasasando 
?>


