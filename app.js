const { Sequelize, DataTypes } = require('sequelize');
//const pgp = require('pg-')
const bodyParser = require('body-parser');

const sequelize = new Sequelize('peron', 'apexcure', 'password', {
        host: '127.0.0.1',
     dialect: 'postgres'
})

const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
      bodyParser.urlencoded({
            extended:true,
      })
)



app.get('/', (req, res) => {
      res.json({info:'Peron api runs with Node.js, Express, and Postgres'})
})
app.listen(port, () => {
      console.log(`http://localhost:${port}`)
})
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
