//Import Mongoose and Reaction Schema
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');

//Thoughts Schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
              required: true,
        
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

//Virtual for Number of Reactions Count
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

//Thought Model Using the thoughtSchema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;