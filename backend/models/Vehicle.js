const mongoose          = require('mongoose');
const Schema            = mongoose.Schema;

const vechicleSchema    = new Schema(
    {
        description: {
            type: String,
            required: true,
            trim: true,
            minlength: 10,
        },
        make: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
        },
        model: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
        },
        km: {
            type: Number,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
        id: {
            type: Number,
            required: false,
            trim: true,
            minlength: 5
        },
        estimated: {
            type: Date,
            required: false,
            trim: true,
        },
        full_name: {
            type: String,
            required: false,
            trim: true,
        },
        status: {
            type: String,
            required: true,
            trim: true,
        }
    },{
        timestamps: true
    }
);

const Vehicle           = mongoose.model('Vehicle', vechicleSchema);

module.exports          = Vehicle;

