const { Post } = require('../../../model');
const logger = require('../../../logger');
const { createErrorResponse } = require('../../../response');


module.exports = async (req, res) => {
    try {
        
        const { postId } = req.params
        const { comment } = req.body

        // add validation here

        const post = await Post.getPost(postId)
        if (!post) throw new Error('Could not find post')
        
        post.addComment(comment)

        res.status(201).json(post);
    } catch (e) {
        logger.error({ e }, e.message)
        res.status(400).json(e)

    }
}