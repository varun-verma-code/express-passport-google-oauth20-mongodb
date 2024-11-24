import './env.js';
import express from 'express';
import auth_router from './routes/auth-routes.js';
import profile_router from './routes/profile-routes.js';
import passport from 'passport';
import './config/passport.js';
import dbConnection from './models/mongodb-conn.js';
import cookieSession from 'cookie-session';
import { checkUserAuthenticated } from './config/middleware.js';

const port = process.env.PORT || 3001;

dbConnection();

const app = express();
app.set('view engine', 'ejs');
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // 1 Day in ms
    keys: [process.env.COOKIE_SECRET], // Must be an array and may have a list of secrets
  })
);
// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

app.get('/', checkUserAuthenticated, (req, res) => {
  res.render('home');
});

app.use('/auth', auth_router);
app.use('/profile', profile_router);

app.listen(3000, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
