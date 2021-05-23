export default class BaseRepository {

  constructor(model) {
    this.model = model;
  }


  async get(id) {
    return this.model.findOne({
      _id: id,
    });
  }


  async getMany(ids) {
    return this.model.find({
      _id: {
        $in: ids,
      },
    });
  }

  async create(model) {
    return this.model.create(model);
  }

  async update(id, model) {
    return this.model.findByIdAndUpdate(id, model);
  }

  async deleteUser(id) {
    return this.model.findByIdAndDelete({ _id: id });
  }
}
