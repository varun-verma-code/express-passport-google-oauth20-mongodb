import express from 'express';
import passport from 'passport';
import { checkUserAuthenticated } from '../config/middleware.js';

const router = express.Router();

router.get('/login', checkUserAuthenticated, (req, res) => {
  res.render('login');
});

router.get(
  '/google',
  checkUserAuthenticated,
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

router.get(
  '/google/callback',
  checkUserAuthenticated,
  passport.authenticate('google'),
  (req, res) => {
    console.log(req.user);
    res.redirect('/profile');
  }
);

router.get('/logout', (req, res) => {
  res.send('Logging out');
});

export default router;
