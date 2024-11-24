import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = Schema({
  username: {
    type: String,
  },
  googleId: {
    type: String,
  },
  picture: {
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);
export default User;
