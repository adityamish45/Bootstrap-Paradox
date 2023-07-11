const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  owner: {
    type: Object,
    ref: 'user',
    required: true
},
    content: {
        type: String,
        required: true,
        
  } ,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comments', commentSchema);
