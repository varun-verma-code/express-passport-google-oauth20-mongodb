import './env.js';
import express from 'express';
import app_router from './routes/auth-routes.js';
import passport from './config/passport.js';
import dbConnection from './models/mongodb-conn.js';

const port = process.env.PORT || 3001;

dbConnection();

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/auth', app_router);

app.listen(3000, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
