const mongoose = require('mongoose');

const PointSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Location name is required'],
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
        },
        required: true
    }
});

module.exports = PointSchema;