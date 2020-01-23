import { Schema, model } from 'mongoose';

const budgetSchema = new Schema({
  org_name: String,
  value: Number,
  status: String,
},
  {
    timestamps: true,
  }
);

export default model('Budget', budgetSchema);
