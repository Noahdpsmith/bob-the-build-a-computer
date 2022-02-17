import mongoose from 'mongoose';

const PartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Part = mongoose.model("Part", PartSchema);

export default Part;