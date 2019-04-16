<?php
header('Content-Type: text/html; charset=UTF-8'); 
ini_set('memory_limit', '256M');
 
class libreria
{
    public function getPresuntosAccion($llave){
        $pdo = Database::connect();
        $sql = "SELECT cont, nombre
        FROM pfrr_presuntos_audiencias
        where num_accion = :pat and (status = 1) and (pfrr_presuntos_audiencias.tipo <> 'titularICC') 
                and (pfrr_presuntos_audiencias.tipo <> 'titularTESOFE') and (pfrr_presuntos_audiencias.tipo <> 'responsableInforme')
        ";
        
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam("pat", $llave, PDO::PARAM_STR);
		$stmt->execute();
		return $stmt->fetchAll();
    }

}