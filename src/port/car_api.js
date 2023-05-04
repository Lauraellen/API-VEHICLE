const Car = require('../application/car_service');
const Utils = require('../utils/utils');

const route = '/car';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Car.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.get(`${route}/list`, async (req, res) => {
        const response = await Car.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.put(`${route}/update`, async (req, res) => {
        const response = await Car.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.patch(`${route}/listCar`, async (req, res) => {
        const response = await Car.getByPlate(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.delete(`${route}/delete/:plate`, async (req, res) => {
        const data = req.body;
        const { plate } = req.params;
        data.plate = plate;
        const response = await Car.delete(data);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};