import Repository from '../common/base-repository';
import Logger from '../helper/logger';

export default class CrudResolver<T> {
  constructor(protected repository: Repository<T>) {}

  public async save(data: T): Promise<T> {
    return await this.repository.save(data).catch(this.handleError);
  }

  public async saveAll(data: T[]): Promise<T[]> {
    return await this.repository.saveAll(data).catch(this.handleError);
  }

  public async getOneById(id: string): Promise<T> {
    return await this.repository.getById(id).catch(this.handleError);
  }

  public async updateOneById(id: string, update: any): Promise<T> {
    return await this.repository.updateById(id, update).catch(this.handleError);
  }

  public async deleteOneById(id: string): Promise<any> {
    return await this.repository.deleteById(id).catch(this.handleError);
  }

  public async getAll(): Promise<T[]> {
    return await this.repository.getAll().catch(this.handleError);
  }

  public async bulkUpdate(
    ids: string[],
    field: string,
    value: string
  ): Promise<T[]> {
    return await Promise.all(
      ids.map(async (id) => await this.updateOneById(id, { [field]: value }))
    ).catch(this.handleError);
  }

  public async bulkDelete(ids: string[]): Promise<T[]> {
    return await Promise.all(
      ids.map(async (id) => await this.deleteOneById(id))
    ).catch(this.handleError);
  }

  handleError(e) {
    Logger.error(`${e}`);
    return e;
  }
}
