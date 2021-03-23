import passport from "passport";
import { Router } from "express";
import { IAddCommentDto } from "../dto/addComment.dto";
import Comment from "../models/comment";

const router = Router();

router.post("/add",passport.authenticate("jwt", { session: false }), async (req, res) => {
  const comment: IAddCommentDto = req.body;
  

  const model = new Comment(comment);
  
  try {
    const data = await model.save();
    res.json(data);
  } catch (error) {
    res.json(error).status(500);
  }

});

router.get("/getCommentsById/:movieId",async (req,res)=>{
  try {
    const comments = await Comment.find({id:req.query.movieId})
    res.json(comments);
  } catch (error) {
    res.json(error).status(500)
  }
})

export const CommentRouter = router;
