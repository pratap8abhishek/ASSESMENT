const express = require('express');
const Message = require('../models/Message');
const cron = require('node-cron');
const router = express.Router();

router.post('/schedule', async (req, res) => {
  const { message, day, time } = req.body;
  const newMessage = new Message({ message, day, time });
  await newMessage.save();

  cron.schedule(`${time} ${day} * * *`, () => {
    console.log('Executing scheduled message:', message);
  });

  res.send('Message scheduled');
});

module.exports = router;