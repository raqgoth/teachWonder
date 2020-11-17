const Comment = require('../models/Comment');
const commentCtrl = {};

commentCtrl.getComments = async (req,res)=>{
    const comments =  await Comment.find();
    res.json(comments);
};

commentCtrl.getCommentById = async (req,res)=>{
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
};

commentCtrl.createComment = async (req,res)=>{
    const {author,comment} = req.body;
    const newComment = new Comment({author,comment});
    await newComment.save();
    res.json({message:'Comment successfully created!'});
};

commentCtrl.deleteComment = async (req,res)=>{
    await  Comment.findByIdAndDelete(req.params.id);
      res.json({message:'Comment successfully deleted!'});
};

module.exports = commentCtrl;
