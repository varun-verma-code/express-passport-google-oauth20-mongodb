import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.send('You reached the callback URL');
});

router.get('/logout', (req, res) => {
  res.send('Logging out');
});

export default router;
