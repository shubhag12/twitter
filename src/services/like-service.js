import { LikeRepository, TweetRepository } from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelId, modelType, userId) {
    if (modelType == "Tweet") {
      var likeable = await this.tweetRepository.find(modelId);
    } else if (modelType == "Comment") {
    
    } else {
      throw new Error("unknown model type");
    }
    const exists = await this.likeRepository.findByUserAndLikeable({
      onModel: modelType,
      likable: modelId,
      user: userId,
    });

    if (exists) {
      likeable.likes.pull(exists.id);
      await likeable.save();
      await exists.remove();
      var added = false;
    } else {
      const newLike = await this.likeRepository.create({
        onModel: modelType,
        likable: modelId,
        user: userId,
      });

      likeable.likes.push(newLike);
      await likeable.save();
      var added = true;
    }
    return added;
  }
}
export default LikeService;
