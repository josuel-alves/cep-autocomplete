$(document).ready(function(){
    $("#cep").blur(function(){
        var cepVal = $('#cep').val();
        $.getJSON("//viacep.com.br/ws/"+cepVal+"/json/?callback=?", function(dados){
            if (!("erro" in dados))
            {
                // CEP valid
                console.log(dados);
                $('#result').empty().append('<div class="alert alert-success">'+dados.logradouro +', '+dados.bairro+', '+dados.localidade+' - '+dados.uf+'</div>');
                $('#logradouro').val(dados.logradouro);
                $('#complemento').val(dados.complemento);
                $('#bairro').val(dados.bairro);
                $('#cidade').val(dados.localidade);
                $('#uf').val(dados.uf);
                $('#numero').val('');
                $('#numero').css('border', '1px solid red');
            }
            else
            {
                // CEP invalid
                $('#cep').val('');
                $('#logradouro').val('');
                $('#numero').val('');
                $('#complemento').val('');
                $('#bairro').val('');
                $('#cidade').val('');
                $('#uf').val('');
                $('#result').empty().append('<div class="alert alert-danger">Cep não encontrado. Por favor, tente novamente!</div>');
                return false;
            }
        });
    });
});