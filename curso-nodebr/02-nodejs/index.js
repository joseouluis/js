

function obterUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            return resolve({
                id: 1,
                nome: 'Pirilampo',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(idUser) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            return resolve({
                numero: '123456',
                ddd: 11
            })
        }, 1500)
    })
}

function obterEndereco(idUser, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            return resolve({
                rua: "Afonso barius",
                numero: 10
            })
        }, 1500)
    })
}

async function main() {
    try {
        const user = await obterUsuario();
        
        // const userTel = await obterTelefone(user.id);
        // const userAdr = await obterEndereco(user.id);
        const result = await Promise.all([
            obterTelefone(user.id),
            obterEndereco(user.id)
        ])
        
        const userTel = result[0];
        const userAdr = result[1];
        
        console.log(`
        Nome: ${user.nome},
        Telefone: ${userTel.numero},
        Endereço: ${userAdr.rua}
        `)
    } catch (error) {
        console.log('erro', error);
    }
}

main();

// obterUsuario()
//     .then(user => obterTelefone(user.id))
//     .then(tel => console.log('resultado', tel))
//     .catch(function(erro) {
//         console.log('erro', erro);
//     })