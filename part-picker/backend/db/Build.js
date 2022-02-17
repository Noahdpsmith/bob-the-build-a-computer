import mongoose from 'mongoose';

const BuildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  parts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Part" }]
});

const Build = mongoose.model("Build", BuildSchema);

export default Build;
