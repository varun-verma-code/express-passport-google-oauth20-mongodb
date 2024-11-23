# Express application with Google OAuth using Passport

### Until this point, we have

1. Home page with a Login link
2. Login page provides an option to login with Google
3. Clicking on Google will start the authorization process with the requested scopes
4. After authorizing the application, the user will be verified in the application database (mongo)
5. Serialize and deserialize the user
6. Add cookie and session support

When using the latest version of passport, you will see the following error. This is a [known issue](<[https://](https://github.com/jaredhanson/passport/issues/904)>) and the owner plans to fix it in a future release. For now, suggestion is to pin the passport version to be **0.5.0** to resolve the issue.

```bash
TypeError: req.session.regenerate is not a function
```

#

#### Database

Server: https://cloud.mongodb.com/  
DB: PassportGoogleOAuth  
Collection: users
