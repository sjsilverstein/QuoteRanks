const mongoose = require('mongoose');
const control = require('../controllers/authorsController.js')();
const path = require('path');

module.exports = function(app){
    
    app.get('/authors', function(req, res){
        control.index(req, res);
    });
    app.get('/author/:id', function(req,res){
        control.author(req,res);
    });
    app.post('/authors', function(req,res){
        control.createAuthor(req,res);
    });
    app.put('/authors/edit/:id', function(req,res){
        control.updateAuthor(req,res);
    });
    app.delete('/authors/:id', function(req,res){
        control.deleteAuthor(req,res);
    });
    app.put('/newQuoteBy/:id', function(req,res){
        control.createQuote(req,res);
    })
    app.put('/updateQuote/:id', function(req,res){
        control.updateQuote(req,res);
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./angular/dist/index.html"))
    });    
}