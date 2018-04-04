// tag: bootstrap2-v1, bootstrap3-v1, materialize-v1
if (!options.flags.enableV1) {
    options.flags.enableV1 = true;
    return options;
}

const modulo = window.location.pathname.split('/')[1]

const $ip_hora_ocorrencia = $('#ip-hora-ocorrencia'),
      $ip_data_ocorrencia = $('#ip-data-ocorrencia'),
      $ip_placa_veiculo = $('#ip-placa-veiculo')



function atribuiPlaceholders(){
    $('label[for="ip-hora-ocorrencia"]').text('Horário da ocorrência');
    $ip_hora_ocorrencia.attr('placeholder','HH:MM');
    
    $ip_placa_veiculo.attr('style','text-transform:uppercase');
    $ip_placa_veiculo.attr('placeholder','AAA-1234');
    // $ip_placa_veiculo.attr('maxlength',8);
    
    $('#ip-placa-veiculo').on('blur', function(){
        let texto = $(this),
            novoTexto = texto.val().toUpperCase()

        texto.val(novoTexto)
    });
}

function criaMensagens(){
    var mensagem = $('<div id="mensagemObs" class="alert alert-info"></div>');
    $(mensagem).insertAfter($('#ip-hora-ocorrencia').closest('.row-fluid,.row'));
    var texto = "Preencha o <b>Endereço</b> com o local onde o veículo foi solicitado.";
    mensagem.append(texto);
}

const regex = {

    horaDezena : /[0-2]/,
    horaUnidade : /[0-3]/,
    minutoDezena : /[0-5]/,
    
    diaDezena : /[0-3]/,
    diaUnidade : /[0-1]/,
    mesDezena : /[0-1]/,
    mesUnidade : /[0-2]/,

    isNumber : /[0-9]/

}

const mapasDeRegrasDeCaracteres = {

    hora: [
        
        { posicao: 0, regra: regex.horaDezena },
        { posicao: 1, regra: {
            condicao: (texto) => texto.charAt(0) < 2,
            regraA: regex.isNumber,
            regraB: regex.horaUnidade
        } },
        { posicao: 2, regra: undefined },
        { posicao: 3, regra: regex.minutoDezena },
        { posicao: 4, regra: regex.isNumber }

    ]

}

const mascaraHelper = function(){

    this.aplicaMascaras = function(){

        this.aplicaMascaraDeHorario( $ip_hora_ocorrencia )
        this.aplicaMascaraSimples( $ip_placa_veiculo, 'aaa-9999' )

    }

    this.aplicaMascaraSimples = function( $campo, mascara ){
        $campo.mask(mascara)
        $campo.bind('paste', event => event.preventDefault() )
    }
    
    this.aplicaMascaraDeHorario = function($campo){
        
        const maxLength = 5
        
        $campo.mask('99:99')

        const funcaoValidaHorario = this.verificaSeOTextoEValido,
                $mensagemCampoInvalido = this.criaMensagemDeErro($campo, 'Hora inválida')
            
        this.aplicaMascara($campo, $mensagemCampoInvalido, funcaoValidaHorario, mapasDeRegrasDeCaracteres.hora)
    }
    
    this.aplicaMascara = function($campo, $mensagemCampoInvalido, funcaoValidadora, mapaDeRegras){

        this.impedeColagemEmCampoComMascara($campo)

        $campo.on('blur', () => {
            let isCampoInvalido = !funcaoValidadora( mapaDeRegras, $campo.val() )
            if( isCampoInvalido ){
                $campo.val('')
            }
        } )
        $campo.on('keyup', () => {
            let isCampoInvalido = !funcaoValidadora( mapaDeRegras, $campo.val() )
            this.controlaExibicaoDeMensagemAoPreencherCompletamente( isCampoInvalido, $mensagemCampoInvalido, $campo )  
        })
    }

    this.verificaSeOTextoEValido = function(mapaDeRegras, texto){
        let isTextoValido = true,
        textoEmArray = texto.split('')
        
        textoEmArray.forEach( (caractere, posicao) => {
            let isCaractereValido = this.verificaSeOCaractereEValido(mapaDeRegras, caractere, posicao, texto)
            
            if( !isCaractereValido ){
                isTextoValido = false
                return
            }
        } )
        return isTextoValido
    }

    this.verificaSeOCaractereEValido = function(mapaDeRegras, caractere, posicao, texto){
        const regra = this.buscaRegraDoMapaDeRegras( mapaDeRegras, posicao, texto ),
                isRegex = regra && regra.test !== undefined
        return isRegex ? regra.test( caractere ) : true
    }
    
    this.buscaRegraDoMapaDeRegras = function( mapaDeRegras, posicao, texto ){
        let posicaoERegra = mapaDeRegras.filter( regra => regra.posicao === posicao )[0]
        let regra = posicaoERegra.regra ? this.controlaRegraVariavel( posicaoERegra.regra, texto ) : null
        return regra
    }

    this.controlaRegraVariavel = function ( regra, texto ){
        let regraPossuiCondicao = regra.condicao
        return regraPossuiCondicao ? verificaCondicaoDeRegraVariavel( regra, texto ) : regra
    }

    this.verificaCondicaoDeRegraVariavel = function( regra, texto ){
        let cumpreCondicao = regra.condicao( texto )
        return cumpreCondicao ? regra.regraA : regra.regraB
    }

    this.impedeColagemEmCampoComMascara = function ( $campo ){
        $campo.bind('paste', function(e){ e.preventDefault() })
    }
    
    this.controlaExibicaoDeMensagemAoPreencherCompletamente = function(isCampoInvalido, $mensagemCampoInvalido, $campo){
        const isCampoCompletamentePreenchido = $campo.val().indexOf('_') < 0
        if( isCampoCompletamentePreenchido && isCampoInvalido){
            $mensagemCampoInvalido.show()
            $campo.css('color','red')
        }else{
            $mensagemCampoInvalido.hide()
            $campo.css('color','')
        }
    }

    this.criaMensagemDeErro = function($campo, texto){
        let id = `msg-erro-${$campo.attr('id')}`,
            mensagem = `<p class="msg-campo-invalido" id="${id}">${texto}</p>`
        $campo.closest('.metaform-field').append(mensagem)
        
        let $mensagem = $('#' + id)
        $mensagem.css('color','red').hide()
        return $mensagem
        
    }

    return this
}

function aplicaDatePicker( $campo ){

    desabilitaOutrasFormasDeEntrada( $campo )
    
    let waitForJQueryUi = setInterval(function() {
        if (jQuery.ui) {

            $campo.datepicker({ 
                maxDate: new Date(),
                dateFormat: 'dd/mm/yy',
                dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
                dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
                dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
                monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
                monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
                nextText: 'Próximo',
                prevText: 'Anterior'
            })

            $campo.on('focus', ()=>{ 
                let camposDesabilitados = $('.ui-datepicker-unselectable').find('span'),
                    classeCamposDesabilitados = 'disabled-calendar-button'
                
                camposDesabilitados.addClass( classeCamposDesabilitados ) 
            })
        }
    }, 100);

}

function aplicaDatePickerMaterialize( $campo ){

    desabilitaOutrasFormasDeEntrada( $campo )

    $('#ip-data-ocorrencia').pickadate({
        monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
        weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        today: 'Hoje',
        clear: 'Limpar',
        close: 'Pronto',
        labelMonthNext: 'Próximo mês',
        labelMonthPrev: 'Mês anterior',
        labelMonthSelect: 'Selecione um mês',
        labelYearSelect: 'Selecione um ano',
        selectMonths: false, 
        format: 'dd/mm/yyyy',
        max: new Date()
    });
}

function desabilitaOutrasFormasDeEntrada( $campo ){
    $campo.attr('autocomplete','off')
    $campo.on('keydown', event => event.preventDefault() )
    $campo.bind('paste', event => event.preventDefault() )
}

function criaRegrasDeEstiloCss(){

    let tagStyle = `<style type="text/css">
                        .disabled-calendar-button{
                            color: gray;
                        }
                        #ui-datepicker-div{
                            background-color: white;
                        }
                    </style>`

    $('head').append( tagStyle )
}

function carregarArquivosDeLibs(){
    if( !$().mask )  require(['jquery/maskedinput'])
}

function init(){

    carregarArquivosDeLibs()
    
    let waitForMask = setInterval( () => {
        if ($().mask) {            
            const helper = mascaraHelper()
            helper.aplicaMascaras()

            clearInterval(waitForMask);
        }
    }, 200);

    if( modulo == 'portal'){
        aplicaDatePickerMaterialize( $ip_data_ocorrencia ) 
    }else{
        aplicaDatePicker( $ip_data_ocorrencia ) 
    }

    criaRegrasDeEstiloCss()
    atribuiPlaceholders()
    criaMensagens()
    
}

init()