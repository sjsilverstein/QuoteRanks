module.exports = function(){
    require('../models/author.js')();
    return {
        index: function(req, res){
            Author.find({}, function(err,authors){
                if(err){
                    console.log(err);
                }
                res.json({message: "Yeah, All Authors", authors:authors});
            });
            console.log("Looking for Authors");
        },
        author:function(req, res){
            let id = req.params.id;
            Author.findOne({_id:id}, function(err, author){
                if(err){
                    console.log('Something is Wrong');
                    res.json({status: "errors", errors:err});
                }else{
                    console.log('Found the Author');

                    res.json(author);
                }
            });
        },
        createAuthor: function(req, res){
            let newAuthor = new Author({name: req.body.name})
            newAuthor.save(function(err){
                if(err){
                    console.log('Something When wrong in save');
                    res.json({status: "errors", errors:err});
                }else{
                    console.log('Successfully saved author');
                    res.json({message: "Success"});
                }
            });
            console.log('Saving Author...');
        },
        updateAuthor: function(req, res){
            let authorId = req.params.id;
            
            Author.findByIdAndUpdate( authorId, {name: req.body.name}, function(err){
                if(err){
                    console.log('Something went Wrong');
                }else{
                    console.log('Successfully edited a Task!');
                    res.json({message:'Successfully edited a Task!'});
                }
            });
        },
        deleteAuthor: function(req, res){
            let authorId = req.params.id;
            Author.deleteOne({_id: authorId}, function(err){
                if (err){
                    console.log("Error's in Deleting");
                    res.json({error: err});
                }else{
                    console.log("Successfuly Deleted");
                    res.json({message: "Successfully Delete"});
                }
            });
        },
        createQuote: function(req, res){
            let newQuote = new Quote ({content: req.body.content});
            
            // Quote.create(req.body, function(err, data){
            //     if(err){
            //         console.log("Something is wrong making this quote...")
            //     }else{
                    Author.findOneAndUpdate({_id: req.params.id}, {$push: {quotes: newQuote}}, { runValidators: true }, function(err, data){
                        if(err){
                            console.log("Something is wrong in finding one and updating");
                            res.json({status: "errors", errors:err})
                        }else{
                            console.log("Yeah!!!!");
                            res.json({message: "Yeah!!!"});
                        }
                    })
            //     }
            // })            
        },
        updateQuote: function(req,res){
            let authorId = req.params.id;
            Author.findOne( {_id:authorId}, function(err, author){
                if(err){
                    console.log("Something wrong finding author")
                }else{
                    let q = author.quotes.id(req.body._id)
                    q.votes = req.body.votes;
                    author.save((err2, a) => {
                        if (err2) {
                            res.json(err2)
                        } else {
                            res.json(a);
                        }
                    })
                }
            })
            
        }
    }
}