import express from 'express'

import {createTweet,getTweet} from '../../controller/tweet-controller.js'
import {toggleLike} from "../../controller/like-controller.js";

import { createcomment } from '../../controller/comment-controller.js';
import { signup,login } from '../../controller/user-controller.js';
import { authenticate } from '../../middlewares/authenticate.js';

const router=express.Router();

router.post('/tweets',authenticate,createTweet)
router.post('/likes/toggle',toggleLike)
router.post('/comments',authenticate,createcomment)
router.get('/tweets/:id',getTweet)
router.post('/signup',signup)
router.post('/login',login);

export default router


