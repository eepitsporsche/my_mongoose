//Import Mongoose
const { Schema, Types } = require('mongoose');

//Reaction Schema For Use In Thoughts
const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectID,
            default: () => new Types.ObjectID(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;