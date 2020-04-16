import mongoose from 'mongoose';

const { Schema } = mongoose;

const contentSchema = new Schema({
    title: String,
    content: String,
    tags: [
        {
            type: String
        }
    ],
    isActive: {
        type: Boolean,
        default: true
    }
});

const model = mongoose.model('content', contentSchema);

module.exports = model;
