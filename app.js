const cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
app.use(bodyParser.json());
app.use(cors());
app.use(methodOverride('_method'));
var path = require("path");
require('./Models');

const profileRouter = require('./Routes/profileRoutes');
const songRouter = require('./Routes/songRoutes');
const albumRouter = require('./Routes/albumRoutes');
const ratingRouter = require('./Routes/ratingRoutes');
const deezerRouter = require('./Routes/deezerRoutes');


// handler for clients
app.use('/album', albumRouter);
app.use('/profile', profileRouter);
app.use('/rating', ratingRouter);
app.use('/deezer',deezerRouter);
app.use('/song', songRouter);


app.get('/', (req, res) =>{
	res.send('<h1>Album Rater - Backend</h1>');
})

app.listen(process.env.PORT || 4000, ()=> {
	console.log('The website app is listening on port 4000!');
})