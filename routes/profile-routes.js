import express from 'express';
import { secureProtectedPage } from '../config/middleware.js';

const router = express.Router();

router.get('/', secureProtectedPage, (req, res) => {
  res.render('profile', { user: req.user.username, picture: req.user.picture });
});

export default router;
