//Import Models
const { Thought, User, Reaction } = require('../models');
const { Types } = require('mongoose');

// Thought Routes
const ThoughtController = {

    //Get All Thoughts
    async getAllThoughts(req,res) {
        try {
            const thoughts = await Thought.find({});
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },

    //Get Single Thought
    async getThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            if(!thought) {
                res.status(404).json({ message: 'No thought found by this ID.'})
            } else {
                res.json(thought);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Create Thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.status(201).json(thought);
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //Delete Thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId });
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Update a Thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
            if(!thought) {
                res.status(404).json({ message: 'No thought found by that ID.'});
            } else {
                res.json(thought);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Add a Reaction to a Thought
    async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );

            thought ? res.json(thought) : res.status(404).json({ message: notFound });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //Delete a Reaction from a Thought
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );

            thought ? res.json(thought) : res.status(404).json({ message: notFound });
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = ThoughtController;