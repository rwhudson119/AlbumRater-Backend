const cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
app.use(bodyParser.json());
app.use(cors());
app.use(methodOverride('_method'));
require('./models');


//const contactRouter = require('./routes/contactRouter');

// handler for clients
//app.use('/contacts', contactRouter);

app.get('/', (req, res) =>{
	res.send('<h1>Website</h1>');
})

app.listen(process.env.PORT || 4000, ()=> {
	console.log('The website app is listening on port 4000!');
})