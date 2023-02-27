//I took out a lot of what was in this package
//and used what I learned from M4A1 to remake 
//what is here now.  I hope that was ok.  It made
//it easier for me to work with and build.


const 
  express = require('express'),
  mongoose = require('mongoose');//Database

const app = express();
const port = 3000;

//Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//routes  http://localhost:3000/loan
const loanRoutes = require('./routes/loanRoutes');
app.use('/loan', loanRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

mongoose.connect('mongodb+srv://mikejbrown:ssOX5PclZpKgf2VE@cluster0.dk5ltnv.mongodb.net/test', {useNewUrlParser: true})
    .then(() => console.log('connection successfull'))
    .catch((error) => console.error(err));
