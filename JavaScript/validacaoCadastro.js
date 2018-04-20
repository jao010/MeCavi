 $('Cadastro.html').ready(function(){
//ESCONDER OS ALERTS
    $("[class='divTituloHome']").css({"margin-bottom":"20px"});
    $("[name='erronome']").hide();
    $("[name='errosobrenome']").hide();
    $("[name='erroemail']").hide();
    $("[name='errosenha']").hide();
    $("[name='erroconfirmarsenha']").hide();
    $("[name='errosenhacomsenha']").hide();
    $("[name='errodia']").hide();
    $("[name='erromes']").hide();
    $("[name='erroano']").hide();
    $("[name='erronumerocell']").hide();
//MOSTRAR OS ERRO DE ACORDO FOR CHAMADO
    $("[name='cadastro']").submit(function(){
        if($("[name='primeironome']").val() == false){
            $("[name='erronome']").show('slow');
            $("[name='primeironome']").css({"border-color":"red", "background-color":"rgba(255, 0, 0, 0.3)" });
            $("[name='primeironome']").focus();
            return false;
        }
    });
    
    $("[name='cadastro']").submit(function(){
        if($("[name='Sobrenome']").val() == false){
            $("[name='errosobrenome']").show('slow');
            $("[name='Sobrenome']").css({"border-color":"red", "background-color":"rgba(255, 0, 0, 0.3)" });
            $("[name='Sobrenome']").focus();
            return false;
        }
    });
    
    $("[name='cadastro']").submit(function(){
        if($("[name='Email']").val() == false){
            $("[name='erroemail']").show('slow');
            $("[name='Email']").css({"border-color":"red", "background-color":"rgba(255, 0, 0, 0.3)" });
            $("[name='Email']").focus();
            return false;
        }
    });
    
    $("[name='cadastro']").submit(function(){
        if($("[name='Senha']").val() == false){
            $("[name='errosenha']").show('slow');
            $("[name='Senha']").css({"border-color":"red", "background-color":"rgba(255, 0, 0, 0.3)" });
            $("[name='Senha']").focus();
            return false;
        }
    });
    
    $("[name='cadastro']").submit(function(){
        if($("[name='ConfirmaSenha']").val() == false){
            $("[name='erroconfirmarsenha']").show('slow');
            $("[name='ConfirmaSenha']").css({"border-color":"red", "background-color":"rgba(255, 0, 0, 0.3)" });
            $("[name='ConfirmaSenha']").focus();
            return false;
        }
    });
    
    $("[name='cadastro']").submit(function(){
        if($("[name='Senha']").val() != $("[name='ConfirmaSenha']").val()){
            $("[name='errosenhacomsenha']").show('slow');
            $("[name='Senha']").css({"border-color":"red", "background-color":"rgba(255, 0, 0, 0.3)" });
            $("[name='ConfirmaSenha']").css({"border-color":"red", "background-color":"rgba(255, 0, 0, 0.3)" });
            return false;
        }
    });
    
    $("[name='cadastro']").submit(function(){
        if($("[name='dia']").val() == false){
            $("[name='errodia']").show('slow');
            $("[name='dia']").css({"border-color":"red", "background-color":"rgba(255, 0, 0, 0.3)" });
            $("[name='dia']").focus();
            return false;
        }
    });
    
    $("[name='cadastro']").submit(function(){
        if($("[name='mes']").val() == false){
            $("[name='erromes']").show('slow');
            $("[name='mes']").css({"border-color":"red", "background-color":"rgba(255, 0, 0, 0.3)" });
            $("[name='mes']").focus();
            return false;
        }
    });
    
    $("[name='cadastro']").submit(function(){
        if($("[name='ano']").val() == false){
            $("[name='erroano']").show('slow');
            $("[name='ano']").css({"border-color":"red", "background-color":"rgba(255, 0, 0, 0.3)" });
            $("[name='ano']").focus();
            return false;
        }
    });
    
    $("[name='cadastro']").submit(function(){
        if($("[name='Numero_cell']").val() == false){
            $("[name='erronumerocell']").show('slow');
            $("[name='Numero_cell']").css({"border-color":"red", "background-color":"rgba(255, 0, 0, 0.3)" });
            $("[name='Numero_cell']").focus();
            return false;
        }
    });

//RESET NO CAMPO ERRADO CASO ELE SEJA ARRUMADO 
    $("[name='primeironome']").blur(function(){
        if($("[name='primeironome']").val()){
            $("[name='primeironome']").css({"border-color": "rgba(0,0,0,0.7)", "background":"white"});
            $("[name='erronome']").hide('slow');
        }
    });
    
    $("[name='Sobrenome']").blur(function(){
        if($("[name='Sobrenome']").val()){
            $("[name='Sobrenome']").css({"border-color": "rgba(0,0,0,0.7)", "background":"white"});
            $("[name='errosobrenome']").hide('slow');
        }
    });
    
    $("[name='Email']").blur(function(){
        if($("[name='Email']").val()){
            $("[name='Email']").css({"border-color": "rgba(0,0,0,0.7)", "background":"white"});
            $("[name='erroemail']").hide('slow');
        }
    });
    
    $("[name='Senha']").blur(function(){
        if($("[name='Senha']").val()){
            $("[name='Senha']").css({"border-color": "rgba(0,0,0,0.7)", "background":"white"});
            $("[name='errosenha']").hide('slow');
        }
    });
    
    $("[name='ConfirmaSenha']").blur(function(){
        if($("[name='ConfirmaSenha']").val()){
            $("[name='ConfirmaSenha']").css({"border-color": "rgba(0,0,0,0.7)", "background":"white"});
            $("[name='erroconfirmarsenha']").hide('slow');
        }
    });
    
    $("[name='ConfirmaSenha']").blur(function(){
        if($("[name='Senha']").val() != $("[name='ConfirmaSenha']").val()){
            $("[name='ConfirmaSenha']").css({"border-color": "rgba(0,0,0,0.7)", "background":"white"});
            $("[name='errosenhacomsenha']").hide('slow');
        }
    });
    
    $("[name='dia']").blur(function(){
        if($("[name='dia']").val()){
            $("[name='Senha']").css({"border-color": "rgba(0,0,0,0.7)", "background":"white"});
            $("[name='dia']").css({"border-color": "rgba(0,0,0,0.7)", "background":"white"});
            $("[name='errodia']").hide('slow');
        }
    });
    
    $("[name='mes']").blur(function(){
        if($("[name='mes']").val()){
            $("[name='mes']").css({"border-color": "rgba(0,0,0,0.7)", "background":"white"});
            $("[name='erromes']").hide('slow');
        }
    });
    
    $("[name='ano']").blur(function(){
        if($("[name='ano']").val()){
            $("[name='ano']").css({"border-color": "rgba(0,0,0,0.7)", "background":"white"});
            $("[name='erroano']").hide('slow');
        }
    });
    
    $("[name='Numero_cell']").blur(function(){
        if($("[name='Numero_cell']").val()){
            $("[name='Numero_cell']").css({"border-color": "rgba(0,0,0,0.7)", "background":"white"});
            $("[name='erronumerocell']").hide('slow');
        }
    });
});