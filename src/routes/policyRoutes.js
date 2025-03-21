// routes/policyRoutes.js
const express = require('express');
const Policy = require('../models/Policy');
const User = require('../models/User');

const router = express.Router();

// Search policy info by username
router.get('/search/:username', async (req, res) => {
  try {
    const user = await User.findOne({ firstName: req.params.username });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const policies = await Policy.find({ user: user._id }).populate('lob carrier');
    res.json({ user, policies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Aggregate policy count per user
router.get('/aggregate', async (req, res) => {
  try {
    const result = await Policy.aggregate([
      {
        $group: {
          _id: "$user",
          totalPolicies: { $sum: 1 },
        },
      },
    ]);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
