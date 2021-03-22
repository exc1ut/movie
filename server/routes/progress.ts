import { Router } from "express";
import { IUpdateProgress } from "../dto/updateProgress.dto";
import Progress from "../models/progress";

const router = Router();

router.post("/add", async (req, res) => {
  const progress: IUpdateProgress = req.body;
  

  const model = new Progress(progress);
  
  try {
    const data = await model.save();
    res.json(data);
  } catch (error) {
    res.json(error).status(500);
  }
  
});

export const ProgressRouter = router;
