<?php

include_once("conexao_bd.php");

$nome_aluno  = $_REQUEST['nome_aluno'];
$endereco_aluno = $_REQUEST['endereco_aluno'];
$idade_aluno = $_REQUEST['idade_aluno'];
$curso_aluno = $_REQUEST['curso_aluno'];

$sql = "INSERT INTO aluno (nome, endereco, idade, curso) 
VALUES ('$nome_aluno', '$endereco_aluno', '$idade_aluno', '$curso_aluno')";

$query = mysqli_query($conexao, $sql);

mysqli_close($conexao);

?>