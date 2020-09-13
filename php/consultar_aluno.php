<?php  

    include_once("conexao_bd.php");

    $nome_aluno  = $_REQUEST['nome_aluno'];

    $sql = "SELECT * FROM aluno WHERE nome = '$nome_aluno'";

    $query = mysqli_query($conexao, $sql);

    mysqli_close($conexao);

?>