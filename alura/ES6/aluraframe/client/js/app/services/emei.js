// tag: bootstrap2-v1, bootstrap3-v1, materialize-v1
if (!options.flags.enableV1) {
    options.flags.enableV1 = true;
    return options;
}

let interesse_vaga = $("#sl_interesse_vaga"),
    recusa_vaga = $("#sl_recusa_vaga"),

    camposOcultos = [
        recusa_vaga
    ]

$.fn.limpaCampo = function () {
    this.val("")
    return this
}

$.fn.mostraUmCampo = function () {
    this.closest('.metaform-field').show()
    this.closest('.row').show()
    return this
}

$.fn.escondeUmCampo = function () {
    this.closest('.metaform-field').hide()
    this.closest('.row').hide()
    return this
}

adicionaFuncionalidadesCampo = function (campo) {
    $(campo)
        .mostraUmCampo()
        .limpaCampo()
}

removeFuncionalidadesCampo = function (campo) {
    $(campo)
        .escondeUmCampo()
        .limpaCampo()
}

mostraArrayDeCampos = function (arrayDeCampos) {
    arrayDeCampos.forEach((campo, index) => {
        adicionaFuncionalidadesCampo(campo)
    })
}

escondeArrayDeCampos = function (arrayDeCampos) {
    arrayDeCampos.forEach((campo, index) => {
        removeFuncionalidadesCampo(campo)
    })
}

let valoresFiltrados = {
    sim: 'Sim',
    nao: 'Não',
}

camposParaObservarEEsconder = [
    { campoEscutado: interesse_vaga, valorEscutado: valoresFiltrados.nao, campoExibir: recusa_vaga },
]

camposParaObservarEEsconder.forEach(camposDeRegras => {
    camposDeRegras.campoEscutado.change(event => {
        setarRegrasCamposEscutados(camposDeRegras, event)
    })
})

setarRegrasCamposEscutados = function (camposDeRegras, event) {
    if (filtraCamposEscutados(camposDeRegras)) {
        if (camposDeRegras.arrayCamposOcultar) escondeArrayDeCampos(camposDeRegras.arrayCamposOcultar)
        if (camposDeRegras.arrayCamposExibir) mostraArrayDeCampos(camposDeRegras.arrayCamposExibir)
        if (camposDeRegras.campoOcultar) removeFuncionalidadesCampo(camposDeRegras.campoOcultar)
        if (camposDeRegras.campoExibir) adicionaFuncionalidadesCampo(camposDeRegras.campoExibir)        
    } else {
        if( camposDeRegras.campoEscutado) removeFuncionalidadesCampo(camposDeRegras.campoExibir)
    }
}

filtraCamposEscutados = function (camposDeRegras) {
    let valorCampo = camposDeRegras.campoEscutado.val(),
        valor = camposDeRegras.valorEscutado

    return valorCampo == valor
}

function startForm() {
    escondeArrayDeCampos( camposOcultos )
}

startForm()