//server side application
//THIS IS EXPRESS SERVER
const {syncAndSeed, models: {User}} = require('./db');

const express = require('express');
const { static } = express;
const path = require('path');

const app = express();

app.use('/public', static(path.join(__dirname, '../public'))); //main.js is default output for javascript

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, '../index.html')));

app.get('/api/users', async(req, res, next)=> {
  try {
    res.send(await User.findAll());
  }
  catch(ex){
    next(ex);
  }
});

const init = async()=> {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

init();

//DATABASE CODE MOVED TO DB.JS
/*
const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/fullstack_demo_db');

const User = conn.define('user', {
  name: STRING 
});
const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  await Promise.all([
    User.create({ name: 'moe' }),
    User.create({ name: 'larry' }),
    User.create({ name: 'lucy' })
  ]);
};

*/