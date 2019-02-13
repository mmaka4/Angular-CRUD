<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require '../vendor/autoload.php';
require '../src/route/route.php';
require '../src/config/config.php';

$app->run();