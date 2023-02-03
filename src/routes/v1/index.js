import express from 'express'

import {createTweet,getTweet} from '../../controller/tweet-controller.js'
import {toggleLike} from "../../controller/like-controller.js";

import { createcomment } from '../../controller/comment-controller.js';
import { signup } from '../../controller/user-controller.js';

const router=express.Router();

router.post('/tweets',createTweet)
router.post('/likes/toggle',toggleLike)
router.post('/comments',createcomment)
router.get('/tweets/:id',getTweet)
router.post('/signup',signup)

export default router


