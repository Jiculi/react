<?php
	require_once('database.php');
	require 'libreria.php';
	$db = new libreria();

    $accion = $_REQUEST["accion"];

	$result = $db->getPresuntosAccion($accion);

	$data = array();
	if ($result == "{}") {
		$data[] = 	 "No hay nada";
	} else {
		foreach ($result as $row => $r) {

			$data[] = array(
				'nombre' => $r['nombre'],
				'cont' => $r['cont']
			);
		}
	}
	echo json_encode($data);				   
	Database::disconnect();
?>

