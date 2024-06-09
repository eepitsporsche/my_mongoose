//Import Model
const { User } = require('../models');

//User Routes
const UserController = {

    //Get All Users    
    getAllUsers(req, res) {
        User.find({})
            .then(userData => res.json(userData))
            .catch(err => res.status(500).json(err));
    },

    //Get Single User
    getUser(req, res) {
        User.findById(req.params.userId)
            .then(userData => res.json(userData))
            .catch(err => res.status(500).json(err));
    },

    //Create a User
    createUser(req, res) {
        User.create(req.body)
            .then(userData => res.json(userData))
            .catch(err => res.status(500).json(err));
    },

    //Update a User
    updateUser(req, res) {
        User.findOneAndUpdate(req.params.id, req.body, { new: true })
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: 'User not found.'});
                }
                res.json(userData);
            })
            .catch(err => res.status(500).json(err));
    },

    //Delete a User
    deleteUserById(req, res) {
        User.findOneAndDelete(req.params.id)
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: 'User not found.' });
                }
                res.json({ message: 'User successfully deleted.' });
            })
            .catch(err => res.status(500).json(err));
    },

    //Add a Friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body.friendId || req.params.friendId } },
            { new: true }
        )
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: 'User not found.'});
                }
                res.json(userData);
            })
            .catch(err => res.status(500).json(err));
    },

    //Delete a Friend
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: params.userId},
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'User not found.'});
                }

                //Verify Friend has Been Removed
                const removedFriend = !dbUserData.friends.includes(params.friendId);

                if (removedFriend) {
                    res.json({ message: 'Friend deleted.', dbUserData });
                } else {
                    res.json(dbUserData);
                }
            })
                .catch((err) => res.status(400).json(err));
    },
};

module.exports = UserController;