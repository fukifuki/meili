const mongoose = require('mongoose');
const PointSchema = require('./pointSchema');

const GuideSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot be more then 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxlength: [500, 'Description cannot be more then 500 characters']
    },
    points: {
        type: [PointSchema]
    },
    guideFormats: {
        type: [String],
        enum: ['text', 'audio'],
        default: 'text',
    }
});