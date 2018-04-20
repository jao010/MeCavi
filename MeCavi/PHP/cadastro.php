<!DOCTYPE html>
<html lang="pt-br">
<head>
    <?php
    //CAPTURAR OS DADOS DO CADASTRO================================================
    $nome = !empty($_GET["primeironome"])? $_GET["primeironome"]: null;
    $sobrenome = !empty($_GET["Sobrenome"])? $_GET["Sobrenome"]: null;
    $email = !empty($_GET["Email"])?$_GET["Email"]: null;
    $senha = !empty($_GET["Senha"])?$_GET["Senha"]:null;
    $confirmasenha = !empty($_GET["ConfirmaSenha"])?$_GET["ConfirmaSenha"]:null;
    $pais = !empty($_GET["Pais"])?$_GET["Pais"]:null;
    $dia = !empty($_GET["dia"])?$_GET["dia"]:"00";
    $mes = !empty($_GET["mes"])?$_GET["mes"]:"00";
    $ano = !empty($_GET["ano"])?$_GET["ano"]:"0000";
    $sexo = !empty($_GET["sexo"])?$_GET["sexo"]:null;
    $cell = !empty($_GET["Numero_cell"])?$_GET["Numero_cell"]:null;
    
    ?>
    <meta charset=utf-8>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title>MeCavi-Cadastro</title>
    <link rel="stylesheet" type="text/css" href="../Css/style.css"/>
    <link rel="stylesheet" type="text/css" href="../Css/styleBtn.css"/>
    <link rel="stylesheet" type="text/css" href="../Css/styleInput.css">
</head>
<body>
<div class="divbackground">
</div>
    <div class="divCadastro">
    <div class="divTituloCadastro">
        <label class="tituloCadastro">Cadastro</label>
    </div>
   <section class="sectionCadastro">
       <article class="articleCadastro"><label >Nome: <?php echo "<b>$nome</b>";?></label></article>
        <article class="articleCadastro"><label>Sobrenome: <?php echo "$sobrenome";?></label></article>
        <article class="articleCadastro"><label>Email: <?php echo "<b>$email</b>";?></label></article>
        <article class="articleCadastro"><label>Senha: <?php echo "<b>$senha</b>";?></label></article>
        <article class="articleCadastro"><label>Pais: <?php echo "<b>$pais</b>";?></label></article>
        <article class="articleCadastro"><label>Data de Nascimento: <?php echo "<b>$dia/ $mes/ $ano</b>";?></label></article>
        <article class="articleCadastro"><label>Sexo: <?php echo "<b>$sexo</b>";?></label></article>
        <article class="articleCadastro"><label>Numero Celular: <?php echo "<b>$cell</b>";?></label></article>
        <article class="articleCadastro"><label></label></article>
    </section>
   



</div>
</body>
</html>