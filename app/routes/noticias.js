const db = require('../../config/dbConnection');
module.exports = function(app){
    app.get('/noticias', function(req, res){
        db('SELECT * FROM passgens', res);
    });
}