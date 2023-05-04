const { CarModel } = require('../src/infrastructure/database');
const car = require('../src/port/car_repository');

describe('create', () => {
    it('Valid Car', async () => {
        CarModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                plate: "ABC1234",
                ano: "2020",
                uf: "MG",
                value: 18500,
                fuelType: "Gasolina"
            }),
        }));

        expect(await car.create({
            id: 1,
            plate: "ABC1234",
            ano: "2020",
            uf: "MG",
            value: 18500,
            fuelType: "Gasolina"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                plate: expect.any(String),
                ano: expect.any(String),
                uf: expect.any(String),
                value: expect.any(Number),
                fuelType: expect.any(String)
            }),
        );
    });
});

describe('updatecar', () => {
    it('Valid update', async () => {
        CarModel.findOneAndUpdate = jest.fn().mockImplementation(() => ({
            exec: () => ({
                toObject: () => ({
                    id: 1,
                    plate: "ABC1234",
                    ano: "2020",
                    uf: "MG",
                    value: 18500,
                    fuelType: "Gasolina"
                }),
            }),
        }));

        expect(await car.update({
            plate: "ABC1234",
        })).toEqual(
            expect.objectContaining({
                ano: expect.any(String),
                uf: expect.any(String),
                value: expect.any(Number),
                id: expect.any(Number),
                fuelType: expect.any(String)
            }),
        );
    });
});

describe('listCars', () => {
    it('Valid list', async () => {
        CarModel.find = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                plate: "ABC1234",
                ano: "2020",
                uf: "MG",
                value: 18500,
                fuelType: "Gasolina"
            }),
        }));

        expect(await car.list()).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                plate: "ABC1234",
                ano: "2020",
                uf: "MG",
                value: 18500,
                fuelType: "Gasolina"
            }),
        );

    });
});

describe('listCarByPlate', () => {
    it('Valid list', async () => {
        CarModel.findOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                plate: "ABC1234",
                ano: "2020",
                uf: "MG",
                value: 18500,
                fuelType: "Gasolina"
            }),
        }));

        expect(await car.getByPlate({
            plate: 'ABC1234'
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                plate: "ABC1234",
                ano: "2020",
                uf: "MG",
                value: 18500,
                fuelType: "Gasolina"
            }),
        );

    });
});

describe('deleteCar', () => {
    it('Valid delete', async () => {
        CarModel.deleteOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                deletedCount: 1,
            }),
        }));

        expect(await car.delete({
            plate: 'ABC1234',
        })).toEqual(1);
    });
});