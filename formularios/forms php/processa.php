<?php
    // Captura dos dados
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $idade = $_POST["idade"];
    $sexo = $_POST["sexo"];
    $estado = $_POST["estado"];
    $mensagem = $_POST["mensagem"];

    echo "<h2>Dados Recebidos</h2>";

    echo "Nome: $nome <br>";
    echo "Email: $email <br>";
    echo "Idade: $idade <br>";
    echo "Sexo: $sexo <br>";
    echo "Estado: $estado <br>";

    echo "<br>Mensagem:<br>";
    echo $mensagem . "<br>";

    echo "<br>Linguagens:<br>";

    // Verifica se marcou alguma linguagem
    if(isset($_POST["linguagens"])) {

        foreach($_POST["linguagens"] as $ling) {
            echo "- " . $ling . "<br>";
        }

    } else {
        echo "Nenhuma linguagem selecionada";
    }
?>