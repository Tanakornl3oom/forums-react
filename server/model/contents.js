import mongoose from 'mongoose';

const { Schema } = mongoose;

const contentSchema = new Schema({
    title: String,
    content: String,
    tags: Array
});

const model = mongoose.model('content', contentSchema);

module.exports = model;
