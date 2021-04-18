//Cria uma conexão com o banco de dados
const conexao = require('../infraestrutura/conexao');

// A classe Starwars é responsável por fazer todas as queries
class Starwars {
    // Consulta todos os registros na tabela Jedi
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

    // Insere um novo registro na tabela Jedi
    insertJedi(jedi, res) {
        const sql = 'insert into Jedi set ?';
        conexao.query(sql, jedi, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(201).json(resultados);
            }
        });
    }

    // Consulta todos os registros da tabela Jedi cujo `Jedi ID` == id
    getJediById(id, res) {
        const sql = 'select * from Jedi where `Jedi ID`=' + id;
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    // Atualiza o registro da tabela Jedi cujo `Jedi ID` == id
    updateJedi(id, valores, res) {
        const sql = 'update Jedi set ? where `Jedi ID` = ?';
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    // Remove o registro da tabela Jedi cujo `Jedi ID` == id
    removeJedi(id, res) {
        const sql = 'delete from Jedi where `Jedi ID` = ?';
        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    // Consulta todos os registros da tabela LightSaber
    getAllSabers(res) {
        const sql = 'select * from LightSaber';
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(201).json(resultados);
            }
        });
    }

    // Cria um novo registro na tabela LightSaber
    insertSaber(data, res) {
        const sql = 'insert into LightSaber set ?';
        conexao.query(sql, data, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(201).json(resultados);
            }
        });
    }

    // Atualiza um registro da tabela LightSaber cujo ID == id
    updateSaber(id, valores, res) {
        const sql = 'update LightSaber set ? where ID = ?';
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    getSaberById(id, res) {
        const sql = 'select * from LightSaber where ID = ' + id;
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    // Remove o registro da tabela LightSaber cujo ID == id
    removeLightSaber(id, res) {
        const sql = 'delete from LightSaber where ID = ?';
        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    // Consulta todos os registros da tabela Sith
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

    // Consulta todos os registros da tabela Sith cujo `Sith ID` == id
    getSithById(id, res) {
        const sql = 'select * from Sith where `Sith ID`=' + id;
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    // Insere um novo registro na tabela Sith
    insertSith(sith, res) {
        const sql = 'insert into Sith set ?';
        conexao.query(sql, sith, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(201).json(resultados);
            }
        });
    }

    // Atualiza o registro da tabela Sith cujo `Sith ID` == id
    updateSith(id, valores, res) {
        const sql = 'update Sith set ? where `Sith ID` = ?';
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    // Remove o registro da tabela Sith cujo `Sith ID == id
    removeSith(id, res) {
        const sql = 'delete from Sith where `Sith ID` = ?';
        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    // Consulta todos os registros da tabela Padawans
    getAllPadawans(res) {
        const sql = 'select * from Padawan;';
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    // Consulta todos os registros da tabela Padawan cujo ID == id
    getPadawanById(id, res) {
        const sql = 'select * from Padawan where ID = ?';
        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    // Insere um novo registro na tabela Padawan
    insertPadawan(padawan, res) {
        const sql = 'insert into Padawan set ?';
        conexao.query(sql, padawan, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(201).json(resultados);
            }
        });
    }

    // Atualiza o registro da tabela Padawan cujo ID == id
    updatePadawan(id, valores, res) {
        const sql = 'update Padawan set ? where ID = ?';
        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    // Remove o registro da tabela Padawan cujo ID == id
    removePadawan(id, res) {
        const sql = 'delete from Padawan where ID = ?';
        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

}

module.exports = new Starwars();