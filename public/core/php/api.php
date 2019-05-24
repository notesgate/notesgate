<?php
	#header("Location: 127.0.0.1:3333/feature/verify");

	$uri="127.0.0.1:3333/feature/verify/".substr($_SERVER['QUERY_STRING'], 25);
	header("Location: http://$uri");
	exit();
?>
