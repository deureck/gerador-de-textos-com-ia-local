<?php

header("Content-Type: application/json");


$url = "http://host.docker.internal:11434/api/tags";



$response = file_get_contents($url);

echo $response

?>

