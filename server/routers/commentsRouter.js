const express = require('express');
const Comment = require('../models/Comments');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const { postId } = req.query;
      const comments = await Comment.find({ postId }).exec();
      res.json(comments);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch comments' });
    }
  });
// Create a new comment
router.post('/', async (req, res) => {
    try {
        const { postId,owner, content } = req.body;
        
        const comment = await Comment.create({ postId, owner, content });
        console.log(JSON.stringify(req.body));
    res.status(201).json(comment);
    } catch (err) {
    res.status(500).json({ error: err});
  }
});

module.exports = router; 
