import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';

export enum PassionLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  VERY_HIGH = 'VERY_HIGH',
}
export interface IHobby extends Document {
  passionLevel: PassionLevel;
  name: string;
  year: number;
}

const hobbySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  passionLevel: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

export const hobbyModel = mongoose.model<IHobby>('Hobby', hobbySchema);
