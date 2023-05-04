const create = {
    plate: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    uf: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    value: {
        presence: {
            allowEmpty: true,
        },
        type: 'number',
    },
    fuelType: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    }
};

const update = {
    plate: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    uf: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    value: {
        presence: {
            allowEmpty: true,
        },
        type: 'number',
    },
    fuelType: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    }
};

const get = {
    plate: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    plate: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    create,
    deleteBy,
    update,
    get
};