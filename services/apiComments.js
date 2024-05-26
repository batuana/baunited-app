import axios from './axios';

export async function voteComment(commentId, value) {
  try {
    const response = await axios.patch(`/comments/${commentId}`, { value });
  } catch (err) {
    console.log(err);
  }
}

export async function createComment(postId, text) {
  console.log('id:', postId);
  console.log('text:', text);
  try {
    const response = await axios.post(`/comments`, {
      text,
      post: postId,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
