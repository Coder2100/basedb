const express = require('express');

const logger = require('morgan');

const bodyParser = require('body-parser');

//setting up the app
const app = express();



//log request to the console

app.use(logger('dev'));
//parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//include routes file path
require('./server/routes')(app);

//set up of default page/api end point
app.get('*', (req, res) => res.status(200).send({
      message: 'Welcome to your clients services portal.',
}));

module.exports = app;
//sequelize model:create --name Todo --attributes title:string