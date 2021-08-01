import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { IHobby } from './hobby';

export interface IUser extends Document {
  name: string;
  hobbies: IHobby['_id'][];
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hobbies: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Hobby',
    },
  ],
});

export const userModel = mongoose.model<IUser>('User', userSchema);
