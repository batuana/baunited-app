import axios from './axios';

export async function getAllPosts() {
  try {
    const response = await axios.get('/posts');

    return response.data.data.data;
  } catch (err) {
    console.log(err);
  }
}

export async function votePost(postId, value) {
  try {
    const response = await axios.patch(`/posts/${postId}`, { value });
  } catch (err) {
    console.log(err);
  }
}

export async function getPost(postId) {
  try {
    const response = await axios.get(`/posts/${postId}`);

    return response.data.data.data;
  } catch (err) {
    console.log(err);
  }
}

export async function createPost(title, description) {
  try {
    const response = await axios.post(`/posts`, { title, description });

    return response.data;
  } catch (err) {
    console.log(err);
  }
}
