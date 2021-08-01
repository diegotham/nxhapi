import * as mongoose from 'mongoose';
import HobbyResolver from '../api/hobbies/resolver';
import { IHobby } from '../model/hobby';
import { userModel } from '../model/user';
import { hobbiesSeeds } from '../seeds/hobbies';
import { usersSeeds } from './users';

export async function initSeeds() {
  // Hobbies
  const hobbyResolver = new HobbyResolver();
  await hobbyResolver.saveAll(hobbiesSeeds as IHobby[]);
  const hobbies = await hobbyResolver.getAll();
  const ids = hobbies.map((v) => v._id);

  // Users
  for (const u of usersSeeds) {
    const randomHobby = ids[Math.floor(Math.random() * ids.length)];
    userModel.create({
      _id: mongoose.Types.ObjectId(),
      name: u.name,
      hobbies: [randomHobby],
    });
  }
}
