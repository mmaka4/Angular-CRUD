<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");

    return $response;
});

$app->get('/signin', function (Request $request, Response $response, array $args) {
   // Get params from request.
   $user = $request -> getParam('username');
   $pass = $request -> getParam('password');

   // Get db connection
   $response = 'Read data route.';
   $query = "SELECT * FROM users WHERE username='$user' AND password='$pass'";

   try{
       $db = new Db;
       $db = $db -> connect();

       $statement = $db -> query($query);
       $result = $statement -> fetchAll(PDO::FETCH_OBJ);

       $response = "Sign In successful!";

    //    $response = json_encode($result);

   } catch(PDOException $e) {
       $response = '{"error": {"message":' .$e->getMessage().' }}';
   } 

   return $response;
});

$app->post('/signup', function (Request $request, Response $response, array $args) {
    // Get params from request.
    $username = $request -> getParam('username');
    $fullname = $request -> getParam('fullname');
    $password = $request -> getParam('password');

    $response = 'Request received!';

    // Get db connection
    $query = "INSERT INTO users(username, fullname, password) 
            VALUES(:username, :fullname, :password)";

    try {
        $db = new Db;
        $db = $db -> connect();
        $statement = $db -> prepare($query);
        $statement -> bindParam(':username', $username);
        $statement -> bindParam(':fullname', $fullname);
        $statement -> bindParam(':password', $password);

        // Execute query
        $statement -> execute();
        $response = '{"success": {"message": "User has been inserted."} }';

    } catch(PDOException $e) {
        $response = '{"error": {"message":' .$e->getMessage().' }}';
    } 

    return $response;
});

$app->delete('/deleteuser/{username}', function (Request $request, Response $response, array $args) {
    $username = $request -> getAttribute('username');

    $query = "DELETE FROM users WHERE username='$username'";

    try{
        $db = new Db;
        $db = $db -> connect();

        $statement = $db -> prepare($query);
        $statement -> execute();
        $response = '{"success": {"message": "User has been deleted."} }';

    } catch(PDOException $e) {
        $response = '{"error": {"message":' .$e->getMessage().' }}';
    } 

    return $response;
});

$app->get('/readdata', function (Request $request, Response $response, array $args) {
    $response = 'Read data route.';
    $query = "SELECT * FROM users";

    try{
        $db = new Db;
        $db = $db -> connect();

        $statement = $db -> query($query);
        $users = $statement -> fetchAll(PDO::FETCH_OBJ);

        $response = json_encode($users);

    } catch(PDOException $e) {
        $response = '{"error": {"message":' .$e->getMessage().' }}';
    } 

    return $response;
});

$app->get('/readdata/{id}', function (Request $request, Response $response, array $args) {
    $id = $request -> getAttribute('id');

    $query = "SELECT * FROM users WHERE id=$id";

    try{
        $db = new Db;
        $db = $db -> connect();

        $statement = $db -> query($query);
        $users = $statement -> fetchAll(PDO::FETCH_OBJ);

        $response = json_encode($users);

    } catch(PDOException $e) {
        $response = '{"error": {"message":' .$e->getMessage().' }}';
    } 

    return $response;
});

$app->put('/updatedata/{id}', function (Request $request, Response $response, array $args) {
    $id = $request -> getAttribute('id');
    $fullname = $request -> getParam('fullname');
    $username = $request -> getParam('username');
    $password = $request -> getParam('password');

    $query = "UPDATE users SET username=:username, fullname=:fullname, password=:password WHERE id=$id";

try {
    $db = new Db;
    $db = $db -> connect();
    $statement = $db -> prepare($query);
    $statement -> bindParam(':username', $username);
    $statement -> bindParam(':fullname', $fullname);
    $statement -> bindParam(':password', $password);

    // Execute query
    $statement -> execute();
    $response = '{"success": {"message": "User has been updated."} }';

} catch(PDOException $e) {
    $response = '{"error": {"message":' .$e->getMessage().' }}';
} 

    return $response;
});