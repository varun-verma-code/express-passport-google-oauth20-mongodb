# Express application with Google OAuth using Passport

### Until this point, we have

1. Home page with a Login link
2. Login page provides an option to login with Google
3. Clicking on Google will start the authorization process with the requested scopes
4. After authorizing the application, the user will be verified in the application database (mongo)
5. Serialize and deserialize the user

You will see this error when running the application that will be covered next

```bash
Error: Login sessions require session support. Did you forget to use express-session middleware?
```

#

#### Database

Server: https://cloud.mongodb.com/  
DB: PassportGoogleOAuth  
Collection: users
