const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        plate: "AKN7841",
        ano: "2020",
        uf: "MG",
        value: 24750,
        fuelType: "Gasolina"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro placa', () => {
    const result = Validation.create({
        ano: "2020",
        uf: "MG",
        value: 24750,
        fuelType: "Gasolina"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso válido', () => {
    const result = Validation.update({
        plate: "AKN7841",
        ano: "2019",
        uf: "SP",
        value: 25000,
        fuelType: "Gasolina/Alcool"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem algum parâmetro', () => {
    const result = Validation.update({
        plate: "AKN7841",
        ano: "2019",
        fuelType: "Gasolina/Alcool"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - placa não encontrada', () => {
    const result = Validation.delete({
        
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso válido', () => {
    const result = Validation.delete({
        plate: "AKN7841",
    });
    expect(result).toEqual(undefined);
});