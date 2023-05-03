const mongoose = require('mongoose');

const uri = `mongodb+srv://root:root123@cluster0.8lojj39.mongodb.net/test`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    plate: {
        type: String,
        unique: true,
    },
    ano: {
        type: String,
        unique: true,
    },
    uf: {
        type: String,
        unique: true,
    },
    value: {
        type: Number,
        unique: true,
    },
    fuelType: {
        type: String,
        unique: true,
    },
});

const CarModel = mongoose.model('CarModel', CarSchema);

module.exports = {
    CarModel,
};