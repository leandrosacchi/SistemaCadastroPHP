<?php
    $host = "localhost:3306";
    $user = "root";
    $pass = "root";
    $db   = "cadastro_aluno";

    $conexao = mysqli_connect($host, $user, $pass, $db);

    if(!$conexao){
        echo "Falha na conexão com o banco de dados";
    } else {
        echo "Conexão estabelecida com sucesso";
    }
?>