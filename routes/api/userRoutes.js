//Import Express Router
const router = require('express').Router();

//Import User Controller from userController.js
const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUserById,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');


//Get and Post All Users
    //Route: /api/users
router.route('/').get(getAllUsers).post(createUser);

//Get, Update, and Delete User by Id
    //Route: /api/users/:userId
router.route('/:userId')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUserById);

//Post and Delete Friends
    //Route: /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;