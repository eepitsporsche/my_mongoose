//Import Express Router
const router = require('express').Router();

//Import Thought Controller Functions from thoughtController.js
const {
    getAllThoughts,
    getThought,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');


//Get and Post All Thoughts
    //Route: /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

//Get, Put, and Delete Single Thought by _id
    //Route: /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought);

//Post Reaction to a Thought
    //Route: /api/thoughts/:thoughId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

//Delete Reaction from a Thought
    //Route: /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;