const conexao = require('../infraestrutura/conexao');

class Starwars {
    getAllJedi(res) {
        const sql = 'select * from Jedi;';
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    insertJedi(jedi) {
        const sql = 'insert into Jedi set ?'
    }

    getAllSith(res) {
        const sql = 'select * from Sith;';
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    getJediById(id, res) {
        const sql = 'select * from Jedi where id=' + id;
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        })
    }
}

module.exports = new Starwars();