// Create a middleware function to prevent users from accessing internal pages when not logged in
function secureProtectedPage(req, res, next) {
  /*
  Passport provides a method on request object isAuthenticated to see if user is authenticated, 
  without writing this logic. You can add this middleware function to protected routes
  */
  if (req.isAuthenticated()) {
    return next(); // Everything is good, nothing to do. return next()
  }
  res.redirect('/login'); // Redirect to login if user is not authenticated
}

// Create a middleware function to check if the user is Not Authenticated
function checkUserAuthenticated(req, res, next) {
  /*
  Passport provides a method on request object isAuthenticated to see if user is authenticated, 
  without writing this logic. You can add this middleware function to not have users visit 
  the login, register page if they are already authenticated
  */
  if (req.isAuthenticated()) {
    return res.redirect('/profile'); // Redirect to dashboard if user is already authenticated
  }
  return next();
}

export { secureProtectedPage, checkUserAuthenticated };
