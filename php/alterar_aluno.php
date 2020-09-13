<?php

include_once("conexao_bd.php");

$nome_aluno  = $_REQUEST['nome_aluno'];
$endereco_aluno = $_REQUEST['endereco_aluno'];
$idade_aluno = $_REQUEST['idade_aluno'];
$curso_aluno = $_REQUEST['curso_aluno'];

$sql = "UPDATE aluno SET endereco = '$endereco_aluno', idade = '$idade_aluno', curso = '$curso_aluno'
WHERE nome = '$nome_aluno'";

$query = mysqli_query($conexao, $sql);

mysqli_close($conexao);

?>