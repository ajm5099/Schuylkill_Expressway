var express = require("express");

var app = express();
var PORT = 3000;

//sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const favSongs = [
    {
        Song: 'Regret No. 9',
        Artist: 'Steven Wilson',
        Album: 'Hand Cannot Erase'
    },
    {
        Song: 'Great Gig in the Sky',
        Artist: 'Pink Floyd',
        Album: 'Dark Side of the Moon'
    },
    {
        Song: 'Starship Trooper',
        Artist: 'Yes',
        Album: 'The Yes Album'
    }
];

app.get("/", function(req, res) {
    res.send('Its working!')
});

app.get('/api/favorites', function(req,res){
    return res.json(favSongs);
})

app.post('/api/favorites', function(req,res){
    console.log(req.body);
    res.json(req.body);
})


//These stay at the bottom of the page as listeners
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
})