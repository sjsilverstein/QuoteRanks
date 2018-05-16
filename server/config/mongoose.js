const mongoose =  require("mongoose");

module.exports = ()=>{
    mongoose.connect('mongodb://localhost/QuoteRanks');
    mongoose.Promise = global.Promise;
}