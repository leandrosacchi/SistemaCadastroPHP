function Inclusao() {
    var dadosajax = {
        'nome_aluno': document.getElementById("nome").value,
        'endereco_aluno': document.getElementById("endereco").value,
        'idade_aluno': document.getElementById("idade").value,
        'curso_aluno': document.getElementById("curso").value
    };

    pageurl = "php/incluir_aluno.php";

    $.ajax({
         url: pageurl,
         data: dadosajax,
         type: 'POST',
         cache: false,
         error: function(XMLHttpRequest, textStatus, errorThrown)
            {
               alert('Erro: Acessar Função PHP!!');
            },
         success: function(result)
            {
               alert('Inclusão realizada com sucesso!');
            }
      }) 
 };

 function Exclusao() {
    var dadosajax = {
      'nome_aluno': document.getElementById("nome").value
     };

    pageurl = "excluir_aluno.php";

    $.ajax({
         url: pageurl,
         data: dadosajax,
         type: 'POST',
         cache: false,
         error: function(XMLHttpRequest, textStatus, errorThrown)
            {
               alert('Erro: Acessar Função PHP!!');
            },
         success: function(result)
            {
               alert('Exclusão realizada com sucesso!');
            }
      })
 };

 function Alteracao() {
    var dadosajax = {
      'nome_aluno': document.getElementById("nome").value,
      'endereco_aluno': document.getElementById("endereco").value,
      'idade_aluno': document.getElementById("idade").value,
      'curso_aluno': document.getElementById("curso").value
     };

    pageurl = "alterar_aluno.php";

    $.ajax({
         url: pageurl,
         data: dadosajax,
         type: 'POST',
         cache: false,
         error: function(XMLHttpRequest, textStatus, errorThrown)
            {
               alert('Erro: Acessar Função PHP!!');
            },
         success: function(result)
            {
               alert('Alteração realizada com sucesso!');
            }
      })
 };

 function Consulta() {
    var dadosajax = {
      'nome_aluno': document.getElementById("nome").value
     };

     pageurl = "consultar_aluno.php";

     $.ajax({
         url: pageurl,
         data: dadosajax,
         type: 'POST',
         cache: false,
         error: function(XMLHttpRequest, textStatus, errorThrown)
            {
               alert('Erro: Acessar Função PHP!!');
            },
         success: function(result)
            {
               alert('Consulta realizada com sucesso!');
            }
      })
 };