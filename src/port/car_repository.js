const { CarModel } = require('../infrastructure/database');

const CarRepository = {
    async create(data) {
        try {
            const model = new CarModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await CarModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByPlate(data) {
        try {
            const result = await CarModel.findOne({ plate: data.plate }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },


    async update(data) {
        try {
            const update = {
                ano: data.ano,
                uf: data.uf,
                value: data.value,
                fuelType: data.fuelType
            };
            const options = { new: true };
            const filter = { plate: data.plate };
            const result = await CarModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await CarModel.deleteOne({ plate: data.plate }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = CarRepository;