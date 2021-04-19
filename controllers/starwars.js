const Starwars = require('../models/starwars');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send("Você está na raíz do mundo starwars!");
    });

    app.get('/starwars', (req, res) => {
        res.send("Você está no mundo StarWars!");
    });

    //--------------------------------------------------------------------------

    ///////////////////////////////////////////////
    //             Rotas para JEDI               //
    ///////////////////////////////////////////////

    // Consulta todos os Jedi
    app.get('/starwars/all_jedi', (req, res) => {
        Starwars.getAllJedi(res);
    });

    // Consulta Jedi pelo id
    app.get('/starwars/jedi/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Starwars.getJediById(id, res);
    });

    // Insere novo Jedi
    app.post('/starwars/new_jedi', (req, res) => {
        const jedi = req.body;
        console.log(jedi);
        Starwars.insertJedi(jedi, res);
    });

    // Atualiza um Jedi pelo seu ID
    app.put('/starwars/jedi/:id/update', (req, res) => {
        const id = parseInt(req.params.id);
        console.log(req.params);
        const valores = req.body;
        console.log(valores);
        Starwars.updateJedi(id, valores, res);
    });

    // Remove um Jedi do banco de dados pelo seu ID
    app.delete('/starwars/jedi/:id/remove', (req, res) => {
        const id = parseInt(req.params.id);
        Starwars.removeJedi(id, res);
    });

    //--------------------------------------------------------------------------

    ///////////////////////////////////////////////
    //           Rotas para LightSaber           //
    ///////////////////////////////////////////////

    // Colsulta todos os lightsabers
    app.get('/starwars/lightsabers', (req, res) => {
        Starwars.getAllSabers(res);
    });

    // Insere um novo lightsaber
    app.post('/starwars/new_saber', (req, res) => {
        const data = req.body;
        console.log(data);
        Starwars.insertSaber(data, res);
    });

    // Atualiza um lightsaber
    app.put('/starwars/lightsabers/:id/update', (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;
        console.log(id);
        console.log(valores);
        Starwars.updateSaber(id, valores, res);
    });

    // Consulta um lightsaber pelo seu ID
    app.get('/starwars/lightsabers/:id', (req, res) => {
        const id = parseInt(req.params.id);
        console.log(id);
        Starwars.getSaberById(id, res);
    });

    // Remove um lightsaber do banco de dados pelo seu ID
    app.delete('/starwars/lightsabers/:id/remove', (req, res) => {
        const id = parseInt(req.params.id);
        console.log(id);
        Starwars.removeLightSaber(id, res);
    });


    //--------------------------------------------------------------------------

    ///////////////////////////////////////////////
    //              Rotas para Sith              //
    ///////////////////////////////////////////////

    // Consulta todos os Sith
    app.get('/starwars/all_sith', (req, res) => {
        Starwars.getAllSith(res);
    });

    // Consulta Sith pelo id
    app.get('/starwars/sith/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Starwars.getSithById(id, res);
    });

    // Insere novo Sith
    app.post('/starwars/new_sith', (req, res) => {
        const sith = req.body;
        console.log(sith);
        Starwars.insertSith(sith, res);
    });

    // Atualiza um Sith pelo seu ID
    app.put('/starwars/sith/:id/update', (req, res) => {
        const id = parseInt(req.params.id);
        console.log(req.params);
        const valores = req.body;
        console.log(valores);
        Starwars.updateSith(id, valores, res);
    });

    // Remove um Sith do banco de dados pelo seu ID
    app.delete('/starwars/sith/:id/remove', (req, res) => {
        const id = parseInt(req.params.id);
        console.log(id);
        Starwars.removeSith(id, res);
    });

    //--------------------------------------------------------------------------

    ///////////////////////////////////////////////
    //              Rotas para Padawan           //
    ///////////////////////////////////////////////

    // Consulta todos os Padawans
    app.get('/starwars/all_padawans', (req, res) => {
        Starwars.getAllPadawans(res);
    });

    // Consulta Padawan pelo id
    app.get('/starwars/padawan/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Starwars.getPadawanById(id, res);
    });

    // Insere novo Padawan
    app.post('/starwars/new_padawan', (req, res) => {
        const padawan = req.body;
        console.log(padawan);
        Starwars.insertPadawan(padawan, res);
    });

    // Atualiza um Padawan pelo seu ID
    app.put('/starwars/padawan/:id/update', (req, res) => {
        const id = parseInt(req.params.id);
        console.log(req.params);
        const valores = req.body;
        console.log(valores);
        Starwars.updatePadawan(id, valores, res);
    });

    // Remove um Padawan do banco de dados pelo seu ID
    app.delete('/starwars/padawan/:id/remove', (req, res) => {
        const id = parseInt(req.params.id);
        console.log(id);
        Starwars.removePadawan(id, res);
    });
}