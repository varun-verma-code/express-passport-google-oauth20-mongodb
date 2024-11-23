import './env.js';
import express from 'express';
import app_router from './routes/auth-routes.js';
import passport from 'passport';
import './config/passport.js';
import dbConnection from './models/mongodb-conn.js';
import cookieSession from 'cookie-session';

const port = process.env.PORT || 3001;

dbConnection();

const app = express();
app.set('view engine', 'ejs');
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // 1 Day in ms
    keys: process.env.COOKIE_KEY,
  })
);
// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/auth', app_router);

app.listen(3000, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
