const customExpress = require('./config/custom-express');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect(erro => {
    if (erro) {
        console.log("ERRO");
        console.log(erro);
    }
    else {
        Tabelas.init(conexao);
        console.log("Database conectado com sucesso");
        const app = customExpress();
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    }
});



