import mongoose from 'mongoose';
import User from './User.js';
import Part from './Part';
import Build from './Build.js';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/graphql_demo');

const db = {
  connection: mongoose.connection,
  models: {
    User,
    Part,
    Build,
  }
};

export default db;
