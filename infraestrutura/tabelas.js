class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarJediRank();
        this.criarSithRank();
        this.criarLightSaber();
        this.criarJedi();
        this.criarPadawan();
        this.criarSith();
        console.log('tabelas foram criadas');
    }

    criarJediRank() {
        const sql = 'create table if not exists `Jedi Rank`(' +
            '`Rank Name` varchar(15) not null,' +
            'primary key (`Rank Name`));';

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro);
            }
            else {
                console.log('Tabela "Jedi Rank" criada com sucesso!');
            }
        });
    }

    criarSithRank() {
        const sql = 'create table if not exists `Sith Rank`(' +
            '`Rank Name` varchar(15) not null,' +
            'primary key (`Rank Name`));';

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro);
            }
            else {
                console.log('Tabela "Sith Rank" criada com sucesso!');
            }
        });
    }

    criarLightSaber() {
        const sql = 'create table if not exists LightSaber(' +
            'ID int unsigned not null auto_increment,' +
            'Color varchar(10) null,' +
            '`Current Owner` varchar(45) null,' +
            'primary key (ID));';

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro);
            }
            else {
                console.log('Tabela "LightSaber" criada com sucesso!');
            }
        });
    }

    criarJedi() {
        const sql = 'create table if not exists Jedi (' +
            '`Jedi ID` int unsigned not null auto_increment primary key,' +
            'Name varchar(45) null,' +
            '`Jedi Rank` varchar(45) null,' +
            '`Light Saber` int unsigned null,' +
            'constraint fk_jedi_rank foreign key(`Jedi Rank`) '+
            'references `Jedi Rank`(`Rank Name`) ' +
            'on delete no action on update no action);';

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro);
            }
            else {
                console.log('Tabela "Jedi" criada com sucesso!');
            }
        });
    }


    criarPadawan() {
        const sql = 'create table if not exists Padawan(' +
            'ID int unsigned not null auto_increment,' +
            'Name varchar(45) null,' +
            'Master int unsigned not null,' +
            'LightSaber int unsigned not null,' +
            'primary key(ID), constraint fk_padawan foreign key(Master)' +
            'references Jedi(`Jedi ID`) on delete no action on update no action);';

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro);
            }
            else {
                console.log('Tabela "Padawan" criada com sucesso!');
            }
        });
    }



    criarSith() {
        const sql = 'create table if not exists Sith(' +
            '`Sith ID` int unsigned not null auto_increment,' +
            'Name varchar(45) null,' +
            '`Sith Rank` varchar(15) not null,' +
            'LightSaber int unsigned not null,' +
            'primary key(`Sith ID`),' +
            'constraint fk_sith_rank foreign key(`Sith Rank`) references `Sith Rank`(`Rank Name`) ' +
            'on delete no action on update no action,' +
            'constraint fk_light_saber foreign key(LightSaber) references LightSaber(ID) ' +
            'on delete no action on update no action);';

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro);
            }
            else {
                console.log('Tabela "Sith" criada com sucesso!');
            }
        });
    }
}

module.exports = new Tabelas();