require("../config/mongoose")();
const mongoose = require("mongoose");

module.exports = function(){

const QuoteSchema = new mongoose.Schema({
        content: {type: String, required: [true, "Quote Must have Content"], minlength: [3, "Quote's must have at least 4 characters."]},
        votes: {type: Number, default: 0 }        
        }, {timestamps: true, strict: false});
    
Quote = mongoose.model('Quotes', QuoteSchema);

const AuthorSchema = new mongoose.Schema({
        name: {type: String, required: [true, "Author name is required"], minlength: [3, "Author's Name must have at least 4 characters."]},
        quotes : [QuoteSchema]
        }, {timestamps: true, strict: false});

Author = mongoose.model('Authors', AuthorSchema);

}