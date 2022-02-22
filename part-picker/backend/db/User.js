import mongoose from 'mongoose';
import bcrypt from  'bcrypt';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    builds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Build'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  });


// set up pre-save middleware to create password
UserSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User; 
