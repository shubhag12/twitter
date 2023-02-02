import express from 'express'

import {createTweet} from '../../controller/tweet-controller.js'
import {toggleLike} from "../../controller/like-controller.js";

import { createcomment } from '../../controller/comment-controller.js';

const router=express.Router();

router.post('/tweets',createTweet)
router.post('/likes/toggle',toggleLike)
router.post('/comments',createcomment)

export default router


