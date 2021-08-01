import { EnforceDocument, Model } from 'mongoose';

export default class Repository<T> {
  constructor(private model: Model<T>) {}

  public async save(data: T): Promise<EnforceDocument<T, any>> {
    return await this.model.create(data);
  }

  public async saveAll(data: T[]): Promise<any> {
    return await this.model.collection.insertMany(data);
  }

  public async getById(_id: string): Promise<EnforceDocument<T, any>> {
    return await this.model.findById(_id).exec();
  }

  public async getAll(): Promise<EnforceDocument<T, any>[]> {
    return await this.model.find().exec();
  }

  public async updateById(
    _id: string,
    data: T
  ): Promise<EnforceDocument<T, any>> {
    return await this.model.findByIdAndUpdate({ _id }, data).exec();
  }

  public async deleteById(_id: string): Promise<EnforceDocument<T, any>> {
    return await (await this.model.findById(_id)).delete();
  }
}
