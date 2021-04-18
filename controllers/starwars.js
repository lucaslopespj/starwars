const Starwars = require('../models/starwars');

module.exports = app => {
    app.get('/starwars', (req, res) => {
        res.send("Você está no mundo StarWars!");
    });

    app.get('/starwars/all_jedi', (req, res) => {
        Starwars.getAllJedi(res);
    });

    app.get('/starwars/jedi/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Starwars.getJediById(id, res);
    });

    app.post('/starwars/new_jedi', (req, res) => {
        const jedi = req.body;
        console.log(jedi);
        Starwars.insertJedi(jedi, res);
    });
}