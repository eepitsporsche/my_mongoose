//Import Mongoose
const { Schema, model, Types } = require('mongoose');

//Users Schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            //REGEX Email Validation
            validate: {
                validator: function (v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                }
            }
        },

        thoughts: [
            {
                type: Schema.Types.OnjectID,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.OnjectID,
                ref: 'user',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//Virtual for Number of Friends Count
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

//User Model Using the userSchema
const User = model('User', userSchema);

module.exports = User;