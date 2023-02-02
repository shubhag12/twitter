import {TweetRepository,HashtagRepository} from '../repository/index.js';
class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }
  async create(data) {
    const content = data.content;
    let tags = content.match(/#[a-zA-Z0-9_]+/g); //this regex extracts hashtags
    tags = tags.map((element) => element.substring(1)).map((element)=>element.toLowerCase());
    let tweet = await this.tweetRepository.create(data);
    let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
    let titleOfAlreadyPresentTags = alreadyPresentTags.map((val) => val.title);
    let newtag = tags.filter(
      (value) => !titleOfAlreadyPresentTags.includes(value)
    );
    newtag = newtag.map((tag) => {
      return {
        title: tag,
        tweets: [tweet.id],
      };
    });
    let response = await this.hashtagRepository.bulkCreate(newtag);
    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });
    return tweet;
  }
  async get(tweetId){
    const tweet=await this.tweetRepository.getWithComment(id)
    return tweet;
  }


}
export default TweetService;
/**
 * bulk create in mongoose
 * filter title of hashtag based on multiple tag
 * how to add tweet id inside all the hashtag
 *
 */
