export default class BaseService {

  constructor(repository) {
    this.repository = repository;
  }

  async get(id) {
    return this.repository.get(id);
  }

  async getMany(ids) {
    return this.repository.getMany(ids);
  }

  async create(user) {
    return this.repository.create(user);
  }

  async update(userId, user) {
    return this.repository.update(userId, user);
  }

  async delete(userId) {
    return this.repository.delete(userId);
  }
}
