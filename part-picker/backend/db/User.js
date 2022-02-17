import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  builds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Build" },],
  admin: {
    type: Boolean,
    required: true,
    default: 0
  },
});


const User = mongoose.model('User', UserSchema);

export default User; 
