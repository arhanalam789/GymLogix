const Goal = require('../models/Goal');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
exports.getGoals = async (req, res) => {
    try {
        const goals = await Goal.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(goals);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
exports.setGoal = async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ msg: 'Please add a goal' });
    }

    try {
        const goal = await Goal.create({
            text,
            user: req.user.id
        });

        res.json(goal);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
exports.updateGoal = async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);

        if (!goal) {
            return res.status(404).json({ msg: 'Goal not found' });
        }

        // Check for user
        if (!req.user) {
            return res.status(401).json({ msg: 'User not found' });
        }

        // Make sure the logged in user matches the goal user
        if (goal.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.json(updatedGoal);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
exports.deleteGoal = async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);

        if (!goal) {
            return res.status(404).json({ msg: 'Goal not found' });
        }

        // Check for user
        if (!req.user) {
            return res.status(401).json({ msg: 'User not found' });
        }

        // Make sure the logged in user matches the goal user
        if (goal.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await goal.deleteOne();

        res.json({ id: req.params.id, msg: 'Goal removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
};
